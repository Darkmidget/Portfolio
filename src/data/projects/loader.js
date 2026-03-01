/* Projects Loader
   - Keeps a single list of project filenames to load
   - Loads: project files -> projects.js -> app.js
   - Calls `window.__onProjectsLoaded()` when finished (if defined)

   To add a new project file, add its filename to the `PROJECT_FILES` array below.
*/
(function(){
  const BASE = 'src/data/projects/';
  let PROJECT_FILES = null;

  function loadScript(src){
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = () => resolve(src);
      s.onerror = () => reject(new Error('Failed to load ' + src));
      document.head.appendChild(s);
    });
  }

  async function loadAll(){
    // Try to load manifest.json; fall back to the hard-coded list if fetch fails
    try {
      const res = await fetch(BASE + 'manifest.json');
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

    for(const f of PROJECT_FILES){
      await loadScript(BASE + f);
    }

    await loadScript('src/data/projects.js');
    await loadScript('src/js/app.js');

    if (typeof window.__onProjectsLoaded === 'function') {
      try { window.__onProjectsLoaded(); } catch (e) { console.error(e); }
    } else {
      // dispatch an event if no callback provided
      window.dispatchEvent(new Event('projects-ready'));
    }
  }

  loadAll().catch(e => console.error('projects-loader error:', e));
})();
