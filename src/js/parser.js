/* Markdown Parser Logic */

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
        currentBlock.push(`<li>${numMatch[1]}</li>`);
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
    if (/^<(h[1-6]|ul|ol|li|pre|blockquote|hr|img|div|table|video)/.test(block)) return block;
    return `<p>${block.replace(/\n/g, '<br>')}</p>`;
  }).join('\n');

  // Clean up adjacent blockquotes
  html = html.replace(/<\/blockquote>\n<blockquote>/g, '<br>');

  return html;
}

if (typeof window !== 'undefined') window.parseMarkdown = parseMarkdown;
