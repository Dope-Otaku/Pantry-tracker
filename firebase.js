// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYFVRs7gKqQgJhoB2u_vKSE6C-J-RvsLc",
  authDomain: "inventory-management-237ab.firebaseapp.com",
  projectId: "inventory-management-237ab",
  storageBucket: "inventory-management-237ab.appspot.com",
  messagingSenderId: "954226095413",
  appId: "1:954226095413:web:dc92a440c9d2c9f032087c",
  measurementId: "G-6JST5TH256",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };
