import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBpVFwXKxDMhlYDZIPWjA4hRHbRfIrecjk",
  authDomain: "fire-first-app-126d8.firebaseapp.com",
  projectId: "fire-first-app-126d8",
  storageBucket: "fire-first-app-126d8.firebasestorage.app",
  messagingSenderId: "404170297151",
  appId: "1:404170297151:web:61fef318df8a33f580cd8a",
  measurementId: "G-67WW5WGH46",
  databaseURL: "https://fire-first-app-126d8-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}

export default app
