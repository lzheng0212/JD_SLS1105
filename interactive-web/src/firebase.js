import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDsdIaYl1FlOAeZkcl744gvZ5_PviIk_Yw",
    authDomain: "school-directory-820be.firebaseapp.com",
    projectId: "school-directory-820be",
    storageBucket: "school-directory-820be.appspot.com",
    messagingSenderId: "637049595051",
    appId: "1:637049595051:web:cbdc7933d456b1d2dc83ee"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;