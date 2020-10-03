import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD1GyygP-uQGbM3Dv6_OZMK-Uqbfx24za0",
    authDomain: "lamba-chatapp.firebaseapp.com",
    databaseURL: "https://lamba-chatapp.firebaseio.com",
    projectId: "lamba-chatapp",
    storageBucket: "lamba-chatapp.appspot.com",
    messagingSenderId: "194621616490",
    appId: "1:194621616490:web:14df82c0f75d4f5e7ab513"
  };

  // Initialize Firebase
  const fire= firebase.initializeApp(firebaseConfig);
  export default fire;
