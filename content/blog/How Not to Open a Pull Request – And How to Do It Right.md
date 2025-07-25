+++
title = "How Not to Open a Pull Request – And How to Do It Right"
date = "2025-07-25T00:00:00-00:00"
description = "A comprehensive guide on creating effective pull requests, based on 6+ years of open source maintenance experience. Learn how to make your PRs more mergeable through proper scoping, communication, and best practices."

tags = ["open-source", "git", "best-practices", "collaboration", "code-review"]
+++

![banner](/images/how-not-to-open-a-pull-request-add-how-to-do-it-right/banner.png)

Picture this: You're maintaining an open-source project, and you receive a pull request that promises to revolutionize your codebase. Security improvements, architectural enhancements, performance optimizations – it has everything! Sounds perfect, right?

That's exactly what happened with my project **spot-optimizer**. The contributor was skilled, the intentions were great, but there was one major problem:

| Changes | Count |
|---------|-------|
| Lines Added | 2,200+ |
| Lines Removed | 1,200 |
| Files Changed | 25 |
| Total Commits | 15 |

Despite the valuable improvements it offered, I had to close it. Not because of code quality or the contributor's skills, but because its sheer size made it impossible to review effectively. It tried to solve too many problems at once, altered core design decisions, and would have required days of careful review.

This is a common scenario in open source, and it's a pattern I've seen repeatedly over six years of project maintenance. Today, I'll share how to avoid this pitfall and create pull requests that maintainers will love to review and merge.

This post explains why PR size matters and provides practical guidelines for making your contributions more likely to be merged — in any open source project.

---

## Why Giant PRs Are a Problem

- Too much changes at once, making it hard to understand and test.
- Increases the risk of regressions, bugs, or breaking things.
- Hard to give focused feedback.
- Difficult to revert safely later if something goes wrong.
- Slows down reviews, often leading to delays or even abandonment.

---

## Actionable Advice for Contributors

### 1. Avoid Massive Pull Requests

- **Keep PRs focused and thematic, with one main purpose per PR.**
- If you have a sweeping refactor or design proposal, discuss it in an issue first.
- **Split large changes into smaller, independent PRs.** Even if it all feels connected, breaking things up helps everyone.

### 2. Respect Existing Design Choices

- If the structure surprises you (for example, a script separated from core code), **ask before refactoring.**
- **Do not assume something is broken** just because you would do it differently.
- **Propose, then implement.** Start with a conversation, not code. Don’t bulldoze through existing design choices.

### 3. Use Clear, Logical, Atomic Commits

- Each commit should cover one thing and pass tests.
- Write **concise, consistent commit messages** like:`fix(logging): centralize log config`
- **Avoid "fix again" or "format again" commits**; clean up your history.
- Make sure each commit tells the story of *what changed and why*.

Here's an example of good vs bad commit history:

```bash
# ❌ Bad Commit History
git log --oneline
c345678 final fix
d901234 actually final fix
e567890 formatting

# ✅ Good Commit History
git log --oneline
a123456 feat(auth): add OAuth2 support for Google login
b789012 test(auth): add integration tests for OAuth flow
c345678 refactor(auth): extract OAuth config to separate file
d901234 docs(auth): update README with OAuth setup steps
```

### 4. Communicate Before Refactoring

- If you are planning architectural overhauls or things like dependency injection, **open an issue or conversation first.**
- **Invite maintainers into your process**:*"Here's the problem I see. Here's a possible approach. What do you think?"*
- **Do not spend a week solving a problem that has not been confirmed as a need.**

### 5. Be Empathetic: Think Past the Code

- Every PR creates work for reviewers: reading, understanding context, checking for regressions.
- **Before you open a PR, ask yourself:**
    - Is this needed right now?
    - Is someone already working on this?
    - Can I split this up?
- **Great contributors don't just write code; they ask good questions early.**

---

## What Maintainers Can Do to Help

It's not just about setting rules for contributors. If you're a maintainer, try to:

- Write down design intent clearly (in a README or [CONTRIBUTING.md](http://contributing.md/)).
- Use issue and PR templates to set expectations upfront.
- Be specific about what type of contributions are welcome.
- Respect the contributor’s time, even if you have to close a PR — explain why, offer feedback, and thank them for showing up.

---

## A Simple Checklist for Great PRs

| Best Practices ✅ | Common Pitfalls ❌ |
|------------------|-------------------|
| Discuss big changes in issues first | Launch major rewrites without context |
| Respect existing structure | Assume everything should be changed |
| Keep PRs small and focused | Bundle unrelated changes into one PR |
| Write helpful, consistent commit messages | Use vague or repeated "fix" commits |
| Test each part before submitting | Submit code that breaks or fails CI |

---

## Final Thoughts

Great open source contributions aren’t just about code — they’re about context, communication, and care. The best PRs solve a clear problem, are easy to review, and respect the structure and goals of the project.

If you care about your contribution getting merged:

- Start small and collaborate early
- Keep things readable and testable
- Ask questions before rewriting major parts
- Focus on helping the maintainer help you

We’re all here to make things better — together.