# AGENTS.md — HIS AI Product Workshop

This repository is a static learning website for PM, BA, and Product Design learners who are preparing to work with AI coding agents.

## Product intent

- Keep the experience beginner-friendly and professional, not game-like.
- Preserve the continuous learning scenario: **US-001 OPD Patient Check-in Lite**.
- Do not add backend, database, authentication, or production HIS integration.
- Any healthcare data shown in examples must be synthetic/mock data.

## Architecture

- Static HTML + CSS + JavaScript only.
- No build step is required for the learning website.
- Mermaid is loaded in-browser for diagrams.
- Course content lives in `content.js`.
- Application behavior and i18n rendering live in `app.js`.
- Visual design lives in `styles.css`.
- GitHub Pages workflow is under `.github/workflows/pages.yml`.

## UX rules

- Thai and English are both first-class languages.
- Technical vocabulary may remain in English when that is clearer.
- Default language follows the browser/system locale; explicit choice persists in localStorage.
- Default theme follows system preference; explicit choice persists in localStorage.
- Learning progress and last lesson persist in localStorage.
- Every exercise must include an expected result, hidden until requested.
- Every lesson must have: intro, outcomes, learning content, practice, checkpoint, and wrap-up.
- Code/prompt blocks must be copyable.
- Prefer diagrams and structured explanations over decorative images.
- Respect `prefers-reduced-motion`.

## Content rules

- Teach concepts and process, not deep coding syntax.
- Emphasize: writing an agent-ready issue with acceptance criteria, Git, branch, worktree, AI Agent explore/plan/review, Next.js literacy, component/state thinking, Storybook, mock data, debugging evidence, git diff, quality checks, commit discipline, and the full delivery loop from issue to merge and cleanup.
- The Git story must stay realistic end to end: learners own their repository (GitHub fork or their own GitLab project), file a real issue, work on one branch/worktree, commit at verified checkpoints with `type(scope): subject` messages that reference the issue, sync with main, open an MR that closes the issue, take review feedback, and clean up after merge.
- Keep the traceability chain intact across lessons: issue number → branch name → commit footer → MR `Closes`.
- The agent drafts and proposes; a human approves anything that leaves the machine. Agent skills may fill templates and propose `gh`/`glab` commands, but must never merge, push to main, or mark an MR ready.
- Capstone guidance uses progressive disclosure: independent attempt → hint → step-by-step.
- `AGENTS.md` is the single source of truth for agent instructions.

## Safety and scope

- Never use real patient data, secrets, `.env` values, production credentials, or production endpoints in course examples.
- Never encourage direct changes to `main`.
- Do not add destructive Git commands to beginner lessons (no `reset --hard`, no `push --force`, no `branch -D`).
- Never commit secrets, `.env` values, build output, or agent scratch files in examples.
