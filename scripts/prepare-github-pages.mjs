import { copyFile, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const candidates = [
  resolve('dist/app-eldronenlasopa-web/browser'),
  resolve('dist/app-eldronenlasopa-web'),
];

let outputDir;
for (const candidate of candidates) {
  try {
    await readFile(resolve(candidate, 'index.html'));
    outputDir = candidate;
    break;
  } catch {
    // Try the next Angular output layout.
  }
}

if (!outputDir) throw new Error('No se encontró el index.html compilado de Angular.');

const indexPath = resolve(outputDir, 'index.html');
const buildId = new Date().toISOString();
const index = await readFile(indexPath, 'utf8');
const withBuildId = index.replace('</head>', `  <meta name="build-id" content="${buildId}">\n</head>`);

await writeFile(indexPath, withBuildId);
await copyFile(indexPath, resolve(outputDir, '404.html'));
await writeFile(resolve(outputDir, '.nojekyll'), '');

console.log(`GitHub Pages preparado: ${outputDir} (${buildId})`);
