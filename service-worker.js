'use strict';

let cacheFileName = "scannerCache-v1";
let cacheComponentsFileName = "scannerComponentsCache-v1";
let cacheCdnName = "scannerCdnCache-v1";

let filesToCache = [
    './',
    './index.html',
    './script.js',
    './styles.css',
    './images/qrscanner_hdpi.png',
    './images/qrscanner_mdpi.png',
    './images/qrscanner_xhdpi.png',
    './images/qrscanner_xxhdpi.png',
    './images/qrscanner_xxxhdpi.png',
    './images/web_hi_res_512.png',
    './app_manifest.json'
];

let componentsToCache = [
	'/bower_components/'
];

let cdnToCache = [
  "https://fonts.googleapis.com/",
  "https://code.getmdl.io/",
  "https://fonts.gstatic.com/"
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheFileName)
            .then(function(cache) {
                console.log('[ServiceWorker] Caching app shell');
                return cache.addAll(filesToCache);
            })
    );
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheFileName && key != cacheCdnName && key !== cacheComponentsFileName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    if (cdnToCache.find((element)=>{return e.request.url.indexOf(element) === 0;})) {
        e.respondWith(
            fetch(e.request)
                .then(function(response) {
                    return caches.open(cacheCdnName).then(function(cache) {
                        cache.put(e.request.url, response.clone());
                        console.log('[ServiceWorker] Fetched&Cached CDN Data');
                        return response;
                    });
                })
        );
    } else if (componentsToCache.find((element)=>{return e.request.url.indexOf(element) === 0;})){
		 e.respondWith(
            fetch(e.request)
                .then(function(response) {
                    return caches.open(cacheComponentsFileName).then(function(cache) {
                        cache.put(e.request.url, response.clone());
                        console.log('[ServiceWorker] Fetched&Cached Components Data');
                        return response;
                    });
                })
        );
	} else {
        e.respondWith(
            caches.match(e.request).then(function(response) {
                return response || fetch(e.request);
            })
        );
    }
});