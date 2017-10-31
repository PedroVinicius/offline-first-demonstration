self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('images').then(function(cache) {
      return cache.addAll([
        '/img/israel.airplanes.jpg',
        '/img/israel.beach.jpg',
        '/img/israel.kotel.jpg',
        '/img/israel.telaviv.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if(!response) {
        return fetch(event.request);
      }

      return response;
    })
  );
});