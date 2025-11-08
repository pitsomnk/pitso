# 🎉 cPanel Deployment Setup Complete!

Your Pitso Manyike portfolio website is now ready for deployment to cPanel hosting.

## ✅ What's Been Set Up

### 1. **`.cpanel.yml`** - Deployment Configuration
   - Automatically installs dependencies
   - Builds the Next.js application
   - Copies files to your public_html directory
   - Sets proper permissions
   - **Action Required**: Update `yourusername` with your actual cPanel username

### 2. **`server.js`** - Production Server
   - Custom Node.js server for running Next.js in production
   - Handles all requests and routes
   - Ready to use with PM2 or direct execution

### 3. **`README.md`** - Comprehensive Documentation
   - Complete setup instructions
   - Development and production build commands
   - Step-by-step cPanel deployment guide
   - Troubleshooting section

### 4. **`DEPLOYMENT.md`** - Deployment Checklist
   - Pre-deployment checklist
   - Step-by-step deployment process
   - Post-deployment configuration
   - Troubleshooting common issues
   - Quick reference commands

## 📋 Quick Start Guide

### Before Deploying:

1. **Edit `.cpanel.yml`**:
   ```yaml
   - export DEPLOYPATH=/home/YOUR_CPANEL_USERNAME/public_html/pitso
   ```
   Replace `yourusername` with your actual cPanel username

2. **Test Locally**:
   ```bash
   npm run build
   npm start
   ```

3. **Commit to Git**:
   ```bash
   git add .
   git commit -m "Ready for cPanel deployment"
   git push origin master
   ```

### Deploying to cPanel:

1. **Login to cPanel**
2. **Go to**: Files > Git Version Control
3. **Create Repository**:
   - Clone URL: `https://github.com/pitsomnk/pitso.git`
   - Repository Path: `/home/yourusername/repositories/pitso`
   - Repository Name: `pitso`
4. **Deploy**:
   - Click "Manage" on your repository
   - Click "Pull or Deploy" tab
   - Click "Deploy HEAD Commit"

### After Deployment:

Start your application using one of these methods:

**Using PM2 (Recommended)**:
```bash
cd /home/yourusername/public_html/pitso
pm2 start server.js --name pitso-portfolio
pm2 save
```

**Using Node Directly**:
```bash
cd /home/yourusername/public_html/pitso
NODE_ENV=production node server.js
```

## 📚 Documentation Files

- **README.md** - Main project documentation
- **DEPLOYMENT.md** - Detailed deployment guide
- **.cpanel.yml** - cPanel deployment configuration
- **server.js** - Production server file

## ⚙️ Key Requirements

- **cPanel** with Git Version Control feature
- **Node.js 18+** on your hosting
- **SSH access** (recommended but not required)
- **Sufficient disk space** for node_modules and build files

## 🚀 What Happens During Deployment

1. ✅ Dependencies are installed (`npm ci`)
2. ✅ Next.js application is built (`npm run build`)
3. ✅ Files are copied to your public_html directory
4. ✅ Production dependencies are installed
5. ✅ Permissions are set correctly

## ⚠️ Important Notes

- **Update username** in `.cpanel.yml` before deploying
- **Test locally** before pushing to production
- **Ensure Node.js is available** on your hosting (contact provider if needed)
- **Monitor resources** - Node.js apps use more resources than static sites

## 🆘 Need Help?

- Check `DEPLOYMENT.md` for detailed troubleshooting
- Review cPanel error logs in Git Version Control interface
- Contact your hosting provider for Node.js support
- Visit: https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/

## 📁 Project Structure

```
pitso/
├── .cpanel.yml          ← Deployment config (UPDATE USERNAME!)
├── server.js            ← Production server
├── README.md            ← Main documentation
├── DEPLOYMENT.md        ← Deployment guide
├── app/                 ← Application code
├── public/              ← Static assets
└── package.json         ← Dependencies
```

## 🎯 Next Steps

1. [ ] Update `.cpanel.yml` with your cPanel username
2. [ ] Test build locally
3. [ ] Commit and push to GitHub
4. [ ] Create repository in cPanel
5. [ ] Deploy using cPanel Git interface
6. [ ] Start the application
7. [ ] Configure your domain/subdomain
8. [ ] Test the live site

---

**Ready to deploy!** 🚀

Follow the instructions in `DEPLOYMENT.md` for a complete step-by-step guide.
