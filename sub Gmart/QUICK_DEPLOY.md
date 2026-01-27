# ⚡ Quick Deploy Guide - Get Your Site Live in 5 Minutes!

## 🎯 Fastest Method: Vercel (Recommended)

### Step 1: Prepare Your Code
```bash
# Make sure everything is committed
git add .
git commit -m "Ready to deploy"
```

### Step 2: Push to GitHub
1. Create a new repository on GitHub.com
2. Copy the repository URL
3. Run these commands:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign Up"** → Use GitHub to login
3. Click **"Add New Project"**
4. Select your repository
5. Click **"Deploy"** (settings are auto-detected!)
6. Wait 1-2 minutes ⏳
7. **🎉 Your site is LIVE!**

### Your Website URL:
- **Free URL**: `your-project-name.vercel.app`
- **Custom Domain**: Add in project settings → Domains

---

## 🚀 Alternative: Netlify (Drag & Drop)

### Option A: Drag & Drop (No GitHub needed!)
1. Build your project:
   ```bash
   npm run build
   ```
2. Go to **[netlify.com](https://netlify.com)**
3. Sign up (free)
4. Drag the `dist` folder onto Netlify
5. **Done!** Your site is live!

### Option B: GitHub Integration
1. Connect your GitHub repo
2. Netlify auto-deploys on every push
3. Get preview URLs for pull requests

---

## 💰 Want a Custom Domain?

### Buy a Domain:
- **Cloudflare**: $8-10/year (cheapest)
- **Namecheap**: $8-15/year
- **Google Domains**: $12/year

### Connect to Vercel:
1. Project → Settings → Domains
2. Add your domain
3. Update DNS (instructions provided)
4. Wait 5-60 minutes

### Connect to Netlify:
1. Site → Domain settings
2. Add custom domain
3. Follow DNS setup

---

## ✅ What's Already Configured?

- ✅ `vercel.json` - Vercel deployment config
- ✅ `netlify.toml` - Netlify deployment config  
- ✅ `_redirects` - SPA routing support
- ✅ Build scripts ready in `package.json`

**Everything is ready to deploy!** 🎉

---

## 🆘 Troubleshooting

**Build fails?**
```bash
npm install
npm run build
```

**404 errors on routes?**
- Already fixed with `_redirects` file ✅

**Need help?**
- Check `DEPLOYMENT.md` for detailed guide

---

## 📱 Test Your Deployment

After deploying, test:
- ✅ Homepage loads
- ✅ Navigation works
- ✅ All pages accessible
- ✅ Images load correctly
- ✅ Favicon shows in browser tab

---

**Ready? Let's get your Goldmart website online! 🚀**
