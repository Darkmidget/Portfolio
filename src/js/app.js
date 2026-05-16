/* ========================================
   Portfolio App - Core JavaScript
   Shared across all pages
   ======================================== */

// ─── Featured Projects (Homepage) ──────────
function renderFeaturedProjects() {
  const container = document.getElementById('featured-projects');
  if (!container) return;

  const featured = _sortByDateDesc(PORTFOLIO_DATA.projects.filter(p => p.featured));

  if (featured.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">${ICONS.code}</div>
        <p>No featured projects yet. Mark a project as <code>featured: true</code> in projects.js</p>
      </div>
    `;
    return;
  }

  container.innerHTML = featured.map(renderProjectCard).join('');
}

// ─── All Projects (Gallery Page) ───────────
function renderAllProjects() {
  const container = document.getElementById('all-projects');
  const searchInput = document.querySelector('.search-input');
  const filterContainer = document.getElementById('filter-pills');
  if (!container) return;

  const projects = _sortByDateDesc(PORTFOLIO_DATA.projects);

  // Build category filters
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  if (filterContainer) {
    filterContainer.innerHTML = categories.map((cat, i) =>
      `<button class="filter-pill ${i === 0 ? 'active' : ''}" data-category="${cat}">${cat}</button>`
    ).join('');

    filterContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-pill')) {
        filterContainer.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');
        applyFilters();
      }
    });
  }

  // Search
  if (searchInput) {
    searchInput.addEventListener('input', debounce(applyFilters, 200));
  }

  function applyFilters() {
    const query = (searchInput?.value || '').toLowerCase().trim();
    const activeCat = filterContainer?.querySelector('.filter-pill.active')?.dataset.category || 'All';

    const filtered = projects.filter(p => {
      const matchesCat = activeCat === 'All' || p.category === activeCat;
      const matchesSearch = !query ||
        p.title.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query)) ||
        p.category.toLowerCase().includes(query);
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1">
          <div class="empty-state-icon">${ICONS.search}</div>
          <p>No projects match your search. Try different keywords or filters.</p>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(renderProjectCard).join('');
    }
  }

  applyFilters();
}

// ─── Skills Grid (Homepage) ────────────────
function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  const skills = PORTFOLIO_DATA.skills;
  const groups = {};

  skills.forEach(s => {
    if (!groups[s.category]) groups[s.category] = [];
    groups[s.category].push(s.name);
  });

  container.innerHTML = Object.entries(groups).map(([category, items]) => `
    <div class="skill-group">
      <div class="skill-group-title">${category}</div>
      <div class="skill-list">
        ${items.map(item => `<span class="skill-item">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ─── Stats (Homepage) ─────────────────────
function renderStats() {
  const container = document.getElementById('stats-row');
  if (!container) return;

  const projects = PORTFOLIO_DATA.projects;
  const completed = projects.filter(p => p.status === 'completed').length;
  const inProgress = projects.filter(p => p.status === 'in-progress').length;
  const totalSkills = PORTFOLIO_DATA.skills.length;

  container.innerHTML = `
    <div class="stat-item">
      <span class="stat-value">${projects.length}</span>
      <span class="stat-label">Projects</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">${completed}</span>
      <span class="stat-label">Completed</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">${inProgress}</span>
      <span class="stat-label">In Progress</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">${totalSkills}</span>
      <span class="stat-label">Technologies</span>
    </div>
  `;
}

// ─── Contact Page ─────────────────────────
function renderContactInfo() {
  const container = document.getElementById('contact-grid');
  if (!container) return;

  const d = PORTFOLIO_DATA.profile;
  const cards = [];

  if (d.links.email) {
    cards.push(`
      <a href="mailto:${d.links.email}" class="contact-card">
        <div class="contact-card-icon">${ICONS.email}</div>
        <div class="contact-card-info">
          <h3>Email</h3>
          <p>${d.links.email}</p>
        </div>
      </a>
    `);
  }

  if (d.links.github) {
    cards.push(`
      <a href="${d.links.github}" target="_blank" rel="noopener" class="contact-card">
        <div class="contact-card-icon">${ICONS.github}</div>
        <div class="contact-card-info">
          <h3>GitHub</h3>
          <p>${d.links.github.replace('https://github.com/', '@')}</p>
        </div>
      </a>
    `);
  }

  if (d.links.linkedin) {
    cards.push(`
      <a href="${d.links.linkedin}" target="_blank" rel="noopener" class="contact-card">
        <div class="contact-card-icon">${ICONS.linkedin}</div>
        <div class="contact-card-info">
          <h3>LinkedIn</h3>
          <p>${d.links.linkedin.replace('https://linkedin.com/in/', '@')}</p>
        </div>
      </a>
    `);
  }

  container.innerHTML = cards.join('');
}

// ─── Init ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
});

if (typeof window !== 'undefined') {
  window.renderFeaturedProjects = renderFeaturedProjects;
  window.renderAllProjects = renderAllProjects;
  window.renderSkills = renderSkills;
  window.renderStats = renderStats;
  window.renderContactInfo = renderContactInfo;
}
