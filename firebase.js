// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEMJTK6JeYlWSUFlr06CBmn03dwqxqKz0",
  authDomain: "pantry-tracker-7c780.firebaseapp.com",
  projectId: "pantry-tracker-7c780",
  storageBucket: "pantry-tracker-7c780.appspot.com",
  messagingSenderId: "1049027257078",
  appId: "1:1049027257078:web:f110f14a9575502c1202d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };