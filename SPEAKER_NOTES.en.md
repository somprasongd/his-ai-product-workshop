# Slide speaker notes · AI Product Workshop (English)

These notes follow all 21 slides in `slides.html`. Slides 03–20 correspond to lessons 00–17 in `content.js`. They are spoken guidance for a facilitator, not text to read verbatim from the slide. Open “Lesson content” on a slide when demonstrating the details or starting an exercise. Each lesson's listed duration covers content and practice, not a single slide monologue.

## Slide 01 · Welcome

“Welcome to the AI Product Workshop. This course is for PM, BA, and Product Design colleagues who want to guide an AI agent from a requirement to a working prototype they can inspect and hand to a developer. We will follow one continuous example: **US-001 OPD Patient Check-in Lite**. That lets us see how each artifact supports the next one.

You do not need to become a developer here. You do need to say what the product should do, check evidence that it does so, and explain the result to the next person. All patient examples use synthetic data. We will not connect to a real hospital system. When something fails during the workshop, keep the exact message and what you saw on screen. We will use that evidence in the debugging lesson.”

## Slide 02 · Course map: 3 days + Capstone

“Read this map from left to right. On Day 1, we turn a requirement into a real issue, isolate the work in a branch and worktree, and review the agent's plan. On Day 2, we read the Next.js structure, establish design rules, break the page into components, and review states in Storybook. On Day 3, we add repeatable mocks, assemble the page, diagnose problems, inspect the diff, and prepare a Draft MR with a handoff.

We work on the same US-001 story throughout. After a reviewer merges it, the Capstone opens a new issue for an unavailable clinic and checks that the original behavior still works. Keep this trace in mind: **issue number → branch name → commit footer → MR `Closes`**. We will check it again at delivery.”

## Slide 03 · Lesson 00: Prerequisites

“Before product work starts, everyone needs a workspace they can run. Each learner needs their own GitHub or GitLab repository so they can file an issue, push a branch, and open an MR or PR. Check your Git identity and required tools, then run both the Next.js app and Storybook from the starter.

The diagram shows the job of each tool. The agent explores and edits files; Git records changes; Node.js runs the websites; and we inspect the result in a browser. If a setup command fails, keep the error message instead of guessing through several fixes. Our course data rule is strict: use mock or synthetic data only. Never paste real patient data, secrets, or production endpoints into a prompt. By the end of this lesson, you should own a repository and have a running starter.”

## Slide 04 · Lesson 01: Mental Model

“Here is the path for one piece of work. A requirement becomes an issue with checkable criteria. We then work on its branch and worktree. The agent helps create a component and its Storybook story, assembles the page, and runs checks. A person inspects the UI and the diff before the work goes into an MR.

The agent can move quickly, but it cannot decide what the requirement means on our behalf. People define the outcome, keep the scope clear, and approve a plan before files change. ‘The agent says it is done’ is not completion. We still need to see the actual UI and compare it with the acceptance criteria. Point to the diagram and ask: which steps need human judgment, and which steps can we delegate to the agent?”

## Slide 05 · Lesson 02: Requirement → Issue

“US-001 is the source requirement. The agent needs an issue that someone can act on. Open the requirement document in the starter, read all its acceptance criteria, then write an issue with context, in-scope and out-of-scope work, and a clear Definition of Done. The work should fit on one branch.

We separate two kinds of acceptance criteria. A **state** criterion describes something visible, such as Loading or Empty; review it in Storybook. A **behavior** criterion describes an action and response, such as confirming without a clinic and seeing validation; check it with an interaction test or the running page. Use fixed mock values so others can repeat the check. Before filing the issue, ask whether each criterion has a clear pass or fail. Record the issue number; it must appear again in the branch, commit footer, and MR.”

## Slide 06 · Lesson 03: Git Basics

“For us, Git is the clearest way to see what the agent changed. You do not need every Git command. Start with `git status` to check the branch and changed files, then use `git diff` to inspect what changed before saving it. Work on the feature branch for the issue, never directly on `main`.

A commit is a checkpoint you have verified, not a timer or a once-per-issue event. Use `type(scope): subject` and a `Refs #<your issue number>` footer so a reviewer can trace it. The course has checkpoints after the component, interaction test, page flow, and evidence-backed bug fix. If an agent suggests a Git command you cannot explain, inspect it before running it, especially if it discards history or forces a push.”

## Slide 07 · Lesson 04: Git Worktree

