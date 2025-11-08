# Pitso Manyike - Portfolio Website

A modern, interactive portfolio website for Pitso Manyike, freelance writer specializing in cryptocurrency, finance, and business.

## Features

- 🎨 Modern, responsive design with dark mode support
- ✨ Interactive animations and smooth transitions
- 📝 Featured articles section with full blog posts
- 🚀 Built with Next.js 16 and Tailwind CSS
- 📱 Mobile-first responsive design
- 🎯 SEO optimized

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Font:** Geist Sans & Geist Mono

## Getting Started

### Development

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to cPanel

This project is configured for deployment to cPanel hosting using Git Version Control.

### Prerequisites

1. **cPanel Account** with Git Version Control feature enabled
2. **Node.js** available on your hosting (check with your hosting provider)
3. **SSH Access** (recommended for initial setup)

### Setup Instructions

#### 1. Update Deployment Path

Edit the `.cpanel.yml` file and replace `yourusername` with your actual cPanel username:

```yaml
- export DEPLOYPATH=/home/yourusername/public_html/pitso
```

#### 2. Create Repository in cPanel

1. Log into your cPanel
2. Navigate to **Files > Git Version Control**
3. Click **Create**
4. Enter repository details:
   - **Clone URL:** Your GitHub repository URL (https://github.com/pitsomnk/pitso.git)
   - **Repository Path:** Choose where to store the repo (e.g., `/home/yourusername/repositories/pitso`)
   - **Repository Name:** pitso

#### 3. Configure Deployment

The `.cpanel.yml` file is already configured to:
- Install dependencies
- Build the Next.js application
- Copy files to your public_html directory
- Set proper permissions

#### 4. Deploy

**Option A: Automatic Deployment (Push)**
1. Push changes to your GitHub repository:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin master
   ```
2. cPanel will automatically detect the push and deploy

**Option B: Manual Deployment (Pull)**
1. In cPanel Git Version Control, click **Manage** on your repository
2. Click **Pull or Deploy** tab
3. Click **Update from Remote** to fetch latest changes
4. Click **Deploy HEAD Commit** to deploy

### Post-Deployment

After deployment, you need to start the Node.js application:

#### Using cPanel Application Manager

1. Go to **Software > Application Manager** (if available)
2. Register your Node.js application
3. Set startup script to: `server.js`
4. Set working directory to: `/home/yourusername/public_html/pitso`

#### Using SSH/Terminal

```bash
cd /home/yourusername/public_html/pitso
node server.js
```

#### Using PM2 (Recommended)

If PM2 is available:

```bash
cd /home/yourusername/public_html/pitso
pm2 start server.js --name pitso-portfolio
pm2 save
pm2 startup
```

### Environment Variables

For production, you may need to set:

```bash
export NODE_ENV=production
export PORT=3000
```

### Troubleshooting

#### Deployment Fails
- Check that `.cpanel.yml` is in the repository root
- Verify your cPanel username in the deployment path
- Check cPanel error logs in Git Version Control interface

#### Application Won't Start
- Ensure Node.js is installed (`node --version`)
- Check if the port is already in use
- Review server logs for error messages

#### Permission Issues
```bash
chmod +x server.js
chmod -R 755 /home/yourusername/public_html/pitso
```

### Important Notes

⚠️ **Before Deploying:**
- The deployment path in `.cpanel.yml` must match your cPanel account
- Ensure you have enough disk space for node_modules and build files
- Test locally before deploying to production

⚠️ **Node.js Requirements:**
- This application requires Node.js 18+ 
- Contact your hosting provider if Node.js is not available

## Project Structure

```
pitso/
├── app/
│   ├── articles/          # Article pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── public/                # Static assets
├── .cpanel.yml           # cPanel deployment config
├── server.js             # Production server
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
└── package.json          # Dependencies
```

## Articles

The portfolio includes three featured articles:
1. **The Future of Decentralized Finance** - Cryptocurrency/DeFi
2. **Investment Strategies for 2025** - Finance
3. **Building a Startup in the Digital Age** - Business

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [cPanel Git Deployment Guide](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

© 2025 Pitso Manyike. All rights reserved.
