+++
title = "We're Putting AI Everywhere Before It's Sustainable"
images = ["/images/were-putting-ai-everywhere-before-its-sustainable/banner.png"]
date = "2026-11-07T00:00:00+05:30"

description = "AI is being pushed into more products and workflows before we've established that its widespread use is economically and environmentally sustainable. A case for intentional adoption, better software craftsmanship, and using AI where it genuinely earns its place."

tags = [
  "Artificial-Intelligence",
  "Sustainability",
  "Environmental-Impact",
  "Software-Engineering",
  "Product-Design",
  "Technology",
  "Energy"
]
+++

![banner](/images/were-putting-ai-everywhere-before-its-sustainable/banner.png)



*On unnecessary AI adoption, the economics of intelligence, environmental costs, and the software craftsmanship we're slowly overlooking.*

> We are making an expensive, resource-intensive technology artificially accessible and encouraging mass adoption before we've established that its widespread use is economically and environmentally sustainable.

Something about the current wave of AI adoption doesn't quite sit right with me.

Everywhere I look, products are introducing AI features. Existing products are being rebuilt around AI, new products are being launched with AI at their core, and developers are finding increasingly creative ways to incorporate AI into problems that were already being solved quite well.

I understand the excitement. AI is genuinely powerful. It can simplify complicated tasks, make previously impossible things possible, and fundamentally change how we interact with technology.

But I think we're getting carried away.

I've seen people demonstrate AI-powered voice assistants in expense-sharing applications. You can now say something like, "Paid 400 for dinner, split into 4," and the application automatically creates the expense.

But I keep wondering: how much better is this than simply entering the same information into a few fields?

We're talking about an amount, a description and the number of people sharing an expense. This is a straightforward data-entry and mathematical problem. Traditional software can handle it perfectly well.

The voice interaction might look impressive in a demo, but has it meaningfully improved the experience? Is the user actually saving enough time or effort to justify introducing an additional layer of complexity and computational cost?

This is just one example. Look around and you'll find similar patterns across task management, note-taking, scheduling, productivity and analytics applications.

Sometimes I wonder whether we're actually making products better or simply making them look more impressive.

**Just because we can build something using AI doesn't mean we should.**

And I think this is where we need to reconsider how we're approaching software development.

## Are we solving problems or just finding places to use AI?

Before introducing any technology into a product, shouldn't we first understand the problem we're trying to solve?

There are plenty of problems where traditional software is still the better solution.

Calculating taxes, validating user inputs, processing payments, managing transactions, calculating financial balances and implementing rate limiting are all examples of problems with predictable inputs and well-defined outcomes.

We already have algorithms, databases, APIs and established engineering practices to solve them.

Traditional software is often cheaper to operate, faster to execute, more predictable, easier to debug and more reliable for deterministic tasks.

Why introduce an expensive, probabilistic component when a deterministic algorithm already solves the problem?

I'm not suggesting AI has no place in these products. Far from it.

Receipt scanning, extracting individual items from a restaurant bill, interpreting complicated expense instructions or answering questions about spending patterns are genuinely interesting applications of AI.

These are situations where AI can reduce friction or enable capabilities that would otherwise be difficult to build.

But there's a meaningful difference between using AI to solve a problem that was previously difficult and using AI to replace an interaction that was already simple.

I think we've started confusing the two.

The question shouldn't be how much AI we can introduce into a product. It should be whether introducing AI makes that product meaningfully better.

And this brings me to something I find even more concerning: the economics behind all this adoption.

## Making AI accessible doesn't make it sustainable

AI isn't free, even if the price we're paying to use it sometimes makes it feel that way.

Every inference consumes computational resources. Training and operating models require specialised hardware, electricity, infrastructure and continuous investment.

Yet we're making AI-powered features increasingly accessible through inexpensive subscriptions, generous usage limits and competitive API pricing.

Here's the thing: the price users pay isn't necessarily representative of the full cost of producing that service, let alone its environmental cost.

Companies are investing enormous amounts of capital into AI infrastructure. Competition, investment and expectations of future growth are influencing how AI services are priced and distributed.

According to the International Energy Agency, capital expenditure by the largest technology companies exceeded $400 billion in 2025 and is expected to increase by another 75% in 2026. These figures cover broader company investment, not exclusively AI, but they illustrate the scale of the infrastructure race.

[Source: International Energy Agency, Key Questions on Energy and AI (2026)](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)

I'm not suggesting that every AI provider is deliberately selling services below cost, or that this investment won't eventually produce returns.

But I do think we should distinguish between a technology becoming genuinely cheaper through engineering improvements and a technology becoming accessible because companies are willing to invest heavily to accelerate adoption.

Consider what happens when we build products around these economics.

A traditional software product can serve an increasing number of users without necessarily increasing its operating costs at the same rate.

An AI-powered product, particularly one that uses expensive models across everyday interactions, introduces a different cost structure. As usage increases, inference costs can increase alongside it.

