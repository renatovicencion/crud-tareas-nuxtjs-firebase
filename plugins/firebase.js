import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBLg3J4t078RRdFL4eUH1hXffGnhHnAE6k",
    authDomain: "nuxtjs-1-b6dcb.firebaseapp.com",
    projectId: "nuxtjs-1-b6dcb",
    storageBucket: "nuxtjs-1-b6dcb.appspot.com",
    messagingSenderId: "328205722622",
    appId: "1:328205722622:web:6f9945b8f9a7ff54f516af"
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export {firebase, db, auth, storage}