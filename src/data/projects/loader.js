/* Projects Loader
   - Keeps a single list of project filenames to load
   - Loads: project files -> projects.js -> app.js
   - Calls `window.__onProjectsLoaded()` when finished (if defined)

   To add a new project file, add its filename to the `PROJECT_FILES` array below.
*/
(function(){
  const BASE = 'src/data/projects/';
  let PROJECT_FILES = null;

  // Use standard browser caching for production, but bypass cache on localhost or via '?nocache' URL param
  const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const useCache = !isDev && !window.location.search.includes('nocache');
  const cacheBuster = Date.now();

  function loadScript(src){
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src + (useCache ? '' : '?v=' + cacheBuster);
      s.async = false;
      s.onload = () => resolve(src);
      s.onerror = () => reject(new Error('Failed to load ' + src));
      document.head.appendChild(s);
    });
  }

  async function loadAll(){
    // Try to load manifest.json; fall back to the hard-coded list if fetch fails
    try {
      const res = await fetch(BASE + 'manifest.json' + (useCache ? '' : '?v=' + cacheBuster));
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.projects)) PROJECT_FILES = data.projects;
      }
    } catch (e) {
      console.warn('Could not load manifest.json, falling back to embedded list');
    }

    if (!PROJECT_FILES) {
      PROJECT_FILES = [
        'delivery-robot.js',
        'portfolio-website.js',
        'trading-search.js',
        'firefighter-display.js'
      ];
    }

    // 1. Load all project spec files in parallel
    await Promise.all(PROJECT_FILES.map(f => loadScript(BASE + f)));

    // 2. Load all core modules & app entry point in parallel
    // Because they all have s.async = false, the browser downloads them in parallel
    // but executes them in the exact order they are appended.
    const coreScripts = [
      'src/data/projects.js',
      'src/js/icons.js',
      'src/js/utils.js',
      'src/js/parser.js',
      'src/js/components.js',
      'src/js/renderers.js',
      'src/js/app.js'
    ];
    await Promise.all(coreScripts.map(src => loadScript(src)));

    if (typeof window.__onProjectsLoaded === 'function') {
      try { window.__onProjectsLoaded(); } catch (e) { console.error(e); }
    } else {
      // dispatch an event if no callback provided
      window.dispatchEvent(new Event('projects-ready'));
    }
  }

  loadAll().catch(e => console.error('projects-loader error:', e));
})();
