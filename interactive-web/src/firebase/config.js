import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCpkXPdSPwv3ENBqCUzjynsOrEgKTCP2_Y",
    authDomain: "team1105-interactive-website.firebaseapp.com",
    projectId: "team1105-interactive-website",
    storageBucket: "team1105-interactive-website.appspot.com",
    messagingSenderId: "989998267305",
    appId: "1:989998267305:web:c4cd9df7a35620ee2862b8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export {projectFirestore, projectStorage};