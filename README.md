# Week 8 — React Fundamentals

CommunityHub is a responsive React frontend built with Vite for the Season 12
Week 8 exercise. It demonstrates reusable components, props, composition,
controlled forms, events, immutable state updates, and lifting state up.

## Run locally

Requires Node.js 22.12 or newer.

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite. Verify the app and helper tests with:

```powershell
npm.cmd test
npm.cmd run lint
npm.cmd run build
```

## What is included

- Community feed with post creation, title/author search, likes, and delete.
- Layout, header, footer, sidebar, user cards, post cards, and reusable inputs,
  buttons, and cards.
- Pure post search/sort helpers with focused Vitest coverage.
- Lesson exercises and daily challenge examples in
  `src/exercises/milkiaszeresenayant-ux/`.

The intro exercise uses generic sample facts and the name `Your Name`; update
`Intro.jsx` with your own name and three personal details before submitting.

## Team submission reminder

This local folder is a standalone practice project. The course deliverable is
the frontend in your team's `iyf-s12-communityhub-team-{lead-username}` repo.
Before submission, move or recreate these changes in the shared repo, work on
your own feature branch, open a pull request, and add your links to
`CONTRIBUTORS.md`. A local build does not replace the required team PR and
review workflow.
