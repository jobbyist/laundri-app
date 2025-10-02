# Deployment Architecture

## Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     GitHub Repository                            │
│                   jobbyist/laundri-app                          │
└────────────┬────────────────────────────────────────────────────┘
             │
             │ Push to main branch
             │
             ▼
┌─────────────────────────────────────────────────────────────────┐
│              GitHub Actions Workflow                             │
│           (.github/workflows/deploy.yml)                         │
│                                                                   │
│  ┌────────────┐  ┌────────────┐  ┌──────────────┐              │
│  │  Checkout  │→ │   Build    │→ │    Upload    │              │
│  │    Code    │  │  npm ci    │  │   Artifact   │              │
│  │            │  │ npm build  │  │   (dist/)    │              │
│  └────────────┘  └────────────┘  └──────────────┘              │
│                                           │                       │
│                                           ▼                       │
│                                   ┌──────────────┐              │
│                                   │    Deploy    │              │
│                                   │   to Pages   │              │
│                                   └──────────────┘              │
└────────────────────────────────────────┬────────────────────────┘
                                         │
                                         │ Deploy
                                         │
                                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                      GitHub Pages                                │
│                                                                   │
│  Serves static files from dist/ including:                      │
│  • index.html                                                    │
│  • assets/*.js, assets/*.css                                    │
│  • CNAME (custom domain config)                                 │
│  • .nojekyll (disable Jekyll)                                   │
│  • Static assets (favicon, images, PDFs)                        │
└────────────────────────────────────────┬────────────────────────┘
                                         │
                                         │ DNS Resolution
                                         │
                                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                  Custom Domain Setup                             │
│                                                                   │
│  Domain: app.laundri.co.za                                      │
│  DNS Configuration:                                              │
│  • CNAME: app → jobbyist.github.io                             │
│                                                                   │
└────────────────────────────────────────┬────────────────────────┘
                                         │
                                         │ HTTPS
                                         │
                                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                        End Users                                 │
│                                                                   │
│  Access: https://app.laundri.co.za                              │
│  • React SPA with client-side routing                           │
│  • Vite-built optimized bundles                                 │
│  • Fast loading with code splitting                             │
└─────────────────────────────────────────────────────────────────┘
```

## Build Process Details

### Input Files
```
src/
  ├── App.tsx           (React Router setup)
  ├── pages/            (Route components)
  ├── components/       (UI components)
  └── ...

public/
  ├── CNAME             (custom domain)
  ├── .nojekyll         (disable Jekyll)
  ├── favicon.ico
  ├── robots.txt
  └── collections/
```

### Build Command
```bash
npm run build  # Runs: vite build
```

### Output (dist/)
```
dist/
  ├── index.html        (Entry point)
  ├── assets/
  │   ├── index-[hash].js   (Main JS bundle)
  │   └── index-[hash].css  (Main CSS bundle)
  ├── CNAME             (Copied from public/)
  ├── .nojekyll         (Copied from public/)
  ├── favicon.ico
  ├── robots.txt
  └── collections/      (Static PDF files)
```

## Workflow Trigger Events

1. **Automatic Deployment**
   - Trigger: Push to `main` branch
   - Action: Automatically builds and deploys

2. **Manual Deployment**
   - Trigger: workflow_dispatch (manual trigger)
   - Action: User can trigger from Actions tab

## Domain Configuration

### DNS Settings Required
```
Type:  CNAME
Name:  app
Value: jobbyist.github.io
TTL:   3600 (or automatic)
```

### Verification
After DNS propagation (up to 48 hours), check:
```bash
# Verify DNS resolution
dig app.laundri.co.za

# Expected output should include:
# app.laundri.co.za. 3600 IN CNAME jobbyist.github.io.
```

## Security & Performance

- **HTTPS**: Automatically provided by GitHub Pages
- **CDN**: GitHub's global CDN for fast content delivery
- **Caching**: Proper cache headers for static assets
- **SPA Support**: .nojekyll ensures proper routing

## Monitoring & Troubleshooting

### Check Deployment Status
1. Go to repository Actions tab
2. View latest "Deploy to GitHub Pages" workflow run
3. Check for any errors in build or deploy steps

### Common Issues

| Issue | Solution |
|-------|----------|
| 404 on routes | Verify .nojekyll is present |
| Custom domain not working | Check DNS settings, wait for propagation |
| Build fails | Check Actions logs, verify dependencies |
| Assets not loading | Verify base: "/" in vite.config.ts |

## Performance Metrics

- **Build Time**: ~3.5 seconds
- **Bundle Size**: 
  - JS: 405 KB (123 KB gzipped)
  - CSS: 63 KB (11 KB gzipped)
- **Deployment Time**: ~30-60 seconds total
