# Quick Reference: GitHub Pages Deployment

## 🚀 Quick Start (3 Steps)

### 1. Enable GitHub Pages
```
Repository Settings → Pages → Source: "GitHub Actions"
```

### 2. Configure DNS
```
Type:  CNAME
Name:  app
Value: jobbyist.github.io
TTL:   3600
```

### 3. Deploy
```
Merge PR to main → Automatic deployment begins
```

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `.github/workflows/deploy.yml` | Automated deployment workflow |
| `public/CNAME` | Custom domain: app.laundri.co.za |
| `public/.nojekyll` | Disable Jekyll (for SPA) |
| `vite.config.ts` | Build configuration (base: "/") |

---

## 🔧 Build Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deployment URLs

- **Custom Domain**: https://app.laundri.co.za
- **GitHub Pages**: https://jobbyist.github.io/laundri-app (fallback)
- **Repository**: https://github.com/jobbyist/laundri-app

---

## 📊 Build Metrics

| Metric | Value |
|--------|-------|
| Build Time | ~3.5 seconds |
| JS Bundle | 405 KB (123 KB gzipped) |
| CSS Bundle | 63 KB (11 KB gzipped) |
| Total Size | 468 KB (134 KB gzipped) |

---

## 🔍 Troubleshooting

### Build Fails
```bash
# Check Actions tab for detailed logs
# Verify locally: npm run build
```

### Domain Not Working
```bash
# Verify DNS: dig app.laundri.co.za
# Wait up to 48h for DNS propagation
```

### 404 on Routes
```bash
# Verify .nojekyll exists in dist/
# Check BrowserRouter is used (already configured)
```

---

## 📚 Documentation

- **DEPLOYMENT.md** - Complete setup guide
- **ARCHITECTURE.md** - Deployment architecture
- **README.md** - Project overview

---

## 🎯 Workflow Triggers

| Trigger | When |
|---------|------|
| Automatic | Push to main branch |
| Manual | Actions tab → "Deploy to GitHub Pages" → Run workflow |

---

## ✅ Verification Checklist

- [x] Build works: `npm run build`
- [x] CNAME file in dist/
- [x] .nojekyll file in dist/
- [x] Workflow file created
- [x] vite.config.ts updated
- [x] Documentation complete

---

## 🆘 Support

For issues or questions:
1. Check DEPLOYMENT.md troubleshooting section
2. Review Actions tab for deployment logs
3. Verify DNS settings at your domain provider
4. Ensure GitHub Pages is enabled in Settings

---

**Last Updated**: 2024  
**Version**: 1.0  
**Status**: ✅ Ready for deployment
