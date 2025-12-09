# Salesforce Setup Checklist - Detailed Steps

Complete these steps in order to add your chatbot to Salesforce.

## ✅ Prerequisites
- Salesforce admin access
- Your Vercel app URL (will get after deployment)
- Visualforce page code ready (provided: `SalesforceChannelBot.vfpage`)

---

## **Phase 1: Create Visualforce Page** (5 minutes)

### Step 1.1: Open Salesforce
- Login to your Salesforce org
- URL: `https://yourorgname.lightning.force.com`

### Step 1.2: Go to Visualforce Pages
- Click **Setup** (gear icon, top-right)
- Search for **Visualforce Pages**
- Click **Visualforce Pages**

### Step 1.3: Create New Page
- Click **New** button
- Copy all content from `SalesforceChannelBot.vfpage` file
- Paste into the text area

**Important fields:**
- **Label:** `Salesforce Chatbot` (user-friendly name)
- **Name:** `SalesforceChannelBot` (no spaces)
- **Content:** Paste the VF page code

### Step 1.4: Save
- Click **Save**
- You should see: "Visualforce page 'SalesforceChannelBot' created successfully"

---

## **Phase 2: Add to Utility Bar** (5 minutes)

### Step 2.1: Go to Your App
- Navigate to your preferred app (e.g., Sales Cloud, Service Cloud)
- Example URL: `https://yourorgname.lightning.force.com/lightning/app/06Exx000000IZ3`

### Step 2.2: Edit the App
- Click the **Settings** icon (gear, top-right)
- Click **Edit Page**

### Step 2.3: Add Utility Item
- Look for **Utility Bar (footer)** section at bottom
- Click the **+** icon to add an item
- Search for and select **Visualforce Page**

### Step 2.4: Configure the Utility Item
- **Label:** `Chatbot` (what shows in the utility bar)
- **Name:** `ChatBot` (internal name, no spaces)
- **Visualforce Page:** `SalesforceChannelBot` (select from dropdown)
- **Height:** `600` (pixels - adjust if needed)
- **Width:** Keep default (full width)
- **Icon:** Choose a chat icon if available

### Step 2.5: Save & Activate
- Click **Save**
- Click **Activate**
- Confirm the activation

---

## **Phase 3: Test in Salesforce** (5 minutes)

### Step 3.1: Go Back to App
- Click **Done** to exit edit mode
- Go to any record in the app

### Step 3.2: Look for Chatbot
- Look at the **bottom footer** (Utility Bar)
- You should see a **"Chatbot"** icon/button
- It may appear as a collapsed icon

### Step 3.3: Test the Widget
- Click the **Chatbot** icon to expand it
- The chat interface should open
- Try clicking the chat button inside
- Try sending a message

### Step 3.4: Verify It Works
- ✅ Widget appears
- ✅ Can expand/collapse
- ✅ Can see message input
- ✅ Can send messages
- ✅ Bot responds

---

## **Troubleshooting**

| Problem | Solution |
|---------|----------|
| **"Page Not Found"** | Check Visualforce page name is exactly `SalesforceChannelBot` |
| **Blank white space** | Refresh page (Ctrl+Shift+R) or clear cache |
| **iFrame not loading** | Check Vercel URL is correct and accessible |
| **CSP error in console** | Verify frame-ancestors header (already configured) |
| **Widget not visible** | Check Utility Bar is not hidden |

---

## **After Vercel Deployment**

Once you have your Vercel URL, you need to:

1. Update the Visualforce page with your real URL
2. Replace: `https://salesforce-chatbotnew.vercel.app` with your actual URL

**Where to update:**
- Line with `src="https://salesforce-chatbotnew.vercel.app"` in the iFrame
- PostMessage origin validation URL

**How to update:**
1. Go back to **Setup** → **Visualforce Pages**
2. Click **Edit** on `SalesforceChannelBot`
3. Find and replace the URL
4. Click **Save**

---

## **Expected Result**

After completion, you should have:
- ✅ Visualforce page created in Salesforce
- ✅ Chatbot visible in Utility Bar
- ✅ Working chat widget
- ✅ Two-way communication ready

---

## **Next Steps**

1. Deploy to Vercel (get your URL)
2. Return here and update the Salesforce page with real URL
3. Test end-to-end communication

