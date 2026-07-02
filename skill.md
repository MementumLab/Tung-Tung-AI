# Tung Tung AI Skill

## Purpose

This repository contains a static, GitHub-ready mockup for a chat AI agent called Tung Tung Tung Sahur.

The goal is to present a believable product shell with a clean chat experience, a conversation rail, a message composer, and a compact tools panel, all grounded in the Tung Tung Tung Sahur brain-rot meme.

## Repo Structure

- `index.html` - root application shell
- `src/styles/main.css` - all visual styling, layout, and responsive behavior
- `src/scripts/app.js` - client-side interactions and message rendering
- `src/data/conversations.js` - seeded mock conversations, assistant messages, and quick actions

## Design Rules

- Keep the interface structured and realistic.
- Keep the meme reference obvious but polished.
- Keep the code self-contained and dependency-free.
- Avoid referencing local machine paths, usernames, or personal data.
- Prefer clear labels, believable UI states, and simple interactions over heavy animation.

## Interaction Model

- Render a fixed set of seeded conversations on load.
- Render a believable assistant thread on load.
- Allow quick-action chips to populate the composer.
- Allow submitted messages to append to the current thread.

## Implementation Notes

- The app is meant to open directly in a browser without any build step.
- Styling should remain in `src/styles/main.css` unless the project grows enough to justify splitting styles further.
- Additional behavior should stay small and readable.
- Any future edits should preserve the same restrained product-like tone, with night-watch and sahur flavor.

## Commit-Friendly Expectations

- Keep the file tree clean and intentional.
- Keep the mock data generic.
- Keep the project easy to upload to GitHub as-is.