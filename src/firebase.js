import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAeCDXJomlNwErIydwUdBWWIpbGYoZ0b3w",
  authDomain: "linkedin-cl-a00b2.firebaseapp.com",
  projectId: "linkedin-cl-a00b2",
  storageBucket: "linkedin-cl-a00b2.appspot.com",
  messagingSenderId: "294544183967",
  appId: "1:294544183967:web:7241a3cee433f30cdd88aa"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};