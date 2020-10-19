var urlsToCache = [
    "index.html",
];

var CACHE_NAME = 'cache-v1';


self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME) // 上記で指定しているキャッシュ名
            .then(
                function(cache){
                    return cache.addAll(urlsToCache); // 指定したリソースをキャッシュへ追加
                    // 1つでも失敗したらService Workerのインストールはスキップされる
                })
    );
});


self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => {
                    return !CACHE_KEYS.includes(key);
                }).map(key => {
                    // 不要なキャッシュを削除
                    return caches.delete(key);
                })
            );
        })
    );
});