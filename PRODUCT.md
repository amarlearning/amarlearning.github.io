# Product

<!-- impeccable:product-schema 1 -->

<!-- Inferred from the repository (content/_index.md, config.toml, data/*.yaml) during the 2026-11 redesign; not from an interview. Correct anything that is wrong. -->

## Platform

web

## Users

- Engineers, recruiters and hiring managers checking who Amar is: senior data engineer at Citi, Spark and data platforms, open-source contributor.
- Readers who arrive on a blog post from search or social, mostly about Spark internals, databases and functional programming.

## Product Purpose

Personal site for Amar Prakash Pandey (amarpandey.me): an introduction, a list of projects and open-source work, a curated list of engineering talks, a blog, and a résumé. Success means a visitor understands his work in seconds and reads or follows a link (GitHub, a post, Litmus, the résumé).

## Positioning

A working data engineer's own notebook: real production fixes (Spark jobs cut by up to 90%), tools built from real annoyances (spot-optimizer 11k+ downloads, uv-bundler, Lore), and maintainer history (Apache Airflow, CRI-O, DuckDuckGo, GSoC).

## Capabilities and Constraints

- Hugo static site on GitHub Pages, theme `hugo-bearblog` (git submodule, untouched); all overrides live in `layouts/` and `layouts/partials/custom_style.html`.
- Pages: home, about, projects (from `data/projects.yaml`, `data/oss.yaml`), talks (`data/talks.yaml`), blog list and posts (with tags, comments, optional KaTeX/MathJax), résumé PDF, RSS.
- Content and copy are owned by Amar and must not be changed by design work.

## Brand Commitments

- Name: Amar Prakash Pandey, handle @amarlearning, GitHub avatar as the mark.
- Reference sites the owner chose: kamran.fyi (preferred) and prabhavs.com.

## Evidence on Hand

- Real numbers in the copy: 8+ years, up to 90% resource cut, 11k+ downloads for spot-optimizer.
- Featured product: Litmus (litmus.amarpandey.me) with `static/images/litmus.svg`.
- No testimonials, logos or press: do not add any.

## Product Principles

1. The writing is the product; reading comfort beats decoration.
2. Show real work and real links, never claims without a source.
3. Fast, static and quiet: nothing that slows a post down.
