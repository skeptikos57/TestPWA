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

self.addEventListener('notificationclick', (event) => {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url === event.notification.data.url && 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow)
      return clients.openWindow(event.notification.data.url);
  }));
});

self.onnotificationclick = function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url === event.notification.data.url && 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow)
      return clients.openWindow(event.notification.data.url);
  }));
};
