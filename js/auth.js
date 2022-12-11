import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAuth, createUsersWithEmailAndPassword, signout, signinWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyC5J0raZ6SDGfj6kfp-HO5WNO5ezk85NEA",
    authDomain: "toogotoowants.firebaseapp.com",
    projectId: "toogotoowants",
    storageBucket: "toogotoowants.appspot.com",
    messagingSenderId: "796854356361",
    appId: "1:796854356361:web:8d102bcf35d5afe58e3958",
    measurementId: "G-2L1BX5E3V8"
};

const app = initializeApp(firebaseConfig);