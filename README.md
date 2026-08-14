# Personal Portfolio Website

This repository contains a small, professional portfolio website built with React and Vite.

## Project Description

The site includes:

- Home hero section
- About section
- Skills section
- Projects section
- Contact section
- Responsive navigation
- Footer
- Dark/light theme toggle

## Installation

```bash
npm install
```

## Running Locally

```bash
npm run dev
```

## Deployment

The project is prepared for GitHub Pages deployment with GitHub Actions.

## Git Workflow

The workflow follows Git Flow style:

- `main` stores the stable release
- `develop` integrates finished work
- `feature/*` branches implement scoped tasks
- `hotfix/*` branches fix release issues

Typical flow:

1. Create a feature branch from `develop`
2. Implement and commit the change in small steps
3. Open a pull request into `develop`
4. Resolve conflicts before merge if needed
5. Merge `develop` into `main` when the release is ready

This branch also introduces a contact form and footer refinement, which will later be merged through the same PR-based process.
