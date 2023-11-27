import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

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
console.log(app);

document.getElementById('cadastroBtn').addEventListener('click', function (event) {
    event.preventDefault();
    check();
});

async function check() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;
        console.log("Usuário cadastrado com sucesso");
        alert("Usuário cadastrado com sucesso");
''
        const nomebd = document.getElementById('nome').value;
        const sobrenomebd = document.getElementById('sobrenome').value;

        await cadastroBd(nomebd, sobrenomebd, email);
        window.location.href = "./login.html";
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error.code, error.message);
    }
}

async function cadastroBd(nome, sobrenome, email) {
    try {
        const docRef = await addDoc(collection(db, 'Usuarios'), {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
        });
        console.log("Documento adicionado com ID:", docRef.id);
    } catch (error) {
        console.error("Erro ao cadastrar usuário no Firestore:", error);
    }
}