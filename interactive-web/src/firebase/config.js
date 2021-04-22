
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDsdIaYl1FlOAeZkcl744gvZ5_PviIk_Yw",
  authDomain: "school-directory-820be.firebaseapp.com",
  projectId: "school-directory-820be",
  storageBucket: "school-directory-820be.appspot.com",
  messagingSenderId: "637049595051",
  appId: "1:637049595051:web:cbdc7933d456b1d2dc83ee"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };

