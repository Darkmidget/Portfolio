const fs = require('fs');
const path = require('path');
const vm = require('vm');

global.window = global;

function runFile(p) {
  const code = fs.readFileSync(p, 'utf8');
  try {
    vm.runInThisContext(code, { filename: p });
    console.log('Loaded', path.basename(p));
  } catch (e) {
    console.error('Error loading', path.basename(p), e);
  }
}

(async function(){
  const base = path.join(__dirname, '..', 'src', 'data', 'projects');
  let files = null;
  try {
    const manifest = fs.readFileSync(path.join(base, 'manifest.json'), 'utf8');
    const m = JSON.parse(manifest);
    if (Array.isArray(m.projects)) files = m.projects;
    console.log('Using manifest.json');
  } catch (e) {
    console.warn('No manifest.json or parse error, falling back');
  }
  if (!files) files = ['delivery-robot.js','portfolio-website.js','trading-search.js','firefighter-display.js'];

  for (const f of files) {
    runFile(path.join(base, f));
  }

  // load projects.js
  runFile(path.join(__dirname, '..', 'src', 'data', 'projects.js'));

  // Inspect global PROJECT_ keys
  const projectKeys = Object.keys(global).filter(k => k.indexOf('PROJECT_') === 0);
  console.log('PROJECT_ globals found:', projectKeys);
  for (const k of projectKeys) {
    const p = global[k];
    console.log('-', k, '-> id=', p && p.id);
  }

  // Inspect PORTFOLIO_DATA
  if (typeof global.PORTFOLIO_DATA !== 'undefined') {
    const pd = global.PORTFOLIO_DATA;
    console.log('PORTFOLIO_DATA.projects count =', pd.projects.length);
    pd.projects.forEach((p,i) => console.log(i, p.id));
  } else {
    console.warn('PORTFOLIO_DATA not defined');
  }
})();