Now imagine building a product where AI is involved in almost every interaction, even when many of those interactions could have been handled by conventional software.

You're introducing additional infrastructure costs without necessarily introducing equivalent user value.

You could have a great product, growing adoption and still struggle to make the business sustainable.

I think developers and product builders need to pay much more attention to this.

And there's another question worth asking: what happens when millions of products and billions of users start consuming AI at this scale?

Before getting there, there's something else I don't want us to overlook.

## Are we slowly losing the value of software craftsmanship?

As a software engineer, I've always appreciated the craft of building software.

Understanding a problem, designing the right data structures, choosing appropriate algorithms, thinking about edge cases, optimising performance and building something reliable.

There's real satisfaction in solving a complicated problem with a simple, elegant solution.

But I'm increasingly uncomfortable with the idea that the ability to generate an application is becoming synonymous with the ability to engineer good software.

They are not the same thing.

AI is an incredibly useful tool for developers. It can accelerate implementation, help explore unfamiliar technologies, improve productivity and reduce repetitive work.

But generating code isn't the same as understanding the system you're building.

There's a difference between producing something that works in a demo and engineering something that can reliably operate in production.

I don't want us to lose our appreciation for engineering fundamentals simply because producing code has become easier.

I would hate to see an industry where knowing how to prompt a model becomes more celebrated than understanding why a particular solution is the right one.

The value of a software engineer was never simply in writing code. It was in knowing what to build, how to build it, and why.

I hope we don't forget that.

## Cheaper AI doesn't necessarily mean less consumption

There's an interesting contradiction emerging in the AI industry.

AI is becoming increasingly efficient. Models are getting smaller, inference infrastructure is improving, and the cost of achieving a particular level of model performance has been falling.

That's genuinely good progress.

But as AI becomes cheaper, people find more reasons to use it.

Tasks that previously didn't justify an AI call suddenly become candidates for automation. Products introduce features that offer marginal improvements. Developers experiment with use cases that might never have justified the computational expense in the first place.

This reminds me of an economic concept called the **Jevons paradox**.

The idea is that when a resource becomes more efficient to use, overall consumption can increase enough to offset some of the efficiency gains.

I think there's a possibility we're seeing something similar with AI.

We're making individual AI operations more efficient, but we're also encouraging people to consume considerably more of them.

The International Energy Agency's 2026 analysis makes this contradiction particularly interesting.

According to its report, energy use per AI task has fallen by at least an order of magnitude annually in recent years. Yet electricity consumption from AI-focused data centres increased by 50% in 2025.

The IEA also points out that increasingly sophisticated applications, including video generation, reasoning and agentic tasks, can consume hundreds or even thousands of times more energy per query than simple text generation.

So, although efficiency is improving, the types and volume of AI workloads are changing too.

[Source: IEA, Key Questions on Energy and AI (2026)](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)

And that raises a question worth thinking about.

Are we making AI more efficient, or are we simply making it possible to consume much more of it?

Those aren't necessarily the same thing.

## The environmental cost we're not talking about enough

This is where I think the conversation becomes considerably more important.

AI isn't just software running somewhere in the cloud. It depends on physical infrastructure: data centres, specialised chips, cooling systems, electricity grids, water resources and hardware manufacturing.

And all of this comes with an environmental cost.

Let's put some numbers behind that.

According to the International Energy Agency, global data-centre electricity consumption reached approximately **485 TWh in 2025**. It is projected to nearly double to **950 TWh by 2030**.

To put that into perspective, the projected consumption would account for around 3% of global electricity demand.

It's important to clarify that these figures cover data centres generally, not exclusively AI. However, electricity consumption from AI-focused data centres is projected to triple between 2025 and 2030.

[Source: International Energy Agency, 2026](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)

And electricity is only part of the problem.

A study published in *Nature Sustainability* in November 2025 examined the environmental impact of deploying AI servers across the United States.

Depending on the scale of expansion, researchers estimated that AI server deployment between 2024 and 2030 could result in:

- An annual water footprint of **731 to 1,125 million cubic metres**.
- Additional annual carbon emissions of **24 to 44 million tonnes of CO₂-equivalent**.

These are modelled projections, not measurements of current consumption. The actual impact depends on factors such as infrastructure deployment, electricity sources, cooling systems and efficiency improvements.

