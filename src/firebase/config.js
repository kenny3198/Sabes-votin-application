 import firebase from "firebase/compat/app"
 import "firebase/compat/firestore"

 const firebaseConfig = {
  apiKey: "AIzaSyAiLntF1yJZCgq0iK_krdY-7XJ1xgaJ3z0",
  authDomain: "sabes-votin-app.firebaseapp.com",
  projectId: "sabes-votin-app",
  storageBucket: "sabes-votin-app.appspot.com",
  messagingSenderId: "681190452275",
  appId: "1:681190452275:web:a2edfdc1f2329c2da70746"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

   const votingFireStore =  firebase.firestore();

  export  { votingFireStore } 



