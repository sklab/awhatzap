self.addEventListener('install', (event) => {
  console.log('service worker install ...');
  
  const cacheKey = 'SiteCache_v1';

  event.waitUntil(caches.open(cacheKey).then((cache) => {
    return cache.addAll([
    ]);
  }));
});

self.addEventListener('activate', (event) => {
  console.info('activate', event);
});
