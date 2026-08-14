# Personal Portfolio Website

A responsive portfolio site built with React and Vite to demonstrate a complete Git lab workflow.

## Project Description

This project includes:

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

This project is prepared for GitHub Pages deployment through GitHub Actions.

### Repository Settings

1. Open repository Settings
2. Go to `Pages`
3. Set source to `GitHub Actions`
4. Save changes

### Actions Deployment

The workflow at `.github/workflows/deploy.yml`:

1. Checks out the repository
2. Installs dependencies
3. Builds the React app
4. Deploys the `dist` folder to GitHub Pages

## Git Workflow Explanation

This repository follows a Git Flow style approach:

- `main` stores the stable release
- `develop` integrates completed work
- `feature/*` branches add scoped UI features
- `hotfix/*` branches fix deployment or release issues

### Branch Flow

1. Create a branch from `develop`
2. Implement the feature in small commits
3. Open a pull request into `develop`
4. Resolve conflicts if needed
5. Merge `develop` into `main` for release

### Commit Style

Examples used in this project:

- `feat: initialize React project scaffold`
- `feat: add responsive navigation and theme toggle`
- `feat: build the portfolio landing page sections`
- `feat: add contact form and footer links`
- `fix: harden GitHub Pages deployment workflow`
- `docs: refine deployment guidance`

### Pull Requests

Each feature branch should be merged through a pull request. PRs keep the history reviewable, enforce discussion, and help catch merge conflicts before release.

### Conflict Resolutions

Two real conflicts were created and resolved in this lab:

1. `feature/navbar` vs `feature/home-page` on `src/components/Navbar.jsx`
2. `docs/readme-finish` vs `develop` on `README.md`

## Git Commands Step by Step

```bash
git init
git branch -m main
git checkout -b develop
git checkout -b feature/navbar
git checkout develop
git checkout -b feature/home-page
git checkout develop
git checkout -b feature/contact-section
git checkout develop
git checkout -b hotfix/deploy-fix
git checkout -b docs/readme-finish
git checkout main
git merge --no-ff develop -m "merge: develop into main"
```

## Commit Sequence Commands

```bash
git add . && git commit -m "feat: initialize React project scaffold"
git add src/components/Navbar.jsx src/components/ThemeToggle.jsx src/App.jsx src/styles/global.css && git commit -m "feat: add responsive navigation and theme toggle"
git add src/styles/global.css && git commit -m "style: improve navbar interactions and focus states"
git add src/App.jsx && git commit -m "fix: synchronize document color scheme with theme"
git add src/pages/Home.jsx src/components/sections/HeroSection.jsx src/components/sections/AboutSection.jsx src/components/sections/SkillsSection.jsx src/components/ProjectCard.jsx src/components/sections/ProjectsSection.jsx src/components/sections/ContactSection.jsx src/components/Footer.jsx src/components/Navbar.jsx src/styles/global.css && git commit -m "feat: build the portfolio landing page sections"
git add src/components/SectionHeading.jsx src/components/sections/AboutSection.jsx src/components/sections/SkillsSection.jsx src/components/sections/ProjectsSection.jsx src/components/sections/ContactSection.jsx src/styles/global.css && git commit -m "style: tighten section spacing and card layouts"
git add src/components/sections/ContactSection.jsx src/components/Footer.jsx src/styles/global.css README.md && git commit -m "feat: add contact form and footer links"
git add README.md && git commit -m "docs: expand git workflow notes"
git add .github/workflows/deploy.yml README.md && git commit -m "fix: harden GitHub Pages deployment workflow"
git add README.md && git commit -m "docs: add git flow overview"
git add README.md && git commit -m "docs: refine deployment guidance"
git add index.html && git commit -m "style: polish document metadata"
git add src/components/sections/HeroSection.jsx src/components/sections/AboutSection.jsx && git commit -m "feat: refine hero and about copy"
git add README.md && git commit -m "docs: expand branch protection guidance"
```

## Conflict Simulation Commands

### Conflict 1: Navbar

```bash
git checkout develop
git merge --no-ff feature/navbar -m "merge: feature/navbar into develop"
git merge --no-ff feature/home-page -m "merge: feature/home-page into develop"
```

Resolve the conflict in `src/components/Navbar.jsx` and `src/styles/global.css`, then:

```bash
git add src/components/Navbar.jsx src/styles/global.css
git commit --no-edit
```

### Conflict 2: README

```bash
git checkout develop
git merge --no-ff docs/readme-finish -m "merge: docs/readme-finish into develop"
```

Resolve the conflict in `README.md`, then:

```bash
git add README.md
git commit --no-edit
```

## Git Theory Questions

### 1. What is `.git` directory?

It is Git’s internal database for the repository.

### 2. What information is stored inside `.git`?

Objects, commits, branches, tags, refs, index data, logs, and configuration.

### 3. How is `.git` created?

By running `git init` or cloning an existing repository.

### 4. What does atomic mean in:

- Atomic commit: one logical change that is complete by itself
- Atomic pull request: one PR that delivers one coherent change

### 5. Explain differences: `git fetch`, `git pull`, `git merge`, `git rebase`, `git cherry-pick`

- `git fetch`: downloads remote updates without changing local branches
- `git pull`: fetches and merges or rebases in one step
- `git merge`: combines branch histories with a merge commit or fast-forward
- `git rebase`: rewrites commits on top of another base
- `git cherry-pick`: copies a specific commit onto another branch

### 6. Explain differences: `git reset`, `git revert`, `git restore`, `git switch`, `git checkout`

- `git reset`: moves HEAD and can rewrite history
- `git revert`: creates a new commit that undoes a previous one
- `git restore`: restores working tree or index files
- `git switch`: moves between branches
- `git checkout`: older multi-purpose command for branches and files

### 7. Explain staging area/index and `git stash`

- Staging area/index: the place where changes are prepared before commit
- `git stash`: temporarily shelves local changes

### 8. Explain snapshot and relationship between snapshot and commit

- Snapshot: the recorded state of tracked files at one point in time
- A commit points to a snapshot plus metadata and parent commit links

### 9. Local repository vs remote repository

- Local repository: your copy on your machine
- Remote repository: shared copy on GitHub or another server

## Protected Branch Rules

Recommended GitHub settings for `main`:

- Protect branch
- Require pull request before merge
- Require at least one review
- Require status checks to pass
- Disable direct pushes
- Restrict force pushes

Suggested workflow checks:

- Build must pass on `main`
- Review from another contributor before merge
- Deployment workflow must complete successfully

## Result

The final project is a clean static portfolio site with a realistic Git Flow history, branch-based development, merge conflict handling, and GitHub Pages deployment readiness.
