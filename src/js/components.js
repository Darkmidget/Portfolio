/* Shared UI Components */

/**
 * Render Top Navbar
 */
function renderNavbar(activePage) {
  const nav = document.getElementById('navbar-container');
  if (!nav) return;

  const pages = [
    { href: 'index.html', label: 'Home', id: 'home' },
    { href: 'projects.html', label: 'Projects', id: 'projects' },
    { href: 'contact.html', label: 'Contact', id: 'contact' },
    { href: 'editor.html', label: 'Editor', id: 'editor' },
    { href: 'analytics.html', label: 'Analytics', id: 'analytics' },
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

  const toggle = document.getElementById('navbar-toggle');
  const links = document.getElementById('navbar-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.innerHTML = isOpen ? ICONS.close : ICONS.menu;
    });
  }

  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('main-navbar');
    if (!navbar) return;
    navbar.style.background = window.scrollY > 50 ? 'rgba(9, 9, 11, 0.95)' : 'rgba(9, 9, 11, 0.8)';
  });
}

/**
 * Render Global Footer
 */
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

/**
 * Show Toast Notification
 */
function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

/**
 * Initialize Intersection Observer for fade-in elements
 */
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

if (typeof window !== 'undefined') {
  window.renderNavbar = renderNavbar;
  window.renderFooter = renderFooter;
  window.showToast = showToast;
  window.initScrollAnimations = initScrollAnimations;
}
