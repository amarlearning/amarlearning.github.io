+++
title = "GitOps - the easy way"
date = "2022-01-04T00:00:00-00:00"
description = "GitOps - the easy way is a way to manage infrastructure as code with version control, pull request, CI/CD pipeline."

tags = [ "gitops", "devops", "infrastructure", "iac"]
+++

![banner](/images/gitops-the-easy-way/banner.png)

### What is GitOps?

Treat the infrastructure as code the same way as application code.

- Separate repository for Infrastructure as code.
- DevOps pipeline.

### How does GitOps works?

Infrastructure as Code hosted on Git repository.

- Version controlled.
- Team collaboration.
- Use branching strategy to merge code in git repository.
- With CI pipeline to test the code.
- With CD pipeline to apply the changes to the Infrastructure.

#### With the above steps we achieve:

1. Automated Process.
2. More Transparent.
3. Quality Infrastructure as Code.

### CD Pipeline: Push vs Pull Model

Once merged into master changes will be automatically applied to master.

In GitOps, we have two ways to apply these changes:

1. Push Deployment
   - It’s the traditional way, where the application is built and the pipeline executes a command to deploy the new application version into the environment.
   - Example: Jenkins, Gitlab CI/CD.
1. Pull Deployment
   - Agent is installed in the environment i.e. K8s cluster that actively pulls the changes from the git repository.
   - The agent will check regularly what is the state of the Infrastructure code in the repository and compare it to the actual state in the environment where it’s running.
   - If it sees there is a difference in the repo, it will pull the code from the repository and apply the changes to get the environment from the actual state to the desired state defined in the repository.
   - Example: FluxCD, ArgoCD.

### GitOps easy Rollback

We have version control on our code and changes in the repository are automatically synced to the environment, we can easily roll back the environment to any previous state in the code.

### Git - Single Source of truth

Instead of every developer managing the Infrastructure code, with GitOps, everything is stored centrally in a git repository and the environment is always synced with what's defined in the git repository and this means the git repository becomes the single source of truth which makes it easier to rollback or manage the infrastructure.

### Increasing Security

With GitOps, we now don’t have to give everyone in the team who needs to change something on the Infrastructure or in the k8s cluster direct access to execute the changes because it’s the CD pipeline that deploys the changes not individual developers from their laptop.

But anyone in the team can propose changes to the infrastructure in the git repository through a pull request and once its time to merge that pull request and apply those changes, we can have a limited set of people who are allowed to approve and merge those changes into the main branch so that it gets applied.

Benefits:

- Less Permissions to manage.
- More secure environment.

### Summary

GitOps is Infrastructure as code with

- Version control
- Pull/Merge Request
- CI/CD Pipeline
