+++
title = "Never Push a Work Commit with Your Personal Email Again"
date = "2025-07-05T00:00:00-00:00"
description = "Automatically switch Git identities based on folder path — a clean way to manage personal and work commits"

tags = ["git", "gitconfig", "developer-tips", "productivity", "multiple-identities", "personal-vs-work", "version-control", "dev-tools"]
+++

![banner](/images/never-push-a-work-commit-with-your-personal-email-again/banner.png)

As developers, it’s common to wear multiple hats — working on company projects during the day and tinkering with open-source or personal side-projects at night. If you’ve ever accidentally committed to Git using your personal email in a company repo (or worse, pushed your work identity to a public repo 😅), you know how frustrating it can be.

I used to run into this problem often, especially since I used the same laptop for both work and personal projects. That’s when I came up with a simple but powerful trick — automatically switching Git identities based on folder path using Git’s `includeIf` feature.

---

## The Problem

Let’s say you work at a company and also contribute to open-source projects under your personal GitHub account.

If your Git config looks like this globally:

```
git config --global user.name "Your Name"
git config --global user.email "your.personal@email.com"
```

You might end up pushing commits to your work repository using your personal email — which may be against company policy or at least mildly embarrassing.

The alternative is to keep manually switching emails every time you move between repos — but that’s error-prone and tedious.

---

## The Clean Solution — Conditional Git Configs

Git provides a lesser-known but super useful feature: `includeIf`, which allows you to include different config files based on directory paths.

Here’s how I set it up.

---

### Step 1: Set up your main `~/.gitconfig`

This is your base config file. It includes the conditional rules.

```
[user]
    name = Amar Prakash Pandey
    email = default@email.com

[includeIf "gitdir:~/Github/"]
    path = ~/.gitconfig-personal

[includeIf "gitdir:~/Gitlab/"]
    path = ~/.gitconfig-work

```

`gitdir:` checks the path prefix of the repo you’re working in. If it matches, Git includes the specified config file.

---

### Step 2: Create `~/.gitconfig-personal`

```
[user]
    email = amar.personal@example.com

```

### Step 3: Create `~/.gitconfig-work`

```
[user]
    email = amar.work@example.com

```

---

### The Result

With this setup:

- Any repo inside `~/Github/` will use your **personal email**
- Any repo inside `~/Gitlab/` will use your **work email**
- You don’t have to manually switch anything — Git will do the right thing automatically.

It’s like `magic.env` for Git. 🌟

---

## Real-World Example

Let’s say:

- You clone an open-source repo:
    
    `git clone git@github.com:amar/github-actions-experiments.git` into `~/Github`
    
- You clone a work repo:
    
    `git clone git@gitlab.com:your-company/data-pipeline.git` into `~/Gitlab`
    

Now when you commit:

```
cd ~/Github/github-actions-experiments
git commit -m "Added custom workflow"

```

It will be committed with your personal identity.

```
cd ~/Gitlab/data-pipeline
git commit -m "Refactored ETL logic"

```

It will be committed with your work identity.

No need to change any settings or remember to switch emails.

---

## Bonus Tips

- You can also include other things in your sub-configs:
    - GPG signing keys
    - Custom aliases
    - Commit templates
    - Different editor preferences
- Combine this with per-project SSH keys using `~/.ssh/config` for complete isolation.
- Use `git config --show-origin` to debug and see where Git is pulling config from.

---

## Final Thoughts

This simple trick has been a lifesaver for me. I no longer worry about mixing up Git identities, and it makes context switching between personal and work projects completely frictionless.

If you find yourself juggling multiple Git identities — set this up once, and thank yourself every time you `git commit` without thinking twice.

---

## Resources

- Git Docs: [Conditional Includes](https://git-scm.com/docs/git-config#_conditional_includes)
- Pro Git Book: https://git-scm.com/book/en/v2