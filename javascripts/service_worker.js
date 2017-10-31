self.addEventListener('fetch', function fetcher(event) {
  var request = event.request;

  if(request.url.indexOf('assets.localhost') > -1) {
    event.respondWith(
      caches.match(request).then(function(response) {
        return response || fetch(request);
      })
    )
  }
});