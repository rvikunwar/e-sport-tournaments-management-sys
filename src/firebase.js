// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdZwtANKFDZ46XZ672Rqd4kgdEQyBcXvQ",
  authDomain: "esports-5db91.firebaseapp.com",
  projectId: "esports-5db91",
  storageBucket: "esports-5db91.appspot.com",
  messagingSenderId: "1066342145135",
  appId: "1:1066342145135:web:bbb194a86d0958da56019a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firestore = getFirestore(app);


export let firestore;