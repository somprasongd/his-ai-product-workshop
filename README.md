# AI Product Workshop

A bilingual (Thai/English), static learning website for PM, BA, and Product Design teams preparing to use AI coding agents such as Codex or Claude Code in a Next.js + Storybook workflow.

## Learning design

The course uses one continuous scenario — **US-001 OPD Patient Check-in Lite** — from requirement and issue through a working prototype, review, merge, and developer handoff. The capstone then adds a small clinic-availability follow-up in the same flow, with a new issue/MR and regression evidence. Learners guide an AI coding agent and verify results without writing code themselves. The course excludes backend/database implementation and uses deterministic mock/synthetic data.

Schedule: three core workshop days plus a separate three-hour capstone after the original US-001 MR is merged (about 20 hours of learning time in total).

The experience combines:
- a structured beginner path and prerequisites,
- visual process diagrams,
- hands-on commands and prompts with copy buttons,
- expected-result reveals,
- end-of-lesson checkpoints and wrap-ups,
- browser-persisted progress,
- a progressive-hint Capstone that applies the full loop to new behavior on the merged prototype.

## Local preview

No build step is required.

```bash
python3 -m http.server 8080
```

Open <http://localhost:8080>.

> Mermaid diagrams load from jsDelivr, so an internet connection is needed for diagrams unless Mermaid is vendored locally.

## GitHub Pages

A GitHub Actions workflow is included in `.github/workflows/pages.yml`.

Expected public URL after the repository is created under `somprasongd` and GitHub Pages is enabled:

`https://somprasongd.github.io/his-ai-product-workshop/`

## Companion starter repository

Expected repository:

`https://github.com/somprasongd/his-ai-opd-checkin-starter`

Learners can fork/clone it from GitHub, or change the Git remote and push it to the company self-hosted GitLab. The starter is intentionally incomplete: the `/opd/check-in` route is a placeholder and the US-001 flow is built during the lessons. Its lockfile supports `npm ci`.

The capstone brief is `docs/capstone/clinic-availability.md` in the starter. Begin it only after the original US-001 MR has been merged into the learner's repository.

## Agent instructions

`AGENTS.md` is the single source of truth. `CLAUDE.md` contains only:

```text
@AGENTS.md
```
