# Personal Portfolio Website

This repository contains a small, professional portfolio website built with React and Vite.

## Git Workflow

This project follows a Git Flow style process:

- `main` is the protected release branch
- `develop` collects finished work
- `feature/*` branches carry new UI work
- `hotfix/*` branches address release issues

## Deployment

To deploy to GitHub Pages:

1. Push the final release to `main`
2. Make sure GitHub Pages is set to use GitHub Actions
3. Let the workflow build the project and publish the `dist` directory

The hotfix branch focuses on making the deployment pipeline reliable before release.
