import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyB_iaqLwbcYFCBKUZcHTRxLcypznjTblBQ",
    authDomain: "clone-199e5.firebaseapp.com",
    projectId: "clone-199e5",
    storageBucket: "clone-199e5.appspot.com",
    messagingSenderId: "163771495574",
    appId: "1:163771495574:web:cc3ead25335e050e7a3eb7",
    measurementId: "G-SCRLKYLRKE"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, db, provider }; 
