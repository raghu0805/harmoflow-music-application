// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXgS1xOUPr4rC2mPfAwwb7VwxJrZ6piQo",
  authDomain: "harmoflow-d1dcc.firebaseapp.com",
  projectId: "harmoflow-d1dcc",
  storageBucket: "harmoflow-d1dcc.appspot.com", // <-- corrected domain
  messagingSenderId: "958456788836",
  appId: "1:958456788836:web:c09bd67c8b1b3710d2ac71"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


export let __AUTH = getAuth(firebaseApp);
export let __DB = getFirestore(firebaseApp);


export default firebaseApp;
