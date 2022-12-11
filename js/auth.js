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

const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;
    createUsersWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        const modal = document.querySelector("#modal-signup");
        M.Modal.getInstance(modal).close();
        siqnupForm.reset();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
             
    });
});

const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
    e.preventDefault();
    signout(auth)
      .then(() => {
        console.log("User has signed out");
      })
      .catch((error) => {

      });
});

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        const modal = document.querySelector("#modal-signup");
        M.Modal.getInstance(modal).close();
        siqnupForm.reset();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
             
    });
});

