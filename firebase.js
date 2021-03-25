import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIhBBP-4WLQXLmgdP9opiJ1yPO5478SxM",
  authDomain: "whatsapp-v2-59d94.firebaseapp.com",
  projectId: "whatsapp-v2-59d94",
  storageBucket: "whatsapp-v2-59d94.appspot.com",
  messagingSenderId: "792025342459",
  appId: "1:792025342459:web:d68a9921523fd79d042b5e",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
