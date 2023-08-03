import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCKkFALMjVbvJjpiyVocPbL42TeqD_e68M",
    authDomain: "slack-clone-450f9.firebaseapp.com",
    projectId: "slack-clone-450f9",
    storageBucket: "slack-clone-450f9.appspot.com",
    messagingSenderId: "804393340867",
    appId: "1:804393340867:web:2c221f198929d2f9e3f776"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export {db,auth,googleProvider};