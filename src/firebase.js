// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBi0LQwFKvset0_UapPWX_YLoA_i-orHkU",
    authDomain: "clone-fdbb1.firebaseapp.com",
    projectId: "clone-fdbb1",
    storageBucket: "clone-fdbb1.appspot.com",
    messagingSenderId: "79953335450",
    appId: "1:79953335450:web:48b006d09c69fc01dafb23",
    measurementId: "G-GYK8JMLQH7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };