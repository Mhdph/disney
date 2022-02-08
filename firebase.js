import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChtXMlCXFVViLlhvSsmkYjyGdSsBez_uU",
  authDomain: "disney-clone-3399b.firebaseapp.com",
  projectId: "disney-clone-3399b",
  storageBucket: "disney-clone-3399b.appspot.com",
  messagingSenderId: "761165476383",
  appId: "1:761165476383:web:0641a0efd651d0caaa9b2a",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
