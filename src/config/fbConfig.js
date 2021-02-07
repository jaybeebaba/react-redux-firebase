import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/analytics';

var firebaseConfig = {
    apiKey: "AIzaSyDzN01U8eXtUXHdZGsi904ERnwEFpAcxtM",
    authDomain: "my-mario-project-33c97.firebaseapp.com",
    databaseURL: "https://my-mario-project-33c97.firebaseio.com",
    projectId: "my-mario-project-33c97",
    storageBucket: "my-mario-project-33c97.appspot.com",
    messagingSenderId: "901412013487",
    appId: "1:901412013487:web:ef3a9ca821a0e742be5b5a",
    measurementId: "G-LRTMR1FTT4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase