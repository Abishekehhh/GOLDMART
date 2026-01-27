# 🚀 Goldmart Website Deployment Guide

This guide will help you host your Goldmart website online with a public URL.

## 📋 Table of Contents
1. [Free Hosting Options](#free-hosting-options)
2. [Step-by-Step Deployment](#step-by-step-deployment)
3. [Custom Domain Setup](#custom-domain-setup)
4. [Build Your Project](#build-your-project)

---

## 🆓 Free Hosting Options

### Option 1: **Vercel** (Recommended - Easiest)
- ✅ Free forever
- ✅ Automatic deployments from GitHub
- ✅ Custom domain support
- ✅ Fast CDN
- ✅ HTTPS included
- **URL Format**: `your-site.vercel.app` or custom domain

### Option 2: **Netlify**
- ✅ Free forever
- ✅ Drag & drop deployment
- ✅ Custom domain support
- ✅ HTTPS included
- **URL Format**: `your-site.netlify.app` or custom domain

### Option 3: **GitHub Pages**
- ✅ Free forever
- ✅ Integrated with GitHub
- ⚠️ Requires GitHub repository
- **URL Format**: `username.github.io/repo-name`

### Option 4: **Render**
- ✅ Free tier available
- ✅ Easy setup
- ✅ Custom domain support
- **URL Format**: `your-site.onrender.com`

---

## 📝 Step-by-Step Deployment

### Method 1: Deploy to Vercel (Recommended)

#### Prerequisites:
- GitHub account (free)
- Vercel account (free)

#### Steps:

1. **Push your code to GitHub:**
   ```bash
   # If you haven't initialized git yet:
   git init
   git add .
   git commit -m "Initial commit - Goldmart website"
   
   # Create a new repository on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Wait 1-2 minutes
   - **Your site is live!** 🎉

3. **Your URL will be:**
   - `your-project-name.vercel.app`
   - You can customize it in project settings

---

### Method 2: Deploy to Netlify

#### Steps:

1. **Build your project:**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with your production files.

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login (free)
   - Drag and drop your `dist` folder onto Netlify
   - **Your site is live!** 🎉
   - Or connect to GitHub for automatic deployments

3. **Your URL will be:**
   - `random-name-12345.netlify.app`
   - You can customize it in site settings

---

### Method 3: Deploy to GitHub Pages

#### Steps:

1. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json:**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to your GitHub repository
   - Settings → Pages
   - Source: `gh-pages` branch
   - Your site will be at: `username.github.io/repo-name`

---

## 🌐 Custom Domain Setup

### Option 1: Buy a Domain
- **Namecheap**: $8-15/year
- **Google Domains**: $12/year
- **GoDaddy**: $10-15/year
- **Cloudflare**: $8-10/year (cheapest)

### Option 2: Free Subdomain
- **Freenom**: Free `.tk`, `.ml`, `.ga` domains
- **No-IP**: Free dynamic DNS

### Connect Domain to Vercel:
1. Go to your Vercel project → Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Wait for DNS propagation (5 minutes to 48 hours)

### Connect Domain to Netlify:
1. Go to your site → Domain settings
2. Add custom domain
3. Follow DNS setup instructions

---

## 🔨 Build Your Project

Before deploying, always build your project:

```bash
# Install dependencies (if not done)
npm install

# Build for production
npm run build

# Preview the build locally (optional)
npm run preview
```

The `dist` folder contains your production-ready website.

---

## 📦 What Gets Deployed?

- ✅ All your React components
- ✅ CSS styles (Tailwind)
- ✅ Images and assets
- ✅ Your favicon
- ✅ All pages and routes

---

## 🔄 Continuous Deployment

Once connected to GitHub:
- Every time you push code → Site auto-updates
- No manual deployment needed
- Preview deployments for pull requests

---

## 🆘 Troubleshooting

### Build Errors:
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Routing Issues (404 errors):
- Make sure your hosting platform supports SPA routing
- Vercel: Auto-configured ✅
- Netlify: Add `_redirects` file (already included)

### Environment Variables:
- Add them in your hosting platform's dashboard
- Don't commit sensitive keys to GitHub

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Vite Deployment**: https://vitejs.dev/guide/static-deploy.html

---

## ✨ Quick Start (Fastest Method)

1. Push code to GitHub
2. Go to vercel.com
3. Import GitHub repo
4. Click Deploy
5. Done! 🎉

**Your website will be live in under 5 minutes!**
