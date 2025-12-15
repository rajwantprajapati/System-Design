// Check if service worker is supported
if (navigator.serviceWorker) {
  // Register service worker
  navigator.serviceWorker
    .register("./sw.js", {
      scope: "/",
    })
    .then(() => {
      console.log("Service Worker registered");
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}
