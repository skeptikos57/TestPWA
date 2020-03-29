self.addEventListener('notificationclick', (event) => {
    console.log("This is custom service worker notificationclick method.");
    console.log('Notification details: ', event.notification);
    // Write the code to open
    if (clients.openWindow && event.notification.data.url) {
      event.waitUntil(clients.openWindow(event.notification.data.url));
    }
  }
);

importScripts('https://www.gstatic.com/firebasejs/6.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.6.2/firebase-messaging.js');
firebase.initializeApp({
  apiKey: "AIzaSyDBOGVbLjQA9XROsEvF6CBcLt6JBBz3XRk",
  authDomain: "testpwa-49502.firebaseapp.com",
  databaseURL: "https://testpwa-49502.firebaseio.com",
  projectId: "testpwa-49502",
  storageBucket: "testpwa-49502.appspot.com",
  messagingSenderId: "773452206716",
  appId: "1:773452206716:web:473dcebd0f7b01cb8c2ff9"
});
const messaging = firebase.messaging();
