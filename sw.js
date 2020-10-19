var CACHE_NAME = 'v0.0.1';


self.addEventListener('install', function(event) {
    event.waitUntil(


        caches.open(CACHE_NAME)
            .then(function(cache) {

                return cache.addAll('/');

            })


    );
});


