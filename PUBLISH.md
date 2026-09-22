# Publish to GitHub

The ChatGPT GitHub connection used to prepare this project can update existing repositories, but it does not expose repository-creation or GitHub Pages settings actions. Create the two empty repositories once, then push these prepared projects.

## 1) Learning website

```bash
cd his-ai-product-workshop
git init -b main
git add .
git commit -m "feat: initial AI Product Workshop"
gh repo create somprasongd/his-ai-product-workshop --public --source=. --remote=origin --push
```

Then open **Settings → Pages** and choose **GitHub Actions** as the source. The included `.github/workflows/pages.yml` deploys the static site on pushes to `main`.

Expected URL:

```text
https://somprasongd.github.io/his-ai-product-workshop/
```

## 2) Starter repository

```bash
cd his-ai-opd-checkin-starter
git init -b main
git add .
git commit -m "feat: initial OPD check-in training starter"
gh repo create somprasongd/his-ai-opd-checkin-starter --public --source=. --remote=origin --push
```

Learners can fork/clone this repository on GitHub, or repoint `origin` to the company's self-hosted GitLab.
