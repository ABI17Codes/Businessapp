// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk_H66mignuWlTSVRQ8I0-K4f_mWX91Is",
  authDomain: "businessapp-9bce5.firebaseapp.com",
  projectId: "businessapp-9bce5",
  storageBucket: "businessapp-9bce5.firebasestorage.app",
  messagingSenderId: "891999591912",
  appId: "1:891999591912:web:eb612216405c61d0a1585d",
  measurementId: "G-LYMPQ21B9N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)

// const analytics = getAnalytics(app);