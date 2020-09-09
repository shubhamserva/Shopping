import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBWM22cOFSJ9s9qP6Fvo6ZXOvU8EcfPO1c",
        authDomain: "whatsapp-clone-00.firebaseapp.com",
        databaseURL: "https://whatsapp-clone-00.firebaseio.com",
        projectId: "whatsapp-clone-00",
        storageBucket: "whatsapp-clone-00.appspot.com",
        messagingSenderId: "366325124612",
        appId: "1:366325124612:web:29ba700e261ce6514caf51",
        measurementId: "G-CRB2BPWNVF"
})

const db = firebase.firestore();
const auth = firebase.auth();

export {auth};