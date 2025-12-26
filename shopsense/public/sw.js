const CACHE_NAME = "v1-shopsense";
self.addEventListener("install", (e) => {
  // cache.open  => create cache
  // it return promise using .then we get caches access
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(["/"]);
    })
  );
});

self.addEventListener("activate", (e) => {
  self.clients.claim(); // 🔥 REQUIRED
  // clean up activities here
  e.waitUntil(
    caches.keys().then((cacheNamesList) => {
      return Promise.all(
        cacheNamesList.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const clonedata = res.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, clonedata);
        });
        return res;
      })
      .catch(() => {
        caches.match(e.request).then((file) => file);
      })
  );
});
