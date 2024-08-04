// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6WX0lQu23rTqmWb4CKzyeAloTKOpK5pk",
  authDomain: "inventory-management-33bfb.firebaseapp.com",
  projectId: "inventory-management-33bfb",
  storageBucket: "inventory-management-33bfb.appspot.com",
  messagingSenderId: "868015611845",
  appId: "1:868015611845:web:f92d19dc1267e0393d35ac",
  measurementId: "G-4V0VHCDEQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };