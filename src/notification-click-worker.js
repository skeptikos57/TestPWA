importScripts('./ngsw-worker.js');

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (clients.openWindow && event.notification.data.url) {
    event.waitUntil(clients.openWindow(event.notification.data.url));
  }
});
