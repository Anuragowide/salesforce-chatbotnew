# Git Setup Guide - Copy and Paste Commands

This file contains all the commands you need to push your code to GitHub.

## Prerequisites
- GitHub account (create one at https://github.com if you don't have one)
- Git installed on your Windows machine

## Step-by-Step Commands to Run

### 1. Initialize Git Repository (if not already done)

```powershell
cd c:\Users\gowid\salesforce-chatbotnew
git init
```

### 2. Configure Git User (first time only)

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Add All Files

```powershell
git add .
```

### 4. Create First Commit

```powershell
git commit -m "Initial commit: Salesforce Chatbot with floating widget"
```

### 5. Rename Branch to Main

```powershell
git branch -M main
```

### 6. Add Remote Repository (Replace with YOUR GitHub URL)

⚠️ **You need to create a repository on GitHub first!**

Go to: https://github.com/new

- Repository name: `salesforce-chatbotnew`
- Description: "AI-powered Salesforce Chatbot with floating widget"
- Public or Private: Choose your preference
- Click "Create repository"

Then copy the HTTPS URL (looks like: `https://github.com/YOUR_USERNAME/salesforce-chatbotnew.git`)

### 7. Add Remote and Push

```powershell
# Replace with your actual GitHub URL from step 6
git remote add origin https://github.com/YOUR_USERNAME/salesforce-chatbotnew.git
git push -u origin main
```

---

## What Gets Ignored?

The `.gitignore` file already excludes:
- `node_modules/` - Dependencies (reinstalled by `npm install`)
- `.next/` - Build cache
- `.env` - Environment variables
- Other unnecessary files

---

## Ready for Next Step?

Once you've pushed to GitHub, you can:
1. Login to Vercel with your GitHub account
2. Import the repository
3. Get your production URL

**Your GitHub URL will be:** `https://github.com/YOUR_USERNAME/salesforce-chatbotnew`
