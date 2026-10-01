import http from 'node:http';
import { readFile } from 'node:fs/promises';
const assets = new Map([['/', 'index.html'], ['/index.html', 'index.html'], ['/styles.css', 'styles.css'], ['/script.js', 'script.js'], ...['ar-condicionado-gree', 'tubulacao-incendio', 'regulador-gas', 'hidrante', 'coifa-ilustrativa', 'fogao-ilustrativo', 'exaustor-ilustrativo'].map(name => [`/images/${name}.jpg`, `images/${name}.jpg`])]);
assets.set('/images/lucas-logomarca-topicos.png', 'images/lucas-logomarca-topicos.png');
const types = { html: 'text/html; charset=utf-8', css: 'text/css; charset=utf-8', js: 'application/javascript; charset=utf-8', jpg: 'image/jpeg', png: 'image/png' };
http.createServer(async (request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname;
  const file = assets.get(pathname);
  if (!file) { response.writeHead(404); response.end('Not found'); return; }
  try { const data = await readFile(new URL(`./${file}`, import.meta.url)); response.writeHead(200, { 'Content-Type': types[file.split('.').pop()] }); response.end(data); }
  catch { response.writeHead(500); response.end('Unable to serve page'); }
}).listen(Number(process.env.PORT || 4187), '127.0.0.1', () => console.log('Local: http://127.0.0.1:' + (process.env.PORT || 4187)));
