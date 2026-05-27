/**
 * Pre-render script: runs after `vite build` to inject server-rendered HTML
 * into the static index.html so that scrapers/crawlers see real content.
 *
 * Usage (automated via the "build" npm script):
 *   node prerender.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');

// Import the SSR bundle produced by `vite build --ssr`
const { render } = await import('./dist-ssr/entry-server.mjs');

const routesToPrerender = ['/'];

for (const url of routesToPrerender) {
  const { html: appHtml } = render(url);
  const finalHtml = template.replace('<!--app-html-->', appHtml);

  const outPath = toAbsolute(`dist${url === '/' ? '/index' : url}.html`);
  fs.writeFileSync(outPath, finalHtml);
  console.log('Pre-rendered:', outPath);
}

console.log('Pre-rendering complete.');
