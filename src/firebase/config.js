//Lien ket Facebook
import firebase from 'firebase/compat/app';

import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDrf_aKOQtfom8bMjwSU6y3fYHjSSUYAis",
    authDomain: "chat-app-dc25f.firebaseapp.com",
    projectId: "chat-app-dc25f",
    storageBucket: "chat-app-dc25f.appspot.com",
    messagingSenderId: "515319412823",
    appId: "1:515319412823:web:211bde6c6b8379fc480b12",
    measurementId: "G-NSS605Q4YT"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();
  const db = firebase.firestore();

  if (window.location.hostname === 'localhost') {
    // auth.useEmulator('http://localhost:9099');
    // db.useEmulator('localhost', '8080');
  }
  
  export{ db, auth};
  export default firebase;