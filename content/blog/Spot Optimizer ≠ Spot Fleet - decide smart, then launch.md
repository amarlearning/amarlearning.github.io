+++
title = "Spot Optimizer ≠ Spot Fleet: decide smart, then launch"
date = "2025-09-01T00:00:00-00:00"
description = "Stop guessing at EC2 Spot instances. Learn how Spot Optimizer intelligently selects low-interruption instance types, then pairs with EC2 Fleet for reliable, cost-effective infrastructure."

tags = [ "AWS", "EC2", "Spot-Instances", "Cloud-Computing", "Cost-Optimization", "Infrastructure", "DevOps", "Python", "CLI-Tools"]
+++

![banner](/images/spot-optimizer-spot-fleet-decide-smart-then-launch/banner.svg)

Picking EC2 Spot instances shouldn't feel like rolling dice. Most teams either guess and get bitten by interruptions, or overbuild complicated logic to dodge them.

Here's the clean split that keeps you sane:

- **Spot Optimizer** is a Python library/CLI that figures out the right instance types and counts for your workload.
- **EC2 Fleet / Spot Fleet** are AWS services that launch and maintain that capacity.

Short version: **Spot Optimizer decides what to run; EC2/Spot Fleet decide how to run it.**

---

**📦 Project Links**

🔗 [**GitHub Repository**](https://github.com/amarlearning/spot-optimizer) — Source code, issues, and contributions  
📋 [**PyPI Package**](https://pypi.org/project/spot-optimizer/) — Install with `pip install spot-optimizer`

---

## The Problem with Manual Spot Instance Selection

Manual spot instance selection typically involves:

- Guessing which instance types have low interruption rates
- Trial-and-error testing across regions and families
- Building custom logic to match workload requirements
- Constantly updating interruption rate data

This leads to over-provisioning, frequent interruptions, or both.

---

## TL;DR

- Use **Spot Optimizer** to compute a shortlist of instance types that meet your cores/RAM and reliability needs (filters for region, SSD-only, ARM/x86, EMR, families).
- Feed that list to **EC2 Fleet/Spot Fleet** with a capacity‑optimized (or price‑capacity‑optimized) strategy.
- Result: fewer surprises, fewer interruptions, and IaC you don't have to babysit.

---

## What Spot Optimizer Actually Does

Spot Optimizer abstracts away the complexity of spot instance selection.

### Inputs

- **Required**: `cores`, `memory` (GB)
- **Optional**: `region`, `ssd_only`, `arm_instances`, `instance_family` filters (e.g., ["m6i", "r6i"]), `emr_version`, and `mode` (`latency`, `fault_tolerance`, `balanced`)

### Guarantees

- Always meets or exceeds requested cores/RAM by rounding up to available shapes

### Outputs

- Minimal set of instance type(s) and counts plus reliability hints (spot score, interruption-rate band)

### Interfaces

- Python API and a mirrored CLI

### Under the hood

- Fast lookups backed by DuckDB.
- **Hourly** refresh of interruption/reliability signals so picks don't go stale.
- Solid test suite (≈98% coverage) covering the decision engine and CLI, so "wrong picks" get caught early.

---

## Quick Start

### Install

```bash
pip install spot-optimizer

```

### API

```python
from spot_optimizer import optimize

plan = optimize(
    cores=64,
    memory=256,
    region="us-east-1",
    ssd_only=True,
    arm_instances=False,
    instance_family=["m6i", "r6i"],
    mode="fault_tolerance",
)

print(plan)  # example: {"instances": {"type": "m6i.4xlarge", "count": 4}, "mode": "fault_tolerance", ...}
```

### CLI

```bash
spot-optimizer \
  --cores 64 \
  --memory 256 \
  --region us-east-1 \
  --ssd-only \
  --no-arm \
  --instance-family m6i r6i \
  --mode fault_tolerance
```

---

## Spot Optimizer vs EC2/Spot Fleet

| Aspect | Spot Optimizer | EC2 Fleet / Spot Fleet |
| --- | --- | --- |
| **Purpose** | Decide instance types and counts | Launch and maintain capacity |
| **When to use** | When you're **deciding** what to run | When you're **launching** and keeping it running |
| **Output** | A shortlist of types + counts | Actual EC2 instances |
| **Focus** | Fit, stability, cost | Capacity fulfillment, diversification |

### Why Pair Them

- **Smarter diversification**: Start from low-interruption candidates, then let Fleet diversify across pools/AZs
- **Fewer interruptions**: Use `capacity-optimized` or `price-capacity-optimized` in the Fleet so AWS places you where spare capacity is deeper
- **Less thrash**: Stop hand-picking random types and hoping they survive

---

## Integration with EC2 Fleet

Take Spot Optimizer's output and pass it to `LaunchTemplateConfigs[].Overrides`.

```python
import boto3
from spot_optimizer import optimize

def launch_optimized_fleet(cores: int, memory: int, region: str):
    # Get recommendations from Spot Optimizer
    plan = optimize(cores=cores, memory=memory, region=region, mode="fault_tolerance")
    itype = plan["instances"]["type"]
    count = plan["instances"]["count"]

    # Diversify across AZs; add sibling instance types if you want more pools
    overrides = [
        {"InstanceType": itype, "AvailabilityZone": f"{region}{az}"}
        for az in ("a", "b", "c")
    ]

    ec2 = boto3.client("ec2", region_name=region)

    resp = ec2.create_fleet(
        LaunchTemplateConfigs=[
            {
                "LaunchTemplateSpecification": {
                    "LaunchTemplateName": "my-workload-template",
                    "Version": "$Latest",
                },
                "Overrides": overrides,
            }
        ],
        TargetCapacitySpecification={
            "TotalTargetCapacity": count,
            "DefaultTargetCapacityType": "spot",
        },
        Type="maintain",  # keep capacity steady
        SpotOptions={
            "AllocationStrategy": "price-capacity-optimized",  # recommended
            "InstanceInterruptionBehavior": "terminate",
        },
    )

    return resp["FleetId"]

```

### Best practices for EC2 Fleet integration

- **Region‑scoped**: create one fleet per region.
- **Request type**: prefer **maintain** for steady capacity; use **instant** when you need immediate placement (EC2 Fleet only).
- **Allocation strategy**: prefer **price‑capacity‑optimized** (or **capacity‑optimized**) and be flexible across **many** instance types.
- **Diversify across AZs**: include multiple AZs in your overrides; let the allocation strategy do its job.
- **Capacity Rebalancing**: enable it and handle interruption/rebalance signals gracefully.

---

## Integration with Spot Fleet

If you're using the older Spot Fleet service, populate Launch Specifications/Overrides with the recommended instance types:

```json
{
  "SpotFleetRequestConfig": {
    "IamFleetRole": "arn:aws:iam::<account>:role/aws-ec2-spot-fleet-role",
    "TargetCapacity": 8,
    "AllocationStrategy": "priceCapacityOptimized",
    "LaunchSpecifications": [
      {
        "ImageId": "ami-12345678",
        "InstanceType": "m6i.2xlarge",
        "SubnetId": "subnet-12345678"
      }
    ]
  }
}
```

---

## When Spot Optimizer Makes a Difference

### High‑impact scenarios

- **ML training jobs**: 50+ hour workloads where interruptions are costly
- **Spark clusters**: multi‑node jobs requiring stable capacity
- **Game server fleets**: when you can drain sessions and scale out
- **CI/CD build farms**: interruptions slow teams down

### Lower‑impact scenarios (still good Spot candidates)

- Single‑instance development environments
- Stateless web services with strong auto‑scaling (already resilient; a shortlist still helps)
- Batch jobs that checkpoint frequently

## Choosing the right optimization mode

- **latency** — fewer, larger nodes. Good for chatty services and tight p95/p99.
- **fault_tolerance** — more, smaller nodes. Great for batch/Spark and failure isolation.
- **balanced** — sensible default when you're not sure.

Tip: whichever you pick, pair it with **capacity‑optimized** in Fleet to land in deeper capacity pools.

---

## Advanced Filtering Options

Filter by EMR version, choose ARM (Graviton) or x86, enforce SSD-only storage, and constrain by families like `m6i`/`r6i`. The goal: your shortlist is runnable and optimized, not just cheap.

### Example with all filters

```python
plan = optimize(
    cores=128,
    memory=512,
    region="us-west-2",
    ssd_only=True,           # Only SSD-backed instances
    arm_instances=True,      # Include ARM/Graviton instances
    instance_family=["m6i", "m6a", "r6i"],  # Specific families
    emr_version="6.4.0",     # EMR compatibility
    mode="balanced",
)

```

---

## Performance & reliability

- **Fast decisions**: the selector is designed to be quick enough for CI or deploy-time.
- **Well‑tested**: comprehensive tests around the core decision logic and CLI.
- **Fresh data**: interruption and reliability signals are refreshed on a schedule so recommendations don't drift.
- **Make targets**: `make install`, `make test`, `make test-all`, `make coverage`, `make clean`.

What this really means is fewer late‑night pages because a random pool went sideways.

---

## Production Checklist

### Before Deployment

1. Generate candidates with Spot Optimizer (apply EMR/arch/storage/family filters and choose a mode)
2. Test recommendations in a staging environment

### Fleet Configuration

- Set `AllocationStrategy` to `capacity-optimized` or `price-capacity-optimized`
- Provide **multiple** instance types as overrides; let AWS diversify
- Use `maintain` for steady capacity
- Enable Capacity Rebalancing and handle the 2-minute interruption notice

### Ongoing Maintenance

- Refresh recommendations regularly so new reliability data is used at deploy time
- Monitor interruption rates and adjust optimization mode if needed

---

## FAQ

**Is Spot Optimizer an alternative to Spot Fleet?**

No. It's complementary: Spot Optimizer **chooses** the right instances; EC2/Spot Fleet **launches** and manages them.

**Can it run cross-region?**

Yes—the library analyzes any region. Fleets themselves are region-bound, so you'll need separate fleets per region.

**Why not just pick the lowest-price instances?**

Cheap pools can be fragile. Capacity-oriented strategies prefer deeper capacity pools to reduce interruptions, which often saves more money long-term.

**How often should I refresh recommendations?**

For production workloads, refresh daily or before major deployments. Interruption rates change as AWS capacity shifts.

**Can I use this with Kubernetes/EKS?**

Yes! Use Spot Optimizer to choose node instance types, then configure your node groups or Karpenter with those recommendations.

**What about savings vs on-demand?**

Spot instances typically save 50-90% vs on-demand. Spot Optimizer helps you get those savings without the interruption headaches.

---

## References

- [EC2 Fleet/Spot Fleet Overview](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Fleets.html)
- [Allocation Strategies](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-allocation-strategy.html)
- [Request Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-request-type.html)
- [Spot Interruptions & Rebalancing](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/prepare-for-interruptions.html)