/* ========================================
   Portfolio Analytics - Privacy-First
   Client-side tracking with GitHub Actions export
   ======================================== */

class PortfolioAnalytics {
  constructor() {
    this.STORAGE_KEY = 'portfolio_analytics_events';
    this.MAX_EVENTS = 1000; // Limit to prevent localStorage bloat
    this.init();
  }

  init() {
    // Don't track in development/local
    if (!this.isValidEnvironment()) return;

    // Track page view
    this.trackEvent('page_view', {
      page: this.getCurrentPage(),
      referrer: document.referrer || 'direct',
      timestamp: new Date().toISOString(),
    });

    // Track project clicks
    this.setupProjectTracking();
    
    // Track search/filter interactions
    this.setupSearchTracking();

    // Periodically cleanup old data
    this.setupCleanup();
  }

  isValidEnvironment() {
    // Only track on deployed site (github.io domains)
    const isDeploy = window.location.hostname.includes('github.io') || 
                     window.location.hostname === 'localhost' === false;
    return isDeploy || this.isDev();
  }

  isDev() {
    return localStorage.getItem('portfolio_analytics_dev') === 'true';
  }

  getCurrentPage() {
    const pathname = window.location.pathname;
    const filename = pathname.split('/').pop() || 'index.html';
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    
    return projectId ? `${filename}?id=${projectId}` : filename;
  }

  trackEvent(eventName, data = {}) {
    try {
      const events = this.getEvents();
      
      const event = {
        id: this.generateId(),
        name: eventName,
        data: data,
        timestamp: new Date().toISOString(),
      };

      events.push(event);

      // Keep only recent events
      if (events.length > this.MAX_EVENTS) {
        events.splice(0, events.length - this.MAX_EVENTS);
      }

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(events));
    } catch (e) {
      console.warn('[Analytics] Storage full or disabled:', e.message);
    }
  }

  getEvents() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn('[Analytics] Could not read events:', e.message);
      return [];
    }
  }

  setupProjectTracking() {
    // Track clicks on project cards
    document.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card');
      if (card) {
        const href = card.getAttribute('href');
        const projectId = new URLSearchParams(href.split('?')[1]).get('id');
        if (projectId) {
          this.trackEvent('project_click', {
            projectId: projectId,
            fromPage: this.getCurrentPage(),
          });
        }
      }

      // Track external links
      const externalLink = e.target.closest('a[target="_blank"]');
      if (externalLink) {
        const href = externalLink.getAttribute('href');
        this.trackEvent('external_link_click', {
          url: href,
          text: externalLink.textContent.trim().substring(0, 50),
        });
      }
    });
  }

  setupSearchTracking() {
    // Track search/filter interactions
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      let searchTimeout;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          if (e.target.value.trim()) {
            this.trackEvent('search_query', {
              query: e.target.value.trim().substring(0, 100),
            });
          }
        }, 500); // Debounce
      });
    }

    // Track category filters
    document.addEventListener('change', (e) => {
      if (e.target.name === 'category-filter') {
        this.trackEvent('filter_category', {
          category: e.target.value,
        });
      }
    });
  }

  setupCleanup() {
    // Weekly cleanup: keep only events from last 90 days
    const lastCleanup = localStorage.getItem('portfolio_analytics_cleanup');
    const now = new Date().getTime();
    const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

    if (!lastCleanup || now - parseInt(lastCleanup) > WEEK_MS) {
      this.cleanupOldEvents();
      localStorage.setItem('portfolio_analytics_cleanup', now.toString());
    }
  }

  cleanupOldEvents() {
    const events = this.getEvents();
    const ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

    const filtered = events.filter((e) => new Date(e.timestamp) > ninetyDaysAgo);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filtered));
  }

  generateId() {
    return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // ─── Data Export (for GitHub Actions) ───
  static exportEvents() {
    try {
      const stored = localStorage.getItem('portfolio_analytics_events');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('[Analytics] Export failed:', e);
      return [];
    }
  }

  static exportAggregated() {
    const events = this.exportEvents();
    
    const aggregated = {
      exportDate: new Date().toISOString(),
      totalEvents: events.length,
      eventsByType: {},
      pageViewsByPage: {},
      projectClicksByProject: {},
      searchQueries: [],
      timeRange: {
        start: events.length > 0 ? events[0].timestamp : null,
        end: events.length > 0 ? events[events.length - 1].timestamp : null,
      },
    };

    events.forEach((e) => {
      // Count by type
      aggregated.eventsByType[e.name] = (aggregated.eventsByType[e.name] || 0) + 1;

      // Page views
      if (e.name === 'page_view') {
        const page = e.data.page;
        aggregated.pageViewsByPage[page] = (aggregated.pageViewsByPage[page] || 0) + 1;
      }

      // Project clicks
      if (e.name === 'project_click') {
        const projectId = e.data.projectId;
        aggregated.projectClicksByProject[projectId] = (aggregated.projectClicksByProject[projectId] || 0) + 1;
      }

      // Search queries
      if (e.name === 'search_query') {
        aggregated.searchQueries.push(e.data.query);
      }
    });

    // Deduplicate and count search queries
    const queryCount = {};
    aggregated.searchQueries.forEach((q) => {
      queryCount[q] = (queryCount[q] || 0) + 1;
    });
    aggregated.searchQueries = queryCount;

    return aggregated;
  }

  // Enable dev mode for local testing
  static enableDevMode() {
    localStorage.setItem('portfolio_analytics_dev', 'true');
    console.log('[Analytics] Dev mode enabled. Events will be tracked locally.');
  }

  static disableDevMode() {
    localStorage.removeItem('portfolio_analytics_dev');
    console.log('[Analytics] Dev mode disabled.');
  }
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.portfolioAnalytics = new PortfolioAnalytics();
  });
} else {
  window.portfolioAnalytics = new PortfolioAnalytics();
}
