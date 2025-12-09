# 📝 Deployment Checklist

## Pre-Deployment Checklist

- [ ] App runs locally at `http://localhost:3000`
- [ ] Floating chat widget is visible and functional
- [ ] Messages can be sent and received
- [ ] Tailwind CSS styling is applied correctly
- [ ] No console errors in DevTools

## Vercel Deployment

- [ ] GitHub account created (optional but recommended)
- [ ] Vercel account created at https://vercel.com
- [ ] Repository pushed to GitHub
- [ ] Project imported to Vercel
- [ ] **Vercel URL obtained** (e.g., `https://salesforce-chatbotnew.vercel.app`)
- [ ] Production build tested and working

## Salesforce Integration

### Prerequisites
- [ ] Salesforce Dev Org access
- [ ] Admin privileges in Salesforce
- [ ] Developer Console enabled
- [ ] Vercel URL ready

### Setup Steps
- [ ] Visualforce Page created: `SalesforceChannelBot`
- [ ] Visualforce page code updated with Vercel URL
- [ ] Visualforce page activated
- [ ] App builder accessed (Settings → Edit Page)
- [ ] Utility Bar item added
- [ ] Visualforce page selected in Utility Bar
- [ ] Custom label set to "Chatbot"
- [ ] Height configured (600px recommended)
- [ ] Page activated in Salesforce
- [ ] App cache cleared (Setup → System Overview → Clear Cache)

## Testing in Salesforce

- [ ] Utility Bar visible at bottom of Salesforce page
- [ ] Chatbot item appears in Utility Bar
- [ ] Chatbot can be expanded/collapsed
- [ ] Widget loads within Salesforce (not blank/error)
- [ ] Messages can be sent in widget
- [ ] Styling looks correct (no layout issues)
- [ ] Works on different pages (Account, Opportunity, etc.)

## Customization (Optional)

- [ ] Colors updated to match brand
- [ ] Initial greeting message customized
- [ ] Company logo added if desired
- [ ] Help text or instructions added
- [ ] API integration configured (if needed)

## Monitoring & Maintenance

- [ ] Set up error tracking (Sentry, LogRocket, etc.)
- [ ] Monitor Vercel deployment analytics
- [ ] Test after Salesforce updates
- [ ] Document custom configurations
- [ ] Plan for future enhancements

---

## Quick Commands Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Deploy to Vercel
vercel --prod

# Clear Next.js cache
rm -r .next

# Stop running dev server
Ctrl+C (or Cmd+C on Mac)
```

---

## Support Resources

- **Stuck on Setup?** → Read `SETUP_SUMMARY.md`
- **Deploying to Vercel?** → Read `VERCEL_DEPLOYMENT.md`
- **Integrating with Salesforce?** → Read `SALESFORCE_INTEGRATION.md`
- **General Questions?** → Check `README.md`

---

## 🎉 Success!

Once all checkboxes are complete, you have a fully functional Salesforce Chatbot!

**Current Status:** ✅ Ready for Vercel Deployment

**Next Action:** Follow `VERCEL_DEPLOYMENT.md` to deploy
