/* ========================================
   Portfolio App - Core JavaScript
   Shared across all pages
   ======================================== */

// ─── SVG Icons ─────────────────────────────
const ICONS = {
  github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
  email: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>',
  link: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764c.966 0 1.75.79 1.75 1.764s-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.025-3.059-1.865-3.059-1.867 0-2.153 1.459-2.153 2.967v5.696h-3v-10h2.879v1.367h.041c.401-.758 1.379-1.556 2.838-1.556 3.036 0 3.6 1.999 3.6 4.593v5.596z"/></svg>',
  arrow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  back: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  menu: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  close: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  calendar: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  folder: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>',
  code: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  copy: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>',
  upload: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
  search: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
};

// ─── Navbar Component ──────────────────────
function renderNavbar(activePage) {
  const nav = document.getElementById('navbar-container');
  if (!nav) return;

  const pages = [
    { href: 'index.html', label: 'Home', id: 'home' },
    { href: 'projects.html', label: 'Projects', id: 'projects' },
    { href: 'contact.html', label: 'Contact', id: 'contact' },
    { href: 'editor.html', label: 'Editor', id: 'editor' },
  ];

  const linksHtml = pages.map(p =>
    `<a href="${p.href}" class="${p.id === activePage ? 'active' : ''}">${p.label}</a>`
  ).join('');

  nav.innerHTML = `
    <nav class="navbar" id="main-navbar">
      <div class="navbar-inner">
        <a href="index.html" class="navbar-brand">V<span>.</span>Ho</a>
        <div class="navbar-links" id="navbar-links">
          ${linksHtml}
        </div>
        <button class="navbar-toggle" id="navbar-toggle" aria-label="Menu">
          ${ICONS.menu}
        </button>
      </div>
    </nav>
  `;

  // Mobile toggle
  const toggle = document.getElementById('navbar-toggle');
  const links = document.getElementById('navbar-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.innerHTML = isOpen ? ICONS.close : ICONS.menu;
    });
  }

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('main-navbar');
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(9, 9, 11, 0.95)';
    } else {
      navbar.style.background = 'rgba(9, 9, 11, 0.8)';
    }
    lastScroll = window.scrollY;
  });
}

