# GitHub Pages Deployment Setup

This document describes the GitHub Pages deployment configuration for the Laundri app.

## Overview

The application is configured to automatically deploy to GitHub Pages using GitHub Actions with the custom domain `app.laundri.co.za`.

## Files Added/Modified

### 1. `.github/workflows/deploy.yml`
GitHub Actions workflow that:
- Triggers on pushes to the `main` branch
- Can be manually triggered via workflow_dispatch
- Builds the application using `npm ci` and `npm run build`
- Deploys the `dist` folder to GitHub Pages

### 2. `vite.config.ts`
Added `base: "/"` configuration to ensure proper asset path resolution when deployed to a custom domain.

### 3. `public/CNAME`
Contains the custom domain `app.laundri.co.za`. This file is automatically copied to the `dist` folder during build and tells GitHub Pages to serve the site on this custom domain.

### 4. `public/.nojekyll`
An empty file that prevents GitHub Pages from processing the site with Jekyll. This is essential for single-page applications (SPAs) to work correctly.

## Setup Instructions

### Step 1: Enable GitHub Pages
1. Go to repository Settings > Pages
2. Under "Build and deployment":
   - Source: Select "GitHub Actions"
3. Save the settings

### Step 2: Configure DNS Records
Configure your DNS provider to point `app.laundri.co.za` to GitHub Pages:

**Option A: Using CNAME (Recommended)**
- Add a CNAME record:
  - Name/Host: `app`
  - Value/Target: `jobbyist.github.io`
  - TTL: 3600 (or automatic)

**Option B: Using A Records**
- Add four A records for apex domain:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Add CNAME for www subdomain pointing to `jobbyist.github.io`

### Step 3: Verify Deployment
1. Push changes to the `main` branch
2. Go to Actions tab in GitHub to monitor the deployment
3. Once complete, visit `https://app.laundri.co.za` to see the live site

## How It Works

1. **Trigger**: When code is pushed to `main` branch, the workflow starts
2. **Build**: The workflow checks out code, installs dependencies, and runs `npm run build`
3. **Upload**: The `dist` folder is uploaded as a Pages artifact
4. **Deploy**: The artifact is deployed to GitHub Pages
5. **Custom Domain**: GitHub Pages serves the site on `app.laundri.co.za` based on the CNAME file

## Manual Deployment

To manually trigger a deployment:
1. Go to the Actions tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select the `main` branch
5. Click "Run workflow" button

## Troubleshooting

### Custom domain not working
- Verify DNS records are correctly configured using `dig app.laundri.co.za` or online DNS checker
- DNS changes can take up to 48 hours to propagate
- Check GitHub Pages settings to ensure the custom domain is recognized

### 404 errors on page refresh
- Ensure `.nojekyll` file is present in the deployed site
- Check that `base: "/"` is configured in `vite.config.ts`
- Verify that React Router is using BrowserRouter (already configured in `src/App.tsx`)

### Build failures
- Check the Actions tab for detailed error logs
- Ensure all dependencies are properly listed in `package.json`
- Verify that the build works locally with `npm run build`

## Files Structure

```
.github/
  workflows/
    deploy.yml          # GitHub Actions workflow
public/
  CNAME                 # Custom domain configuration
  .nojekyll             # Disable Jekyll processing
dist/                   # Build output (not committed)
  index.html
  assets/
  CNAME                 # Copied from public/
  .nojekyll             # Copied from public/
```

## Additional Notes

- The workflow uses Node.js 20
- Build time is typically 3-4 seconds
- The site uses Vite for building and React Router for client-side routing
- All static assets (favicon, images, PDFs) are included in the build
