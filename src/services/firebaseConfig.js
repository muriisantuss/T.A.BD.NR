// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtKgDJoXfBoY78zuh4Gl4TgvXhXyhFIaY",
  authDomain: "tabdnr-77941.firebaseapp.com",
  projectId: "tabdnr-77941",
  storageBucket: "tabdnr-77941.appspot.com",
  messagingSenderId: "1070613606878",
  appId: "1:1070613606878:web:0200ecb2827868ec216d4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)