import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCPGBu_t8uiNHwjUphy2--1_ueofSqOCR4",
    authDomain: "ikobe-1049d.firebaseapp.com",
    projectId: "ikobe-1049d",
    storageBucket: "ikobe-1049d.appspot.com",
    messagingSenderId: "454751428891",
    appId: "1:454751428891:web:03dadad01c9e191ff773be"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
console.log(db);

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    check();
});

function check(){
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Usuário Logado com sucesso");
      window.location.href = "./index.html";

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}


