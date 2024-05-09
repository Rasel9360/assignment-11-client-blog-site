// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8eVUNg4RamS0WxXzxy9mAvqKfe2LFYtM",
  authDomain: "assignment-eleven-74640.firebaseapp.com",
  projectId: "assignment-eleven-74640",
  storageBucket: "assignment-eleven-74640.appspot.com",
  messagingSenderId: "832000016122",
  appId: "1:832000016122:web:8cfbad1cd7db7e08d49343"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
