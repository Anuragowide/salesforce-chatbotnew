# Salesforce Integration Guide - Utility Bar with Visualforce Page

This guide explains how to embed your Vercel-hosted Next.js chatbot into Salesforce using a Visualforce page and the Utility Bar.

## Architecture Overview

```
Salesforce Org
├── Visualforce Page (Container)
│   └── iFrame
│       └── Your Vercel App (https://salesforce-chatbotnew.vercel.app)
└── Utility Bar Item (Persistent Dock)
```

## Prerequisites

- Salesforce Developer Edition or higher
- Admin access to your Salesforce org
- Your Vercel hosted URL: `https://salesforce-chatbotnew.vercel.app`
- Developer Console access enabled

## Step 1: Create the Visualforce Page

1. Go to **Setup** → **Visualforce Pages**
2. Click **"New"**
3. Name: `SalesforceChannelBot`
4. Label: `Salesforce Chatbot`
5. Paste this code:

```html
<apex:page showHeader="false" sidebar="false" standardStylesheets="false" docType="html-5.0">
    <html>
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Salesforce Chatbot</title>
        <style>
            html, body {
                margin: 0;
                padding: 0;
                height: 100%;
                width: 100%;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            }
            #chatbot-container {
                height: 100%;
                width: 100%;
                border: none;
            }
        </style>
    </head>
    <body>
        <iframe 
            id="chatbot-container"
            src="https://salesforce-chatbotnew.vercel.app"
            title="Salesforce Chatbot"
            allow="microphone; camera"
        ></iframe>
        
        <script>
            // Optional: Communication between Salesforce and iFrame
            window.addEventListener('message', function(event) {
                // Validate origin for security
                if (event.origin !== 'https://salesforce-chatbotnew.vercel.app') return;
                
                // Handle messages from the chatbot
                console.log('Message from chatbot:', event.data);
                
                // You can use Salesforce APIs here via the parent window
                // Example: sforce.apex.execute() calls
            });
        </script>
    </body>
    </html>
</apex:page>
```

6. Click **"Save"**

## Step 2: Add to Utility Bar

### For Desktop (Lightning Experience)

1. Go to your **App** (e.g., Sales Cloud)
2. Click the **⚙️ Settings** icon (top-right)
3. Select **"Edit Page"**
4. In the App Builder, look for **Utility Bar (footer)** section
5. Click **"+"** or **"Add Item"**
6. Search for and select **"Visualforce Page"**
7. Configure:
   - **Label**: Chatbot
   - **Name**: ChatBot
   - **Visualforce Page**: `SalesforceChannelBot`
   - **Height**: 600px (or adjust as needed)
8. Click **"Save"**
9. Click **"Activate"**
10. Confirm by clicking **"Next"** → **"Done"**

### For Mobile (Salesforce App)

Currently, Visualforce pages in the Utility Bar are desktop-only. For mobile, you'll need to:
- Create a custom Lightning Web Component (LWC), or
- Use Salesforce's embedded service (future phase)

## Step 3: Test the Integration

1. Go to any record in your Salesforce org
2. Look at the **bottom footer** - you should see **"Chatbot"** icon
3. Click it to expand the chatbot
4. Test sending a message

## Security Configuration

Your app is already configured with the correct CSP headers:

```
Content-Security-Policy: frame-ancestors 'self' *.salesforce.com *.force.com lightning.force.com;
```

This allows your Vercel app to be embedded in Salesforce iFrames.

## Advanced: Cross-Origin Communication (PostMessage)

To enable two-way communication between Salesforce and your chatbot:

### From Chatbot (Next.js) to Salesforce

```javascript
// In your ChatWidget component
const sendToSalesforce = (data) => {
  window.parent.postMessage({
    type: 'CHATBOT_MESSAGE',
    payload: data
  }, 'https://yourorgname.lightning.force.com');
};

// Example: Send user info when chatbot loads
useEffect(() => {
  if (window.self !== window.top) {
    sendToSalesforce({
      action: 'chatbot_ready',
      timestamp: new Date().toISOString()
    });
  }
}, []);
```

### From Salesforce to Chatbot

In the Visualforce Page, listen for messages:

```javascript
const chatbotFrame = document.getElementById('chatbot-container');

// Send message to chatbot
function sendToChatbot(message) {
  chatbotFrame.contentWindow.postMessage(
    {
      type: 'SALESFORCE_DATA',
      payload: message
    },
    'https://salesforce-chatbotnew.vercel.app'
  );
}

// Example: Send current record ID
window.addEventListener('load', function() {
  setTimeout(() => {
    sendToChatbot({
      action: 'set_record_id',
      recordId: '{!$CurrentPage.parameters.recordId}'
    });
  }, 1000);
});
```

### In Your Next.js App (ChatWidget.jsx)

```javascript
useEffect(() => {
  const handleMessage = (event) => {
    // Validate origin
    if (!event.origin.includes('salesforce.com')) return;
    
    const { type, payload } = event.data;
    
    if (type === 'SALESFORCE_DATA') {
      console.log('Received from Salesforce:', payload);
      // Handle Salesforce data in your chatbot
    }
  };
  
  window.addEventListener('message', handleMessage);
  return () => window.removeEventListener('message', handleMessage);
}, []);
```

## Step 4: Customize Height and Position

The Utility Bar allows customization:

1. Go back to **App Builder** for your app
2. Click on the Chatbot utility item
3. Adjust properties:
   - **Height**: 400px - 800px (recommended: 600px)
   - **Width**: Auto (full width)
   - **Icon**: Select a custom icon

## Troubleshooting

### "Page Not Found" in Salesforce
- Check the Visualforce Page exists in **Setup** → **Visualforce Pages**
- Verify the page name in the Utility Bar config matches exactly

### iFrame Not Loading
- Check browser console for CSP errors
- Verify your Vercel URL is correct
- Ensure `Content-Security-Policy` headers are present in your Next.js response

### Chatbot Not Appearing
- Clear Salesforce cache: **Setup** → **System Overview** → **Clear Cache**
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check if the Utility Bar is visible (may be collapsed)

### Styling/Layout Issues
- The iFrame is responsive, but test on different screen sizes
- If text is too small, check viewport meta tag in Visualforce page
- Ensure Tailwind CSS classes are loading (check Network tab in DevTools)

## Next Steps

1. **Enhanced Chatbot Features**:
   - Integrate with Salesforce REST APIs to fetch/create records
   - Add real AI responses using OpenAI API or similar
   - Store conversation history in Salesforce

2. **Analytics**:
   - Track user interactions
   - Log messages to custom Salesforce objects
   - Create dashboards of chatbot usage

3. **Custom Branding**:
   - Update colors to match your Salesforce theme
   - Add company logo to the chatbot header
   - Localize for multiple languages

---

**Congratulations!** Your Salesforce Chatbot is now live in your org! 🎉
