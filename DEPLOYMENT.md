# cPanel Deployment Checklist

## Pre-Deployment

- [ ] Update `.cpanel.yml` with your actual cPanel username
  - Replace `yourusername` with your cPanel username
  - Verify deployment path: `/home/yourusername/public_html/pitso`

- [ ] Verify Node.js availability on your hosting
  - Contact hosting provider if needed
  - Minimum version: Node.js 18+

- [ ] Test build locally
  ```bash
  npm run build
  npm start
  ```

- [ ] Commit all changes to Git
  ```bash
  git add .
  git commit -m "Ready for cPanel deployment"
  ```

## Deployment Setup

### Step 1: Push to GitHub
```bash
git remote add origin https://github.com/pitsomnk/pitso.git
git branch -M master
git push -u origin master
```

### Step 2: Create Repository in cPanel
1. Login to cPanel
2. Navigate to: **Files > Git Version Control**
3. Click **Create**
4. Fill in:
   - **Clone URL**: `https://github.com/pitsomnk/pitso.git`
   - **Repository Path**: `/home/yourusername/repositories/pitso`
   - **Repository Name**: `pitso`
5. Click **Create**

### Step 3: Verify .cpanel.yml
- [ ] Confirm `.cpanel.yml` exists in repository root
- [ ] Verify deployment path is correct
- [ ] Check that username is updated

### Step 4: Initial Deployment
**Option A: Automatic (if configured)**
- Push to GitHub triggers automatic deployment

**Option B: Manual**
1. In cPanel Git Version Control, click **Manage**
2. Go to **Pull or Deploy** tab
3. Click **Update from Remote**
4. Click **Deploy HEAD Commit**

## Post-Deployment

### Step 5: Start Application

**Method 1: Using Application Manager (if available)**
1. Go to **Software > Application Manager**
2. Register Node.js application
3. Set:
   - Script: `server.js`
   - Directory: `/home/yourusername/public_html/pitso`
   - Port: `3000` (or your assigned port)

**Method 2: Using Terminal/SSH**
```bash
cd /home/yourusername/public_html/pitso
NODE_ENV=production node server.js
```

**Method 3: Using PM2 (Recommended if available)**
```bash
cd /home/yourusername/public_html/pitso
pm2 start server.js --name pitso-portfolio
pm2 save
pm2 startup
```

### Step 6: Configure Domain/Subdomain
1. In cPanel, go to **Domains**
2. Create subdomain or point domain to deployment directory
3. Set document root to: `/home/yourusername/public_html/pitso`

### Step 7: Test Deployment
- [ ] Visit your domain/subdomain
- [ ] Test homepage loads correctly
- [ ] Navigate to articles section
- [ ] Test all article links
- [ ] Check mobile responsiveness
- [ ] Verify dark mode toggle

## Troubleshooting

### Deployment Issues

**Problem**: .cpanel.yml not recognized
- **Solution**: Ensure file is in repository root, not in subdirectory
- **Solution**: Check file name (must be `.cpanel.yml` with leading dot)

**Problem**: Permission denied errors
```bash
chmod +x /home/yourusername/public_html/pitso/server.js
chmod -R 755 /home/yourusername/public_html/pitso
```

**Problem**: Node modules not installing
- **Solution**: Check disk space quota
- **Solution**: Try manual install via SSH

### Application Issues

**Problem**: Application won't start
- Check Node.js is installed: `node --version`
- Check if port is in use: `netstat -tulpn | grep 3000`
- Review error logs

**Problem**: Build fails
- Check Node.js version compatibility
- Verify all dependencies are installed
- Try building locally first

**Problem**: 404 errors for routes
- Ensure Next.js is running in production mode
- Check `.next` directory was copied correctly
- Verify server.js is handling requests

## Updating the Site

### Making Changes

1. **Make changes locally**
   ```bash
   # Edit files
   git add .
   git commit -m "Update description"
   ```

2. **Test locally**
   ```bash
   npm run dev
   # or
   npm run build && npm start
   ```

3. **Push to GitHub**
   ```bash
   git push origin master
   ```

4. **Deploy to cPanel**
   - Automatic: Wait for auto-deployment (if configured)
   - Manual: Use cPanel Git interface to pull and deploy

### Quick Update Process
```bash
# Local changes
git add .
git commit -m "Your changes"
git push origin master

# In cPanel Git Interface:
# 1. Click "Update from Remote"
# 2. Click "Deploy HEAD Commit"
# 3. Restart Node.js application
```

## Important Notes

⚠️ **Production Environment**
- Set `NODE_ENV=production` for optimal performance
- Build files are cached in `.next` directory
- Static assets served from `public` directory

⚠️ **Security**
- Never commit `.env` files with sensitive data
- Keep dependencies updated
- Monitor server logs regularly

⚠️ **Performance**
- Node.js applications use more resources than static sites
- Monitor CPU and memory usage
- Consider using a process manager like PM2

## Support

If you encounter issues:
1. Check cPanel error logs
2. Review deployment output in Git interface
3. Contact hosting provider for Node.js support
4. Check Next.js documentation: https://nextjs.org/docs

## Quick Reference

### Important Paths
- Repository: `/home/yourusername/repositories/pitso`
- Deployment: `/home/yourusername/public_html/pitso`
- Server script: `/home/yourusername/public_html/pitso/server.js`

### Important Commands
```bash
# Build
npm run build

# Start production server
NODE_ENV=production node server.js

# Check Node version
node --version

# Check running processes
ps aux | grep node

# Stop application
pkill -f "node server.js"
```

### Git Commands
```bash
# Check status
git status

# Add all changes
git add .

# Commit
git commit -m "message"

# Push
git push origin master

# Pull latest
git pull origin master
```

---

✅ **Deployment Complete!**
Your portfolio should now be live and accessible via your domain/subdomain.
