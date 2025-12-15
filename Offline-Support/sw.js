const CACHE_NAME = "appName/v1";

// Listen for install event
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll([
        "./index.html",
        "./style.css",
        "./vite.svg",
        "./script.js",
      ]);
    }),
  );
});

// Listen for activate event
self.addEventListener("activate", (e) => {
  // Clear old caches
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});

// Listen for fetch event
self.addEventListener("fetch", (e) => {
  // Offline support
  // Whenever a file is requested,
  // 1. Fetch from the network
  // 2. Update the cach with new data
  // 3. If network fails, use cache as a fallback

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // Update cache
        const cloneData = res.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, cloneData);
        });

        // Return response
        return res;
      })
      .catch(async () => {
        console.log("Request failed, returning cached response");
        // Return cached response in case of network failure
        return caches.match(e.request).then((file) => file);
      }),
  );
});
