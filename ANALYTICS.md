# Portfolio Analytics System

A **privacy-first, GitHub-compliant analytics solution** for measuring portfolio engagement with zero cost, no external services, and full GDPR compliance.

## 🎯 Overview

This system tracks:
- **Page views** — which pages visitors view
- **Project clicks** — which projects get the most engagement
- **Search queries** — what visitors search for
- **Time tracking** — when events occur

**All data is collected anonymously in the browser** using `localStorage`. No data leaves your visitor's computer without their explicit action.

## 🏗️ Architecture

### Components

1. **`src/js/analytics.js`** — Client-side tracker
   - Collects events in `localStorage`
   - Anonymous, no PII
   - ~4KB minified
   - Auto-cleanup after 90 days
   - Dev mode for local testing

2. **`analytics.html`** — Dashboard UI
   - View analytics summary
   - Export data as JSON
   - Share summaries on GitHub Discussions
   - Clear data on demand

3. **`.github/workflows/analytics-export.yml`** — Weekly export job
   - Runs Mondays at 00:00 UTC
   - Creates timestamped export artifacts
   - Stores for 90 days
   - Manual trigger available

### Data Flow

```
┌─────────────────────────────────────────┐
│  Visitor Browser                        │
│  ┌───────────────────────────────────┐  │
│  │ analytics.js                      │  │
│  │ Collects events → localStorage    │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
                   │
                   ↓
        ┌──────────────────────┐
        │ analytics.html       │
        │ Dashboard & Export   │
        └──────────────────────┘
                   │
        ┌──────────┴──────────┐
        ↓                     ↓
  Download JSON      GitHub Discussions
  (local file)       (opt-in sharing)
        │
        └──→ GitHub Artifacts (via workflow)
```

## 📊 Events Tracked

### page_view
```javascript
{
  name: 'page_view',
  data: {
    page: 'projects.html',            // or 'project.html?id=delivery-robot'
    referrer: 'direct',                // or referring URL
    timestamp: '2026-04-04T12:00:00Z'
  }
}
```

### project_click
```javascript
{
  name: 'project_click',
  data: {
    projectId: 'delivery-robot',
    fromPage: 'projects.html',
    timestamp: '2026-04-04T12:00:00Z'
  }
}
```

### search_query
```javascript
{
  name: 'search_query',
  data: {
    query: 'robotics',
    timestamp: '2026-04-04T12:00:00Z'
  }
}
```

### external_link_click
```javascript
{
  name: 'external_link_click',
  data: {
    url: 'https://github.com/...',
    text: 'GitHub Repository',
    timestamp: '2026-04-04T12:00:00Z'
  }
}
```

## 🔐 Privacy & Compliance

### What Is Tracked
- ✓ Page file names and query parameters
- ✓ Event timestamps
- ✓ Search query text
- ✓ Project IDs clicked
- ✓ Referrer URL

### What Is NOT Tracked
- ✗ IP addresses
- ✗ User agent / browser info
- ✗ Geolocation
- ✗ Service worker / fingerprinting
- ✗ Cookies or identifiers
- ✗ Device information
- ✗ Session IDs or tracking pixels

### Compliance Certifications
- ✅ **GDPR** — No personal data, anonymous only
- ✅ **GitHub ToS** — No policy violations
  - Static hosting only
  - No server-side backends
  - No API abuse
  - Client-side only
- ✅ **Privacy Laws** — Compliant with ePrivacy, CCPA
- ✅ **Cost** — Zero dollars

## 🚀 Getting Started

### For Visitors

1. **View Analytics**
   - Navigate to `/analytics.html` on the live portfolio
   - See your browser's tracked events

2. **Export Data**
   - Click "Export JSON" to download a local file
   - Data never leaves your computer unless you export it

3. **Share on GitHub**
   - Click "Share on GitHub"
   - Opens GitHub Discussions
   - Paste your summary to contribute aggregate insights

4. **Clear Data**
   - Click "Clear All Data" to remove everything
   - Auto-cleanup runs every 90 days

### For Developers

#### Enable Dev Mode (Local Testing)
```javascript
// Run in browser console
PortfolioAnalytics.enableDevMode();
```

