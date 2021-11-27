
import firebaseApp from 'firebase/app'
import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDsdIaYl1FlOAeZkcl744gvZ5_PviIk_Yw',
  authDomain: 'school-directory-820be.firebaseapp.com',
  projectId: 'school-directory-820be',
  storageBucket: 'school-directory-820be.appspot.com',
  messagingSenderId: '637049595051',
  appId: '1:637049595051:web:cbdc7933d456b1d2dc83ee'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebaseApp.storage()
const projectFirestore = firebaseApp.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
export { projectStorage, projectFirestore, projectAuth, timestamp }
