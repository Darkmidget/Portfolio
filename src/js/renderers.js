/* Project Data Renderers */

/**
 * Render a single project card
 */
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

/**
 * Render Project Detail Page
 */
function renderProjectDetail() {
  const container = document.getElementById('project-detail');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');

  if (!projectId) {
    container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">${ICONS.code}</div><p>Project not found. <a href="projects.html">Browse all projects</a></p></div>`;
    return;
  }

  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) {
    container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">${ICONS.code}</div><p>Project "${projectId}" not found. <a href="projects.html">Browse all projects</a></p></div>`;
    return;
  }

  const statusClass = project.status.replace(/\s+/g, '-');
  const linksHtml = [];
  if (project.links.github) linksHtml.push(`<a href="${project.links.github}" target="_blank" class="btn btn-outline btn-sm">${ICONS.github} GitHub</a>`);
  if (project.links.demo) linksHtml.push(`<a href="${project.links.demo}" target="_blank" class="btn btn-primary btn-sm">${ICONS.link} Live Demo</a>`);
  if (project.links.other) linksHtml.push(`<a href="${project.links.other}" target="_blank" class="btn btn-outline btn-sm">${ICONS.link} Link</a>`);

  const tagsHtml = project.tags.map(t => `<span class="badge badge-tag">${t}</span>`).join('');
  const coverHtml = project.thumbnail ? `<img src="${project.thumbnail}" alt="${project.title}" class="project-detail-cover">` : '';

  document.title = `${project.title} | Vincent Ho`;

  container.innerHTML = `
    <div class="container">
      <div class="project-detail-header">
        <a href="projects.html" class="project-detail-back">${ICONS.back} Back to Projects</a>
        <h1 class="project-detail-title">${project.title}</h1>
        <div class="project-detail-meta">
          <span class="badge badge-status ${statusClass}"><span class="dot"></span>${project.status.replace('-', ' ')}</span>
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

if (typeof window !== 'undefined') {
  window.renderProjectCard = renderProjectCard;
  window.renderProjectDetail = renderProjectDetail;
}
