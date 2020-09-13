import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXRD7XLmSf2QJcl-iwhQFjQF8zkWJSJx4",
  authDomain: "fir-c91de.firebaseapp.com",
  databaseURL: "https://fir-c91de.firebaseio.com",
  projectId: "fir-c91de",
  storageBucket: "fir-c91de.appspot.com",
  messagingSenderId: "427017670143",
  appId: "1:427017670143:web:c39a2c41f582b1034babca",
  measurementId: "G-FMBEBKHVNQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };