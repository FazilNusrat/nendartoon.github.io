'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fac4f682d23b6ce2f9c0c1dece1a36a0",
"assets/AssetManifest.bin.json": "169b3221d8bc23abc1ab6b0a778987d5",
"assets/assets/data/books.json": "cc48d99b4160b25a5e1c88b94ab930d7",
"assets/assets/data/book_1.json": "ec0727f1e1effcc84384da876b2f3ace",
"assets/assets/data/book_10.json": "cf55e83e4436328256fc1f10c4594183",
"assets/assets/data/book_11.json": "7c3a32d8b7dc0f483e65e3a0b333cf61",
"assets/assets/data/book_12.json": "94ff81fe7ac0898bbbedcea4d8b7e2d1",
"assets/assets/data/book_13.json": "d92600d3499e754887f7eb061673d211",
"assets/assets/data/book_14.json": "5a32f2db8a1e405fd47a2382135265d8",
"assets/assets/data/book_15.json": "088fffd933b539130f136327f444da77",
"assets/assets/data/book_16.json": "279ee47a72935b3dc8bd7152e33d0ba3",
"assets/assets/data/book_17.json": "6a178209fa327612b5da48bb121afb76",
"assets/assets/data/book_18.json": "e6203b98415a2694b586124b2417c9ce",
"assets/assets/data/book_19.json": "a42d07643e95f1a77e7ecbd4cff7f304",
"assets/assets/data/book_2.json": "de4f48145cb814f49da26672d1643a44",
"assets/assets/data/book_20.json": "4a18380a034a34a04a916c90f21cfb59",
"assets/assets/data/book_21.json": "a0e13335b2fa421b4f04786f3970ee67",
"assets/assets/data/book_22.json": "2be6342c4da9b02664046c2602e631b4",
"assets/assets/data/book_23.json": "4aed30fed35f80448361c3ae14812bd4",
"assets/assets/data/book_24.json": "f665496bfde5da2595870d1bfd6a1fa2",
"assets/assets/data/book_25.json": "89b9dbee99f9fe8a3e4970146a8018ee",
"assets/assets/data/book_26.json": "a5f97d907c2b300066091cd27fe82b1d",
"assets/assets/data/book_27.json": "36c632f447132a1bc3b24c7abd5a59cd",
"assets/assets/data/book_28.json": "6ff1606c50fe557bbcfad2988cee0ef2",
"assets/assets/data/book_29.json": "bd04de31eac686ea150af1cf80b0b497",
"assets/assets/data/book_3.json": "d5f0fa6426f404701be7719f0e89684f",
"assets/assets/data/book_30.json": "b515950595adf8de0b9faf18f86878dc",
"assets/assets/data/book_31.json": "c1768c243c14e061a30dffd08f4e82c2",
"assets/assets/data/book_4.json": "435d09f582fb4877c192ae06c71d74de",
"assets/assets/data/book_5.json": "222f9e2d07de03c4dde779c1f9a0bfeb",
"assets/assets/data/book_6.json": "da7e46c5879673510293e7543e023351",
"assets/assets/data/book_7.json": "c3b9fae65d501a442e56527e34ebbeac",
"assets/assets/data/book_8.json": "cb3322d9ad72bde3fdab030f7c9de899",
"assets/assets/data/book_9.json": "71a0a5aca4ab9128a13707862dacb8c6",
"assets/assets/fonts/Vazirmatn-Bold.ttf": "4ac4426bc38f337534dfc45b3dbd9283",
"assets/assets/fonts/Vazirmatn-Light.ttf": "e1718753611a1da034b7e80ecc1523be",
"assets/assets/fonts/Vazirmatn-Medium.ttf": "24d05392e628925dcb1722a1f20952d3",
"assets/assets/fonts/Vazirmatn-Regular.ttf": "e8e9648f5b8fc824da409750ff331221",
"assets/FontManifest.json": "b58eb726d753d90fbefa704cb8ea3304",
"assets/fonts/MaterialIcons-Regular.otf": "543d2d2cb54ecfd39fcb69d865b36b3f",
"assets/NOTICES": "9fa9c2858d61210ec35e04170da43866",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "49d5acfcaec3f94c39287a5505996dd7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5c88146601dacbc0f8b310d000ffe1cd",
"/": "5c88146601dacbc0f8b310d000ffe1cd",
"main.dart.js": "bd6c51823854801d439aab0c5e66f0bd",
"manifest.json": "d08dd73073a00df37a3eec91b07fb39c",
"version.json": "32bec5db0e61bf8bba3ed7f3501e4a50"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