// ─── Footer Component ──────────────────────
function renderFooter() {
  const footer = document.getElementById('footer-container');
  if (!footer) return;

  const d = PORTFOLIO_DATA.profile;
  const year = new Date().getFullYear();

  footer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-links">
          ${d.links.github ? `<a href="${d.links.github}" target="_blank" rel="noopener">${ICONS.github} GitHub</a>` : ''}
          ${d.links.linkedin ? `<a href="${d.links.linkedin}" target="_blank" rel="noopener">${ICONS.linkedin} LinkedIn</a>` : ''}
          ${d.links.email ? `<a href="mailto:${d.links.email}">${ICONS.email} Email</a>` : ''}
        </div>
        <p>&copy; ${year} ${d.name}. Built with vanilla HTML, CSS & JS.</p>
      </div>
    </footer>
  `;
}

// ─── Markdown Parser ───────────────────────
function parseMarkdown(md) {
  if (!md) return '';
  let html = md;

  // Normalize line endings
  html = html.replace(/\r\n/g, '\n');

  // Code blocks (``` ... ```)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const escaped = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<pre><code class="lang-${lang}">${escaped}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`\n]+)`/g, '<code>$1</code>');

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy">');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');

  // Headers (must come before bold processing)
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

  // Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Strikethrough
  html = html.replace(/~~([^~]+)~~/g, '<del>$1</del>');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr>');

  // Build blocks
  const lines = html.split('\n');
  const blocks = [];
  let currentBlock = [];
  let inList = false;
  let inPre = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Track pre blocks
    if (line.startsWith('<pre>')) inPre = true;
    if (line.includes('</pre>')) { inPre = false; currentBlock.push(line); continue; }
    if (inPre) { currentBlock.push(line); continue; }

    // Check if line is a list item
    const listMatch = line.match(/^[-*] (.+)$/);

    if (listMatch) {
      if (!inList) {
        // Flush current block
        if (currentBlock.length > 0) {
          blocks.push(currentBlock.join('\n'));
          currentBlock = [];
        }
        inList = true;
      }
      currentBlock.push(`<li>${listMatch[1]}</li>`);
    } else {
      if (inList) {
        blocks.push('<ul>' + currentBlock.join('\n') + '</ul>');
        currentBlock = [];
        inList = false;
      }

      // Check for numbered list
      const numMatch = line.match(/^\d+\. (.+)$/);
      if (numMatch) {
        // Simple handling: wrap individual
        currentBlock.push(`<li>${numMatch[1]}</li>`);
        // Peek: is next line also numbered?
        if (i + 1 >= lines.length || !lines[i + 1].match(/^\d+\. /)) {
          blocks.push('<ol>' + currentBlock.join('\n') + '</ol>');
          currentBlock = [];
        }
        continue;
      }

      if (line.trim() === '') {
        if (currentBlock.length > 0) {
          blocks.push(currentBlock.join('\n'));
          currentBlock = [];
        }
      } else {
        currentBlock.push(line);
      }
    }
  }

  // Flush remaining
  if (inList && currentBlock.length > 0) {
    blocks.push('<ul>' + currentBlock.join('\n') + '</ul>');
  } else if (currentBlock.length > 0) {
    blocks.push(currentBlock.join('\n'));
  }

  // Wrap non-tagged blocks in <p>
  html = blocks.map(block => {
    block = block.trim();
    if (!block) return '';
    // Don't wrap blocks that start with HTML tags
    if (/^<(h[1-6]|ul|ol|li|pre|blockquote|hr|img|div|table)/.test(block)) return block;
    return `<p>${block.replace(/\n/g, '<br>')}</p>`;
  }).join('\n');

  // Clean up adjacent blockquotes
  html = html.replace(/<\/blockquote>\n<blockquote>/g, '<br>');

  return html;
}

// ─── Project Card Renderer ─────────────────
function renderProjectCard(project) {
  const statusClass = project.status.replace(/\s+/g, '-');

  const thumbnailHtml = project.thumbnail
    ? `<img src="${project.thumbnail}" alt="${project.title}" loading="lazy">`
    : `<div class="placeholder-icon">${ICONS.code}</div>`;

  const tagsHtml = project.tags.slice(0, 3).map(tag =>
    `<span class="badge badge-tag">${tag}</span>`
  ).join('');

  return `
    <a href="project.html?id=${project.id}" class="project-card">
      <div class="project-card-thumb">${thumbnailHtml}</div>
      <div class="project-card-body">
        <div class="project-card-header">
          <h3 class="project-card-title">${project.title}</h3>
          <span class="badge badge-status ${statusClass}">
            <span class="dot"></span>
            ${project.status.replace('-', ' ')}
          </span>
        </div>
        <p class="project-card-summary">${project.summary}</p>
        <div class="project-card-footer">
          <div class="project-card-tags">${tagsHtml}</div>
          <span class="text-muted" style="font-size:0.8rem;">${project.date}</span>
        </div>
      </div>
    </a>
  `;
}

// ─── Featured Projects (Homepage) ──────────
function renderFeaturedProjects() {
  const container = document.getElementById('featured-projects');
  if (!container) return;

  const featured = PORTFOLIO_DATA.projects.filter(p => p.featured);

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

  const projects = PORTFOLIO_DATA.projects;

  // Debug: log loaded project ids to help diagnose missing entries
  try {
    console.groupCollapsed('PORTFOLIO_DATA.projects');
    projects.forEach(p => console.log(p.id, 'featured=', !!p.featured));
    console.groupEnd();
  } catch (e) {
    console.warn('Could not enumerate PORTFOLIO_DATA.projects', e);
  }

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

// ─── Project Detail (Detail Page) ──────────
function renderProjectDetail() {
  const container = document.getElementById('project-detail');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');

  if (!projectId) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">${ICONS.code}</div>
        <p>Project not found. <a href="projects.html">Browse all projects</a></p>
      </div>
    `;
    return;
  }

  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);

  if (!project) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">${ICONS.code}</div>
        <p>Project "${projectId}" not found. <a href="projects.html">Browse all projects</a></p>
      </div>
    `;
    return;
  }

  const statusClass = project.status.replace(/\s+/g, '-');

  const linksHtml = [];
  if (project.links.github) {
    linksHtml.push(`<a href="${project.links.github}" target="_blank" class="btn btn-outline btn-sm">${ICONS.github} GitHub</a>`);
  }
  if (project.links.demo) {
    linksHtml.push(`<a href="${project.links.demo}" target="_blank" class="btn btn-primary btn-sm">${ICONS.link} Live Demo</a>`);
  }
  if (project.links.other) {
    linksHtml.push(`<a href="${project.links.other}" target="_blank" class="btn btn-outline btn-sm">${ICONS.link} Link</a>`);
  }

  const tagsHtml = project.tags.map(t =>
    `<span class="badge badge-tag">${t}</span>`
  ).join('');

  const coverHtml = project.thumbnail
    ? `<img src="${project.thumbnail}" alt="${project.title}" class="project-detail-cover">`
    : '';

  // Update page title
  document.title = `${project.title} | Vincent Ho`;

  container.innerHTML = `
    <div class="container">
      <div class="project-detail-header">
        <a href="projects.html" class="project-detail-back">${ICONS.back} Back to Projects</a>
        <h1 class="project-detail-title">${project.title}</h1>
        <div class="project-detail-meta">
          <span class="badge badge-status ${statusClass}">
            <span class="dot"></span>
            ${project.status.replace('-', ' ')}
          </span>
          <span class="project-detail-meta-item">${ICONS.calendar} ${project.date}</span>
          <span class="project-detail-meta-item">${ICONS.folder} ${project.category}</span>
        </div>
        <div class="project-detail-tags">${tagsHtml}</div>
        ${linksHtml.length > 0 ? `<div class="project-detail-links">${linksHtml.join('')}</div>` : ''}
      </div>
      ${coverHtml}
      <div class="markdown-content">
        ${parseMarkdown(project.content)}
      </div>
    </div>
  `;
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

// ─── Scroll Animations ────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ─── Toast Notification ───────────────────
function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

// ─── Copy to Clipboard ───────────────────
function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast('Copied to clipboard!'));
  } else {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Copied to clipboard!');
  }
}

// ─── Utilities ────────────────────────────
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// ─── Init ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
});
