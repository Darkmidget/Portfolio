const fs = require('fs');
const path = require('path');

const projectsDir = 'src/data/projects';
const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.js') && f !== 'loader.js');

files.forEach(file => {
    const content = fs.readFileSync(path.join(projectsDir, file), 'utf8');
    const match = content.match(/contentFile:\s*"([^"]+)"/);
    if (match) {
        const contentPath = match[1];
        if (!fs.existsSync(contentPath)) {
            console.error(`[ERROR] ${file}: contentFile "${contentPath}" does not exist.`);
        } else {
            console.log(`[OK] ${file}: contentFile exists.`);
        }
    } else if (content.includes('content:')) {
        console.warn(`[WARN] ${file}: still has inline content.`);
    } else {
        console.warn(`[WARN] ${file}: No contentFile or inline content found.`);
    }
});
