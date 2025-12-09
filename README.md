# Salesforce Chatbot - Next.js iFrame Edition

A production-ready AI chatbot built with Next.js, designed to be embedded in Salesforce via iFrame. Features a floating widget interface with real-time messaging, minimize/maximize functionality, and seamless Salesforce integration.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` - the chatbot widget appears in the bottom-right corner!

### Build for Production

```bash
npm run build
npm run start
```

## 📋 Features

- ✅ **Floating Widget** - Always-accessible chat interface with minimize/maximize
- ✅ **Real-time Messaging** - Instant message delivery and responses
- ✅ **Tailwind CSS** - Modern, responsive design
- ✅ **iFrame Ready** - Secure embedding in Salesforce with CSP headers
- ✅ **Salesforce Utility Bar** - Integrates as persistent dock item
- ✅ **PostMessage API** - Two-way communication with parent Salesforce window
- ✅ **Mobile Responsive** - Works on desktop and tablets

## 📁 Project Structure

```
src/
├── app/
│   ├── page.js              # Home page with app info
│   ├── layout.js            # Root layout (imports ChatWidget)
│   ├── globals.css          # Tailwind CSS imports
│
├── components/
│   └── ChatWidget.jsx       # Floating chat widget (main component)
│
next.config.mjs             # Security headers for Salesforce CSP
tailwind.config.js          # Tailwind CSS configuration
package.json                # Dependencies & scripts
```

## 🔧 Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Hosting**: Vercel
- **Parent Integration**: Salesforce (iFrame + Visualforce)

## 📦 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel login
vercel
```

**See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed instructions.**

Your app will be available at: `https://salesforce-chatbotnew.vercel.app`

## 🔐 Salesforce Integration

### Setup in Salesforce

1. **Create Visualforce Page** with iFrame pointing to your Vercel URL
2. **Add to Utility Bar** in your Salesforce app
3. **Configure Security Headers** (already done in `next.config.mjs`)

**See [SALESFORCE_INTEGRATION.md](./SALESFORCE_INTEGRATION.md) for step-by-step guide.**

### Security

Your app includes proper Content-Security-Policy headers to allow embedding in Salesforce:

```javascript
// next.config.mjs
{
  key: 'Content-Security-Policy',
  value: "frame-ancestors 'self' *.salesforce.com *.force.com lightning.force.com;"
}
```

## 💬 Component Overview

### ChatWidget.jsx

The main floating widget component with:
- Expandable/collapsible chat window
- Message history with user/bot distinction
- Real-time typing indicators
- Minimize/maximize controls
- Gradient-styled button with icon changes

## 🌐 PostMessage Communication

### Listen for Salesforce Data

```javascript
useEffect(() => {
  const handleMessage = (event) => {
    if (!event.origin.includes('salesforce.com')) return;
    console.log('Data from Salesforce:', event.data);
  };
  
  window.addEventListener('message', handleMessage);
  return () => window.removeEventListener('message', handleMessage);
}, []);
```

### Send Data to Salesforce

```javascript
window.parent.postMessage(
  { type: 'CHATBOT_EVENT', payload: data },
  'https://yourorgname.lightning.force.com'
);
```

## 🎨 Customization

Edit `src/components/ChatWidget.jsx` to:
- Change colors (Tailwind classes)
- Update initial messages
- Modify UI layout
- Add new features

## 🐛 Troubleshooting

### Tailwind CSS Not Loading
- Clear `.next` cache: `rm -r .next && npm run dev`
- Check browser DevTools → Styles to verify CSS is applied

### iFrame CSP Errors
- Verify Vercel URL in Visualforce page
- Check `next.config.mjs` has correct frame-ancestors header

### Widget Not Appearing
- Ensure `ChatWidget` is imported in `src/app/layout.js`
- Check console for JavaScript errors
- Clear browser cache

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [Salesforce Docs](https://developer.salesforce.com/docs)
- [Visualforce Pages](https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/)

## 🔄 Next Steps

1. **Deploy to Vercel** → [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)
2. **Integrate with Salesforce** → [SALESFORCE_INTEGRATION.md](./SALESFORCE_INTEGRATION.md)
3. **Add Real AI** → Connect OpenAI or similar API
4. **Store Conversations** → Log to Salesforce objects

---

**Happy Chatting! 🎉**
