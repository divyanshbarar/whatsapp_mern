import firebase from "firebase"
import "firebase/auth"

const firebaseApp = firebase.initializeApp(
    {
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional

        // For Firebase JS SDK v7.20.0 and later, measurementId is optional

        apiKey: "AIzaSyBTG0nCel9XVYK3IzdlsSLi8CRbxYpZ2Yc",
        authDomain: "whatsapp-mern-539e4.firebaseapp.com",
        projectId: "whatsapp-mern-539e4",
        storageBucket: "whatsapp-mern-539e4.appspot.com",
        messagingSenderId: "328436144499",
        appId: "1:328436144499:web:56e22dbefb739444734d06",
        measurementId: "G-PKQXQ17712"

    }


)
// Initialize Firebase

const auth = firebase.auth();
const provider = firebase.auth.GoogleAuthProvider()
//const db = firebaseApp.firestore();
//const storage = firebase.storage();

// //initiating references to the databases
// const usersRef = db.collection('users')

// // for privileges purposes
// const functions = firebase.functions();

// //google provider sign-in
// const googleProvider = new firebase.auth.GoogleAuthProvider();


export { provider, auth, storage };
//export default db;