var CACHE_NAME = 'corporate-ui-cache-v1';
var urlsToCache = [
  'https://static.scania.com/resources/logotype/scania/logotype-stylesheet/scania-logotype.css',
  'https://static.scania.com/resources/fonts/external_fonts.css',
  'https://static.scania.com/resources/fonts/scania-sans/scania-fonts.css',
  'https://static.scania.com/resources/fonts/font-awesome/font-awesome.css',
  'https://static.scania.com/resources/icons/scania/icons.css'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});var
