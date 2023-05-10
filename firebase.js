// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "social-media-42596.firebaseapp.com",
  projectId: "social-media-42596",
  storageBucket: "social-media-42596.appspot.com",
  messagingSenderId: "807801314602",
  appId: "1:807801314602:web:1c14eed0a9b36fe2b01253"
};

// Initialize Firebase
const app= !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage= getStorage();
export {app, db, storage};