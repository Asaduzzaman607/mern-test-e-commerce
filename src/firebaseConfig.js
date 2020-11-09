import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDq7XMCZiVsedEWaqJYOWXbvmN1AnBQo8U",
    authDomain: "mern-test-ecommerce.firebaseapp.com",
    databaseURL: "https://mern-test-ecommerce.firebaseio.com",
    projectId: "mern-test-ecommerce",
    storageBucket: "mern-test-ecommerce.appspot.com",
    messagingSenderId: "815496172661",
    appId: "1:815496172661:web:8035949c2e4c4c7fbdd43c"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

const storage = firebase.storage();

export {db,auth,storage};