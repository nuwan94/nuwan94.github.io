# GitHub Pages Deployment Setup

This repository is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

## Setup Instructions

### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**

### 2. Update Site URL (if needed)
If your GitHub Pages URL is different from `https://nuwan.dev`, update the `site` field in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://yourusername.github.io/your-repo-name/',
  // ... rest of config
});
```

### 3. Deploy
Simply push your changes to the `main` branch:

```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin main
```

The deployment will start automatically and you can monitor it in the **Actions** tab of your GitHub repository.

## Manual Deployment
You can also trigger a deployment manually by going to the **Actions** tab and clicking "Run workflow" on the "Deploy to GitHub Pages" workflow.

## Local Development
```bash
npm install
npm run dev
```

Your site will be available at `http://localhost:4321`