 import firebase from "firebase/compat/app"
 import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCcL9zpkz3iBhoGgbLZUpMZ3YMGNtkuIhU",
    authDomain: "sabes-nominees.firebaseapp.com",
    projectId: "sabes-nominees",
     storageBucket: "sabes-nominees.appspot.com",
     messagingSenderId: "376328214090",
     appId: "1:376328214090:web:cf028bd0f8a3bcf21438b3"
   };

  firebase.initializeApp(firebaseConfig)

   const projectFireStore =  firebase.firestore();

  export  { projectFireStore } 



