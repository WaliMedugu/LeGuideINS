'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3f5db1f3c5c72bbb5604a7ec7f9ca711",
".git/config": "003c5179d1f5f1273365179c527e1bc6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8a929a35f79a8c1c9930e31aba0772b4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ed6940becea59ccbd075f2ef5cbc5016",
".git/logs/refs/heads/main": "e2dd21c6d258855b73b75bb3e870b1ae",
".git/logs/refs/remotes/origin/main": "e2036be8df25f563bf2a17587ee5d169",
".git/objects/03/6f30c57c6fa72f1fc73f15e37d8a39722fd0ab": "f021bc72d629d12450894d27e725743e",
".git/objects/05/39c63da52998c7f38886c629c4e0deacb2d6f9": "2fc84c170d4d093cdd4c0a63b1bc8928",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "dee38288e294701bf8f665ae546a43e3",
".git/objects/20/a2f022eba0570ff38a92c8ee98b8ed27d89ee2": "a7b92c2cd62014b75200722685f1b2a1",
".git/objects/28/112aaf389d62c0f3d969d7b206e51c01b41124": "662a4b4d103bc0f3637a95d4146fe97b",
".git/objects/2f/d43756fe1630b50d52c26c9e3c0fe422b4c7ab": "b2f98f9fae9f29ba54f26ad6dc1953af",
".git/objects/32/2d795cefffb6e0fd9adb2f247b9cedfdd5a5bf": "da7e29e03cdd7a5590707435293c3e4b",
".git/objects/36/a2357aff3b2bf696ccb77e79441cbea539c596": "d381ef62a3da40aacd8db18d52edc1a7",
".git/objects/3e/112fa70651e6f56b3e4954381f5186306778be": "2c772cef0fde934a12747c933bccc875",
".git/objects/40/ed76248f703a6f66a566838012bf4b4454e18b": "42cfc8fc18c2c5851ed1a646b2ca1a3a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/4b/14e4d39511b131c39367299625cf76cf69e28a": "135eea33f5a07668d1d902c9cb9bbdcd",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "338245ef1a85e95987f94776d0669c97",
".git/objects/4d/afe49c259ae4cd2a43a77b13ecbdfd33949b50": "04ad7e501594d5981a2669d67170dc93",
".git/objects/52/18ff99863c14338081722df40a3d86de2edc91": "1acbb0bf952c07bbdc2f5496b58946fc",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "23e8f7ce2c2856c1943e6cb51334416e",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "6d57e2d4816384a5236f4a52d9f1014b",
".git/objects/63/351fe7a8b776349a1ab94ff91625e9c698b57c": "487d6f2c260f39030f5feef3c34da41e",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "6dc767ec6498faa598b6dd7d00386498",
".git/objects/71/0824a46fd5f10405bbad473eb69dfc1acd79a8": "e8d2afbc138a4de8b7092229c7654d36",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "e14aa589bb7e68e3a524c297a802bde9",
".git/objects/79/cd2ea88ba9334d2eba1a67e32471bca9923233": "18d45630a4877a9330fafe4dcf795a0d",
".git/objects/7f/f185bed3ec44e134cb8c008430a8718467c2a5": "05e4305234cff6a58b402f3d60f8e744",
".git/objects/80/5683b17e595b826426a53e15d3479f96a157ba": "9a49b129b91e63f370d56730fdea6a8c",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "5d4a29a9a87b890bf4925183f1d2e3f7",
".git/objects/91/214cee920e86d26cbde3d2a9973aa31b9cc94b": "48f253eb26df3205715d8b6b913548a5",
".git/objects/98/80a2cf92fa04cf598e73cb943a46b73db69ed8": "d56457567790d29d2107783608363e79",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "dc1d3b6ac68817e26c52a2b7aca98a10",
".git/objects/a1/f4cfa4234df0fb1eeb77b9c7662fad6b57e072": "3da9287fad1acaada2e7ad0afecb63a9",
".git/objects/ac/a931785548c440e9118d9244721c1d4f6224e6": "78176903d6cf23684269a485ea18740d",
".git/objects/af/5a3c2eecbaa4a6fbda74f21f49cda6e9ab1ce9": "83a99b997ff3906b45cdc76e1b98698e",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "a488dd5b768f3e95bb3ded676201c413",
".git/objects/bb/7a045d3c15327f283988d76328f5b87e492657": "8a3c9f03c23c91663b2bdd0558d14a2f",
".git/objects/c3/1240c3427b31b372b45a01480679d6996aff18": "4dd4f1c7db0665bf9fee6e990758ac3b",
".git/objects/c4/abc71bd8a49781fae0d8fad746febd94dde8ee": "973025cc0ef51f9dfecd0b4140c7300d",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "0c4bbf647e92f25144f535178c7f7f15",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "1a4ee0c85a695a5f8ce1f75dac7efc0c",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "6a4baf0ee5d7f24d01892e880c87e9b5",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "eaf69ee68e07ccd33759fba4b5e36d4e",
".git/objects/e3/c82dd3fdeb527c4b7d180d00e832480ba9bbcd": "8df727072e6465bdf0743fd78849782a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/eb/b4343642183ce14267168ffa46679fc09e2554": "de02a9de5963e50ae18c0efcbc8fdf50",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/f6/c4de3bf8418d88dc0d757dc785280d8437bbbb": "bf7a2c22498384b1b42ae24760806cd6",
".git/objects/fb/94207f31e18b1340343db5cb891d93d33b6ed4": "efb5a74633a94dd55620c94d86737f50",
".git/objects/fc/74d9bbb2b4bbcc333cb9ab806772a5da668a41": "7fe71fd3581d681f34376ec023e52b5a",
".git/refs/heads/main": "f8e6155adace4a2c2e2080a94b58c45f",
".git/refs/remotes/origin/main": "da8bd445bbf3bac0b46253c5359991f6",
"assets/AssetManifest.bin": "2a538ab41cc32d5291b0c8718706c832",
"assets/AssetManifest.bin.json": "e1c405fbc843a8a83e6805837f9324e5",
"assets/AssetManifest.json": "6eba92872543f28c177b26a3945ea2cc",
"assets/assets/circle_logo.png": "d74a56dc7fd8b00873db19dc39bf5e13",
"assets/assets/favicon.png": "d74a56dc7fd8b00873db19dc39bf5e13",
"assets/assets/logo.png": "dcd8f64856e76a34842e0e1225e60c8d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7304bc082b9a03dfa350cb94db1d68b5",
"assets/NOTICES": "69fc55bc8b8586ca432ac80543fc2b1d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "d74a56dc7fd8b00873db19dc39bf5e13",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "797b4cf8e43a171d44ece73926edcd51",
"icons/Icon-192.png": "5f1911789aea683a369b8d2844c34982",
"icons/Icon-512.png": "fbce76ed86cbd83e5a09df5e02869966",
"icons/Icon-maskable-192.png": "5f1911789aea683a369b8d2844c34982",
"icons/Icon-maskable-512.png": "fbce76ed86cbd83e5a09df5e02869966",
"index.html": "8e800d2f37810fac95f666318a2f7870",
"/": "8e800d2f37810fac95f666318a2f7870",
"main.dart.js": "c09d0b01aef42b1bf3d9edc041ca551d",
"manifest.json": "3413100308aac889df075b2b0321eebc",
"version.json": "ec57f57c598e4b0ad95d4f6767a85413"};
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
