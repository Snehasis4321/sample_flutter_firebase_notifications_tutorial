importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: 'AIzaSyDrbFnMnyMu3niQ6ly57Q91RrC_0xHW1Sc',
    appId: '1:551011094860:web:9ba6f4ebee7b082ce3bfe9',
    messagingSenderId: '551011094860',
    projectId: 'save-token-firebase',
    authDomain: 'save-token-firebase.firebaseapp.com',
    storageBucket: 'save-token-firebase.appspot.com',
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});