#### Access Analytics API
```javascript
// Get all raw events
const events = PortfolioAnalytics.exportEvents();

// Get aggregated summary
const summary = PortfolioAnalytics.exportAggregated();
console.log(summary);
```

#### Manual Event Tracking
```javascript
// Track custom event
window.portfolioAnalytics.trackEvent('custom_event', {
  data: 'your data here'
});
```

## 📁 File Structure

```
Portfolio/
├── src/js/analytics.js              # Core tracker
├── analytics.html                   # Dashboard UI
├── .github/workflows/
│   └── analytics-export.yml         # Weekly export job
└── [all HTML pages]                 # Have analytics.js included
```

## 🔄 Weekly Export Workflow

**Runs:** Every Monday at 00:00 UTC (or trigger manually)

**Actions:**
1. Creates timestamped JSON file with analytics structure
2. Uploads to GitHub Artifacts (90-day retention)
3. Updates workflow summary with status

**To Trigger Manually:**
1. Go to GitHub Actions
2. Select "Analytics Data Export" workflow
3. Click "Run workflow"

**Access Exports:**
1. Go to the workflow run
2. Download "analytics-weekly-export-*" artifact
3. Extract and analyze

## 📝 Data Export Format

```json
{
  "exportMeta": {
    "exportDate": "2026-04-04T12:00:00Z",
    "exportedBy": "GitHub Actions Analytics Export"
  },
  "dataStructure": {
    "totalEvents": 145,
    "eventsByType": {
      "page_view": 102,
      "project_click": 28,
      "search_query": 12,
      "external_link_click": 3
    },
    "pageViewsByPage": {
      "index.html": 35,
      "projects.html": 45,
      "project.html?id=delivery-robot": 22
    },
    "projectClicksByProject": {
      "delivery-robot": 12,
      "sand-e": 8,
      "autonomous-navigation": 8
    },
    "searchQueries": {
      "robotics": 5,
      "web development": 4,
      "fpga": 3
    },
    "timeRange": {
      "start": "2026-04-01T08:30:00Z",
      "end": "2026-04-04T12:00:00Z"
    }
  }
}
```

## 🛠️ Troubleshooting

### Analytics Not Recording?

1. **Check localStorage is enabled**
   ```javascript
   try {
     localStorage.setItem('test', 'test');
     console.log('localStorage OK');
   } catch(e) {
     console.error('localStorage disabled or full');
   }
   ```

2. **Enable dev mode for local testing**
   ```javascript
   PortfolioAnalytics.enableDevMode();
   ```

3. **Check script is loaded**
   - Open DevTools → Sources
   - Look for `src/js/analytics.js`

4. **Verify events are recorded**
   ```javascript
   console.log(PortfolioAnalytics.exportEvents());
   ```

### Dashboard Shows No Data?

1. Navigate portfolio pages to generate events
2. Refresh analytics.html
3. Check browser console for errors
4. Ensure cookies/storage not blocked in browser settings

### Data Not Persisting?

- localStorage may be cleared on browser exit (privacy mode)
- Check browser settings: Privacy → Cookies & Site Data
- Try regular (non-private) browsing window

## 🔌 Integration Checklist

- [x] `src/js/analytics.js` — Created
- [x] Analytics script added to all HTML pages
- [x] `analytics.html` dashboard created
- [x] `.github/workflows/analytics-export.yml` — Created
- [x] Documentation — This file

## 📊 Analytics at a Glance

| Aspect | Details |
|--------|---------|
| **Type** | Client-side, privacy-first |
| **Storage** | Browser localStorage + GitHub Artifacts |
| **Cost** | $0 |
| **Dependencies** | None (vanilla JS) |
| **GDPR** | Compliant (anonymous) |
| **Performance Impact** | ~4KB, <1ms overhead |
| **Data Retention** | 90 days (auto-cleanup) |
| **Export Format** | JSON |

## 🆘 Support

For issues or questions:
1. Check the troubleshooting section above
2. Open a GitHub Discussion
3. Review analytics console logs: `PortfolioAnalytics.exportEvents()`

## 📄 License

This analytics system is part of your portfolio and follows the same license as the main project.

---

**Built with privacy-first principles.** No tracking, no servers, no cost. Just pure GitHub.
