# Vercel Deployment Guide

## Step 1: Prepare Your Git Repository

First, ensure your project is in a Git repository:

```bash
cd c:\Users\gowid\salesforce-chatbotnew
git init
git add .
git commit -m "Initial commit: Salesforce Chatbot with floating widget"
```

Then push to GitHub (or GitLab/Bitbucket):

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/salesforce-chatbotnew.git
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy your project**:
   ```bash
   vercel
   ```

Follow the prompts:
- Link to existing project? → No (create new)
- Project name: `salesforce-chatbotnew`
- Framework: `Next.js`
- Root directory: `.`

### Option B: Using Vercel Dashboard (Easy)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New"** → **"Project"**
3. Select your GitHub repository
4. Click **"Import"**
5. Framework will be auto-detected as Next.js
6. Click **"Deploy"**

## Step 3: Get Your Hosted URL

After deployment, Vercel will provide you with a URL like:
```
https://salesforce-chatbotnew.vercel.app
```

This is your **production URL** for embedding in Salesforce!

## Step 4: Configure Environment Variables (Optional)

If you need API keys or environment variables:

1. Go to Vercel Dashboard → Your Project
2. Click **Settings** → **Environment Variables**
3. Add any necessary variables (e.g., `NEXT_PUBLIC_API_URL`, etc.)
4. Redeployment happens automatically

## Step 5: Enable Preview Deployments

By default, Vercel creates preview URLs for pull requests. This is already enabled.

To test changes before deploying to production:
1. Create a feature branch locally
2. Push to GitHub
3. Open a PR
4. Vercel will automatically create a preview URL

## Important: Security Headers for Salesforce

Your `next.config.mjs` already has the correct security headers:

```javascript
{
  key: 'Content-Security-Policy',
  value: "frame-ancestors 'self' *.salesforce.com *.force.com lightning.force.com;"
}
```

These headers tell the browser to allow embedding in Salesforce iFrames.

## Troubleshooting Deployment

### Build Fails
- Check the **Deployments** tab in Vercel for error messages
- Ensure all dependencies are listed in `package.json`
- Verify no environment variables are missing

### 404 or Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Check the build logs in Vercel Dashboard
- Ensure Tailwind CSS is configured correctly in `tailwind.config.js`

---

**Next Step:** Once you have your Vercel URL, proceed to the [Salesforce Integration Guide](./SALESFORCE_INTEGRATION.md)