[Source: Nature Sustainability, Environmental impact and net-zero pathways for sustainable artificial intelligence servers in the USA (2025)](https://www.nature.com/articles/s41893-025-01681-y)

The United Nations University's 2026 assessment takes an even broader look at the resources involved.

Its projections for the global data-centre infrastructure powering AI by 2030 include:

- Approximately **945 TWh** of annual electricity consumption.
- An associated water footprint of **9.3 trillion litres**.
- A land footprint exceeding **14,500 square kilometres**.
- Approximately **2.5 million tonnes of annual AI-related electronic waste**.

These are projected infrastructure footprints, not direct measurements of the resources consumed by individual AI applications. The report also highlights how much the environmental impact depends on electricity generation, cooling and infrastructure supply chains.

[Source: United Nations University, Environmental Cost of AI's Energy Use: Carbon, Water and Land Footprints (June 2026)](https://unu.edu/inweh/news/environmental-cost-of-AIs-Enrgy-use-carbon-water-and-land-footprints)

What makes this particularly concerning is that the environmental footprint doesn't end when a model finishes generating a response.

There are resources involved in manufacturing specialised hardware, constructing data centres, maintaining cooling infrastructure and eventually disposing of equipment that becomes obsolete.

We're building more infrastructure to support increasing demand, and that infrastructure has a physical footprint.

I'm not suggesting that every AI interaction has an enormous environmental impact. A simple text query and an AI-generated video are not remotely comparable in computational requirements.

Nor am I arguing that the benefits of AI aren't worth these resources.

But I do think we should question whether every additional use case justifies the consumption it creates.

Does generating another AI-powered summary, automating another trivial interaction or adding another voice interface justify the infrastructure required to support it?

Sometimes the answer will be yes.

Quite often, I suspect it won't.

And that's precisely why I believe we need to become more intentional about AI adoption.

## There's a middle ground we're overlooking

I think most conversations around AI adoption tend to fall into two extremes.

On one side, we have the **AI maximalists**. Everything needs AI. Every text input, every button and every backend workflow is an opportunity to introduce an LLM. Cost, latency, reliability and actual necessity often become secondary considerations.

On the other side, there are those who reject AI altogether, dismissing its capabilities and overlooking the genuine breakthroughs it has made possible.

I don't particularly agree with either position.

My perspective comes from a much simpler principle: **intentional software design.**

Use the right tool for the job.

If a problem is deterministic, use deterministic solutions. Mathematical calculations, input validation, state management, transaction processing and business rules don't need an LLM. We already have well-understood algorithms and conventional software engineering practices that handle these problems efficiently.

But when a problem involves unstructured information, ambiguity, semantic understanding, multimodal inputs or complex reasoning, AI can be an incredibly powerful tool.

There's no reason to avoid it in situations where it genuinely makes a difference.

I don't want to build software without AI. I want to build software that uses AI where it makes sense.

And I think that's an important distinction.

The goal shouldn't be to maximise the amount of AI in a product. It should be to maximise the value we deliver while being conscious of the complexity, cost and resources required to deliver it.

## Are we getting carried away with the golden eggs?

There's another thought I keep coming back to.

I sometimes wonder whether the people making decisions at the highest levels of technology companies and governments are unaware of these consequences. I find that difficult to believe. Many of them probably understand the economics, infrastructure requirements and environmental implications better than most of us.

But perhaps that's not the real problem.

Countries are competing with one another. Companies are competing for market dominance. Nobody wants to slow down when there's a possibility that someone else will move ahead.

And then there's the sheer fascination with what AI can do. We're discovering new capabilities almost every day, and it's easy to become so absorbed in what might be possible that we stop questioning what it takes to get there.

It reminds me of the story of the goose that laid golden eggs.

A man had a goose that produced a golden egg every day. Instead of being content with what it could sustainably produce, he eventually killed it, hoping to get all the gold at once.

I sometimes wonder whether we're making a similar mistake.

We're so focused on extracting everything AI has to offer, expanding its capabilities and accelerating its adoption that we're paying too little attention to the resources required to sustain it.

Perhaps the real challenge isn't discovering how much more AI can do. It's making sure that, in our pursuit of everything it promises, we don't compromise the very resources that make it possible.

## We are not there yet

I believe AI has an extraordinary future.

There are applications where it can genuinely transform what we're capable of doing. Scientific discovery, medical research, accessibility, complex reasoning and generative media are just a few examples.

I'm excited about that future.

But I don't think every application needs to become an AI application, and I certainly don't think every interaction needs an inference call.

More importantly, I don't think we should be rushing to put AI in everyone's hands at its current stage of development.

Not because people shouldn't have access to powerful technology, but because widespread access comes with consequences that we're not adequately accounting for.

I'd rather see us spend more time making AI genuinely cost-efficient, reducing its environmental footprint and understanding the long-term implications of running it at such a massive scale.

Make it cheaper through better engineering. Make it more efficient. Reduce its electricity and water requirements. Improve hardware lifecycles. Make the actual costs more transparent.

I'm not expecting a technology with zero environmental impact. But I do think we should reach a point where its widespread use doesn't impose disproportionate costs on the environment or on the people and communities supporting its infrastructure.

I don't want mass adoption to be the starting point, with sustainability treated as something we'll figure out along the way.

**Widespread adoption should follow genuine technological and environmental progress, not precede it.**

We shouldn't be building AI into products simply because we can afford to do so today, especially when the long-term economics and environmental consequences of that consumption remain uncertain.

Perhaps the next big step in AI shouldn't be about finding more things to use it for.

Perhaps it should be about learning where we don't need it at all.