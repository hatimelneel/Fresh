const OLD_CACHE_PREFIX=/invoicepro/i;

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.filter(k => OLD_CACHE_PREFIX.test(k)).map(k => caches.delete(k)));
    } catch(e) {}

    try {
      await self.registration.unregister();
    } catch(e) {}

    try {
      const windows = await self.clients.matchAll({type:"window", includeUncontrolled:true});
      for (const client of windows) {
        try { client.navigate(client.url); } catch(e) {}
      }
    } catch(e) {}
  })());
});

// While this cleanup worker controls an existing page, always prefer network.
self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request, {cache:"no-store"}).catch(() => fetch(event.request)));
});
