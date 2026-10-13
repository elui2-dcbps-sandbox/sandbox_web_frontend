import { mkdir, writeFile } from 'node:fs/promises';
import { titleFromXml } from './src/index.js';

await mkdir('dist', { recursive: true });
const title = titleFromXml('<page><title>Synthetic sandbox</title></page>');
await writeFile('dist/index.html', `<!doctype html><title>${title}</title><h1>${title}</h1>\n`);
