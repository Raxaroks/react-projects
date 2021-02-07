import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCJ6x78MkNei6Pz3JwShZeAE2bMcUbAb9k",
    authDomain: "react-app-project-courses.firebaseapp.com",
    projectId: "react-app-project-courses",
    storageBucket: "react-app-project-courses.appspot.com",
    messagingSenderId: "268633001409",
    appId: "1:268633001409:web:1d68c51d936bef3a227340"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); // referencia a la base de datos en Firebase
const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); // referenccia a la autenticación con Google

export {
    db,
    firebase,
    googleAuthProvider
}
