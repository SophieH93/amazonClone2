import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-W1WO1glwy4k6C7X-9vrwpoiGumziEu4",
  authDomain: "clone-cbb36.firebaseapp.com",
  projectId: "clone-cbb36",
  storageBucket: "clone-cbb36.appspot.com",
  messagingSenderId: "920774740144",
  appId: "1:920774740144:web:ada5d11953bd38523d9375",
  measurementId: "G-7QQLYV1M53"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

 export { auth, db }; 
