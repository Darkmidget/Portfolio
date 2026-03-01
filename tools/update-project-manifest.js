#!/usr/bin/env node
// Simple helper to add a project filename to manifest.json (idempotent)
// Usage: node tools/update-project-manifest.js firefighter-display.js

const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '..', 'src', 'data', 'projects', 'manifest.json');
const arg = process.argv[2];
if (!arg) {
  console.error('Usage: node tools/update-project-manifest.js <filename.js>');
  process.exit(1);
}

try {
  const raw = fs.readFileSync(manifestPath, 'utf8');
  const data = JSON.parse(raw);
  data.projects = data.projects || [];
  if (!data.projects.includes(arg)) {
    data.projects.push(arg);
    fs.writeFileSync(manifestPath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log('Added', arg, 'to manifest');
  } else {
    console.log(arg, 'already in manifest');
  }
} catch (e) {
  console.error('Error updating manifest:', e.message);
  process.exit(1);
}
