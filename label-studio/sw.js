// Label Studio – Offline-Speicher für die installierte App (und den Browser).
// Die App selbst kommt immer frisch aus dem Netz, solange eins da ist (Updates sind sofort da);
// ohne Netz wird die zuletzt geladene Version benutzt. Bibliotheken und Schriften haben feste
// Versionen in der Adresse und werden darum einmal gespeichert und danach aus dem Speicher genommen.
const CACHE = 'labelstudio-v1';
const CORE = [
  './', 'manifest.webmanifest', 'icon.svg', 'icon-192.png', 'icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jsbarcode/3.11.6/JsBarcode.all.min.js'
];
const LIB_HOSTS = ['cdnjs.cloudflare.com', 'cdn.jsdelivr.net', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', ev => {
  // einzeln speichern: fehlt eine Datei (z. B. kein Netz zu cdnjs), klappt der Rest trotzdem
  ev.waitUntil(caches.open(CACHE).then(c => Promise.all(CORE.map(u => c.add(u).catch(() => {}))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', ev => {
  ev.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('labelstudio-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', ev => {
  const req = ev.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (LIB_HOSTS.includes(url.hostname)) { ev.respondWith(cacheFirst(req)); return; }
  if (url.origin === location.origin) ev.respondWith(networkFirst(req));
});

async function cacheFirst(req){
  const hit = await caches.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok || res.type === 'opaque') (await caches.open(CACHE)).put(req, res.clone());
  return res;
}
async function networkFirst(req){
  const cache = await caches.open(CACHE);
  try {
    const res = await fetch(req);
    // der #-Teil (geteilte Etiketten) gehört nicht zur Adresse; Seiten ohne ?-Teil speichern
    if (res.ok) cache.put(req.mode === 'navigate' ? new URL(req.url).pathname : req, res.clone());
    return res;
  } catch (e) {
    const hit = await cache.match(req.mode === 'navigate' ? new URL(req.url).pathname : req, { ignoreSearch: true })
      || (req.mode === 'navigate' && await cache.match('./'));
    if (hit) return hit;
    throw e;
  }
}