“A branch names a line of work. A worktree is the folder where that line of work is open. We will keep **one issue, one branch, and one worktree** for US-001 throughout the course. This keeps `main` in its own folder while the agent works on the issue without another task changing the files underneath it.

After creating the worktree, open a new editor and agent session from that folder. Use `git worktree list` and `git status` whenever you are unsure of your context. Each worktree may need its own dependencies, and simultaneous dev servers need different ports. The number in the example branch name is a placeholder: replace it with your real issue number. At the end of the lesson, everyone should be able to say exactly which folder the agent is editing.”

## Slide 08 · Lesson 05: Explore → Plan → Human Review

“We now have an issue and a safe workspace. Do not start with a broad instruction like ‘build the check-in page’. The agent would fill any gap in the requirement with a guess. First ask it to read `AGENTS.md`, explore the repository, and propose a plan covering files, states, scope, and verification without editing files.

Our job is to compare that plan with every acceptance criterion. Does it cover Loading, Empty, Error, validation, and success? Does it add unrelated files or dependencies? How will we inspect the result in Storybook and the app? Send it back for revision when needed. This lesson ends with a human-approved plan and a clean `git status`. We will implement the page in small, reviewable steps in later lessons.”

## Slide 09 · Lesson 06: Next.js Literacy

“You do not need to read every line of React. You do need to read the project map. In Next.js, `src/app/opd/check-in/page.tsx` maps to `/opd/check-in`. Feature folders hold related components and logic, while mocks supply synthetic data for the page.

When the agent proposes a file change, ask three questions: where is the file, how does it relate to the issue, and what will users see if it changes? Read `<PatientCard />` as a component being used and a prop as data or state passed into it. Open `package.json` to find the actual dev, Storybook, lint, test, and build commands. Verify that any path the agent names really exists.”

## Slide 10 · Lesson 07: Design System

“Before building a component, start with the design reference image in the starter. The image shows visual hierarchy, color, and spacing, but it does not specify every behavior or state. Have the agent draft `DESIGN.md` with tokens, each token's role and rationale, and any open questions. A person checks those values against the actual image before approving them.

Then use that same file to build a `/design` page where the values can be inspected. If the image does not cover a case, record it under Known Gaps rather than inventing a new brand rule. There is no separate commit in this lesson. The reviewed design files join the first component checkpoint in the Storybook lesson.”

## Slide 11 · Lesson 08: Component & State

“The whole check-in page is too large to review as one unit. Break it into PatientSearch, search results, the form, preview, and success. Give each part the user-visible states it needs, such as default, loading, empty, results, and error.

Write your own first draft before asking the agent to critique it. Every state should trace to an acceptance criterion. If a state has no user impact or criterion, we do not need another story just to increase the count. PM and BA inspect the business rules. Product Design inspects copy, hierarchy, focus, and narrow screens. The output of this lesson is a component and state map that another person can review.”

## Slide 12 · Lesson 09: Storybook Review

“Storybook is another website where we can open one component in a chosen state without forcing that state in the full app. We will start with PatientSearch. Ask the agent to create the component together with its stories, then inspect Default, Loading, Empty, WithResults, and Error yourself.

Give feedback in product language: ‘The Empty message does not tell me what to do next,’ or ‘A long name hides the button on a narrow screen.’ You do not need to prescribe a CSS fix. Check keyboard navigation and visible focus too. When the stories pass human review, make the first commit checkpoint, including the reviewed `DESIGN.md` and `/design` page.”

## Slide 13 · Lesson 10: Acceptance & Interaction

“Return to the issue's acceptance criteria. For each state criterion, name the Storybook story a reviewer can open. ‘No patient found’ maps to Empty; ‘search service fails’ maps to Error. For a behavior criterion, write Given/When/Then and have the agent build an interaction test that performs the action and checks the response.

We are not adding tests to raise a count. We want a person to open the evidence and see exactly where the requirement was checked. Make an AC-to-story-or-interaction map and find any gap. Choose one important flow, run its interaction, and watch each step. Once it passes, make the second commit checkpoint.”

## Slide 14 · Lesson 11: Mock Data

“In a real system, the UI asks a backend for information. In this course, our product question is what users see while waiting and when the answer is empty or fails. We use a mock service with synthetic data so we can select normal, slow, empty, and error scenarios without building a backend or connecting to a real system.

