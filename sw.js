/* Cammino Sonoro di Linz: funziona anche senza internet.
   I file scaricati con il bottone "Scarica la guida" stanno nella cache "linz-guida".
   Pagine e dati: prima la rete (con 4 secondi di pazienza), poi la copia salvata.
   Audio e foto: prima la copia salvata. Gli audio rispondono anche alle richieste
   "a pezzi" (Range) che Safari usa per i file audio. */
const CACHE = 'linz-guida';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

const isMedia = url => /\.(mp3|jpg|jpeg|png|svg|webp)$/i.test(url.pathname);

async function fromCache(req) {
  const c = await caches.open(CACHE);
  return (await c.match(req)) || (await c.match(req, { ignoreSearch: true }));
}

async function rangeResponse(req, res) {
  const m = /bytes=(\d*)-(\d*)/.exec(req.headers.get('range') || '');
  if (!m) return res;
  const buf = await res.arrayBuffer();
  const size = buf.byteLength;
  let start = m[1] === '' ? size - Number(m[2]) : Number(m[1]);
  let end = m[1] !== '' && m[2] !== '' ? Number(m[2]) : size - 1;
  start = Math.max(0, start); end = Math.min(size - 1, end);
  return new Response(buf.slice(start, end + 1), {
    status: 206, statusText: 'Partial Content',
    headers: {
      'Content-Type': res.headers.get('Content-Type') || 'audio/mpeg',
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Content-Length': String(end - start + 1),
      'Accept-Ranges': 'bytes'
    }
  });
}

function timeout(ms) { return new Promise((_, rej) => setTimeout(() => rej(new Error('lenta')), ms)); }

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  if (isMedia(url)) {
    e.respondWith((async () => {
      const hit = await fromCache(new Request(url.href));
      if (hit) return req.headers.has('range') ? rangeResponse(req, hit.clone()) : hit;
      return fetch(req);
    })());
    return;
  }
  e.respondWith((async () => {
    try {
      const res = await Promise.race([fetch(req), timeout(4000)]);
      if (res && res.ok) { const c = await caches.open(CACHE); if (await c.match(req, { ignoreSearch: true })) c.put(req, res.clone()); }
      return res;
    } catch (err) {
      const hit = await fromCache(req);
      if (hit) return hit;
      throw err;
    }
  })());
});
