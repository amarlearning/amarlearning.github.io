+++
title = "Your AI Agent Forgets Everything. Lore Fixes That."
description = "Every Claude Code session starts from zero. Lore fixes that by turning your reasoning into permanent, git-native decision records that get fed back to the agent right when it needs them."
date = "2026-05-27T00:00:00-00:00"
tags = ["claude-code", "ai", "developer-tools", "open-source", "python"]
+++

![banner](/images/your-ai-agent-forgets-everything-lore-fixes-that/banner.png)

---

You're building something with Claude Code. The agent asks a question, you explain the context, it makes a good decision. You commit. Session ends.

Next session. Different task, same file. The agent is about to do the exact thing you just told it not to do.

You explain again.

This isn't a bug. It's just how LLM sessions work — every session starts completely fresh. No memory of the last one. The reasoning that shaped your codebase? Gone the moment you close the tab.

---

## The problem has a name

It's called **institutional amnesia**. Every company has it in some form — the engineer who leaves and takes years of context with them. The decision that made sense at the time but nobody remembers why.

With AI agents, it happens at the speed of a session.

You commit a change. The *what* is in git. But the *why* — the three approaches you considered, the one that broke the deploy pipeline, the constraint that ruled out the obvious solution — none of that survives.

`git log` shows you what changed. Nothing shows you why.

---

## What Lore does

Lore captures the reasoning behind your code as it happens, and feeds it back to Claude when it's relevant.

It sits alongside your project like `.git` — silent, local, automatic. You don't write anything. You don't change how you work. You just stop losing context.

When you commit, Lore distills what Claude was thinking during that session into a decision record:

```yaml
summary: Use snake_case for all column names
why: downstream Spark jobs break on camelCase — found this the hard way in prod
alternatives_rejected:
  - camelCase → broke 3 existing pipelines
  - let each team decide → caused inconsistency across joins
constraints:
  - any new table must follow this, no exceptions
symbols:
  - normalize_column_names
```

When Claude is about to touch that file in a future session, Lore injects this record before it acts. The agent knows the constraint before it starts planning — not after it proposes something that violates it.

```
git log    # shows what changed
lore log   # shows why it changed
```

---

## How it actually works

Lore has three components running quietly in the background: a daemon, a CLI, and a core library.

The **daemon** (`lore-daemon`) is a lightweight HTTP server that listens to Claude Code's lifecycle hooks — every tool use, every file read, every reasoning block. It writes all of this to a `temp/` directory while you work. Think of it as short-term working memory.

The **git hooks** are where things get interesting. When you `git commit`, a post-commit hook fires. Lore reads the raw session data from `temp/`, figures out which reasoning actually contributed to the code that survived the commit, and writes a structured decision record to `staging/`. When you merge to main, a post-merge hook promotes those records to `decisions/` — permanent storage.

```
temp/         ← raw session data, captured live
staging/      ← distilled decisions, per branch  
decisions/    ← permanent institutional memory
```

Only reasoning about code that made it into the commit reaches `staging/`. Only decisions from merged branches reach `decisions/`. Dead-end experiments, scrapped approaches, abandoned ideas — none of that noise pollutes your memory store.

One more thing: Lore injects context when Claude **reads** a file, not just when it writes. By the time the agent is planning what to do, it already knows the constraints. Not after it proposes something that violates them.

---

## The details that make it work

Three things that aren't obvious but matter a lot.

**Symbols, not line numbers.** Decision records are linked to function and class names, not to line 47. Line numbers drift with every refactor. `normalize_column_names` is stable — it follows the function wherever it goes.

**Only surviving decisions become permanent.** Lore tracks which reasoning contributed to code that actually made it into the commit. Reasoning from dead-end experiments never reaches permanent storage. Your institutional memory stays clean.

**It's just files in your repo.** The `.lore/` directory is version-controlled alongside your code. When a teammate merges their branch, their decisions get promoted into your local memory automatically. No separate service, no shared database, no account. If you squash commits, Lore re-distills the reasoning from all affected sessions into a single record for the final hash.

---

## Getting started

```bash
curl -fsSL https://raw.githubusercontent.com/amarlearning/lore/main/install.sh | bash

lore start
lore init   # run this in your project root
```

That's it. `lore init` installs the git hooks and registers with Claude Code. Everything else is automatic.

If you use Claude Code seriously, you've hit this problem. Lore is the fix.

🔗 [github.com/amarlearning/lore](https://github.com/amarlearning/lore)