Good review mocks are deterministic: the same input produces the same result. That lets two people reproduce the same case and compare notes. Switch through each scenario. Is Loading visible long enough to understand? Does Empty suggest a next step? Does Error explain recovery or retry? Run each case again and confirm the result stays the same.”

## Slide 15 · Lesson 12: Integration

“Components that look right in isolation may still produce a broken flow. Now ask the agent to assemble `/opd/check-in`. Walk the user's path: search, select a patient, choose a clinic, enter an optional chief complaint, preview, go back to edit, confirm, and inspect success.

Try cases that reveal problems between states. After selecting a patient, does a new search leave stale information? Does confirming without a clinic show validation in the right place? Does returning from preview preserve the form? What happens if Confirm is clicked twice quickly? Check keyboard use and a viewport about 375 pixels wide. Reopen Storybook to confirm earlier stories still work. Make the third commit checkpoint only after the integrated flow passes.”

## Slide 16 · Lesson 13: Debug with Evidence

“When something fails, avoid sending only ‘please fix it’ to the agent. Gather evidence from four places: the terminal for build or type errors, the browser UI for what the user sees, the Console for runtime errors, and Network for requests and responses. In an error message, identify its type, message, file, and line so we can locate the problem.

Ask the agent to explain the root cause from that evidence before proposing a fix. Then explain the cause in your own words. After a change, reproduce the original failing case and check nearby behavior. ‘Port 3000 is in use’ is a process conflict, not a UI bug. Record the before-and-after evidence for the fourth commit checkpoint.”

## Slide 17 · Lesson 14: Git Diff & Quality

“Before accepting a ‘done’ report, predict which kinds of files this issue should change. Compare that prediction with `git status` and `git diff --stat`. If a PatientSearch issue changed authentication or the global layout, ask why. Open unexpected files and have the agent explain each change.

Then run lint, test, and build using this project's commands. Review each Storybook state and walk the real flow again. Before staging, make sure no `.env`, secret, real patient data, build output, or agent scratch file is included. The evidence we need is a scoped diff plus passing checks and a human review of behavior, not merely an agent summary.”

## Slide 18 · Lesson 15: Deliver through a Draft MR

“An MR tells a reviewer who was not in this room what changed and how to inspect it. Finish any remaining work, pass the quality checks, and sync the feature branch with `main`. Then push that branch and open a **Draft MR** describing the goal, scope, states, checks performed, mock boundary, and run steps.

Add `Closes #<your issue number>` and verify that the same number appears in the branch and commit footers. The agent can draft MR text from the real diff, but a person must correct it to match what was actually verified. If review requests changes, fix them on the same branch, check again, commit, and push. The reviewer decides when to merge into `main`. Clean up the branch and worktree after the merge.”

## Slide 19 · Lesson 16: Developer Handoff

“A clickable page alone is not a handoff. A developer needs to know which ACs have evidence in Storybook, an interaction test, or a manual flow. They need instructions to run the app and Storybook, and they need to know where mocks stand in for real systems and which product decisions still need an owner.

Gather the evidence already present in the issue, MR, diff, and check results. State the limits plainly: there is no real backend, authentication, or queue integration here. Ask someone else to open the work using only the handoff steps. If they must guess, add the missing instruction or name the decision owner. A template or agent skill may draft this later, but a person reviews and approves anything sent outside the machine.”

## Slide 20 · Lesson 17: Extend US-001 Capstone

“The Capstone starts after a reviewer merges US-001. Open a **new issue** for an unavailable clinic. Give it its own acceptance criteria, branch, and worktree, then repeat Explore, Plan, Human Review, Implement, Verify, and Draft MR.

Show repeatable GEN, ENT, and Error cases with mocks. Review the messages and recovery path, keyboard use, and a narrow viewport. Also record regression evidence that the original US-001 Search, Select, Preview, and Confirm flow still works. Use the new issue number in the branch, commit footer, and MR `Closes`. If US-001 is still in review, finish that review and merge first so the Capstone starts from the verified `main`.”

## Slide 21 · Ready to begin

“You have now seen the course journey. The first real step is Lesson 00: prepare your machine and your own repository. From there we will build evidence for US-001 one piece at a time. You do not need to memorize every command today. Remember the division of responsibility: **people define what is correct, the agent proposes and implements, and people inspect the actual evidence**.

Open Prerequisites now and see which parts of your setup are already complete. If something fails, keep the exact message and current status. We will work from that evidence, then move on to our first issue.”
