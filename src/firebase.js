import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyD2MjPBcSxtSwRRkq3Kn9CP0tty9zZ8Nmo",
    authDomain: "fipugram-4a32a.firebaseapp.com",
    projectId: "fipugram-4a32a",
    storageBucket: "fipugram-4a32a.appspot.com",
    messagingSenderId: "445593751717",
    appId: "1:445593751717:web:dd8cd93fad75c75023bd4c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const storage = firebase.storage();

  export {firebase, db, storage };