var CACHE_NAME = 'cache-v1';


self.addEventListener('install', function(event) {
    event.waitUntil(


        caches.open(CACHE_NAME)
            .then(function(cache) {

                return cache.addAll('/');

            })


    );
});


self.addEventListener('activate', function(event) {
    event.waitUntil(

        caches.keys().then(function(cache) {
            cache.map(function(name) {
                if(CACHE_NAME !== name) caches.delete(name);
            })
        })

    );
});