;(function() {
  function cacheAssets(assets) {
    var assets = assets || [];

    return new Promise(function(resolve, reject) {
      caches.open('assets').then((cache) => {
        cache.addAll(assets).then(() => {
          console.info('All assets were added to cache!');
          resolve();
        }).catch((err) => {
          reject();
        })
      }).catch((err) => {
        console.error('An error occurrend while opening the cache for writting :(', err);
        reject();
      })
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    navigator.serviceWorker.register('javascripts/service_worker.js', { scope: './' })
      .then(navigator.serviceWorker.ready)
      .then(function() {
        console.info('Service worker registered!');
      });
  });
})();