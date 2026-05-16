/* Utility Functions */

/**
 * Debounce function to limit execution rate
 */
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Extract numeric date value for sorting
 */
function _projectDateValue(p) {
  if (!p) return 0;
  const d = p.date;
  if (!d) return 0;
  if (typeof d === 'number') return d;
  if (typeof d === 'string') {
    const yearMatch = d.match(/(\d{4})/);
    if (yearMatch) return parseInt(yearMatch[1], 10);
    const ts = Date.parse(d);
    if (!isNaN(ts)) return ts;
  }
  return 0;
}

/**
 * Sort list by date descending
 */
function _sortByDateDesc(list) {
  return (list || []).slice().sort((a, b) => {
    const va = _projectDateValue(a);
    const vb = _projectDateValue(b);
    return vb - va;
  });
}

/**
 * Copy text to clipboard with toast feedback
 */
function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast('Copied to clipboard!'));
  } else {
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

if (typeof window !== 'undefined') {
  window.debounce = debounce;
  window._projectDateValue = _projectDateValue;
  window._sortByDateDesc = _sortByDateDesc;
  window.copyToClipboard = copyToClipboard;
}
