import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDHmUgMLXZOiNxPRLUxkW8IP1KxpxKM03Q",
    authDomain: "track-cash-b16fe.firebaseapp.com",
    projectId: "track-cash-b16fe",
    storageBucket: "track-cash-b16fe.firebasestorage.app",
    messagingSenderId: "955949509704",
    appId: "1:955949509704:web:336f953038e3091b7c3c7d"
  };

//   init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore=firebase.firestore()
const projectAuth=firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}