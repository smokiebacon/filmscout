import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'




// Initialize Firebase
const config = {
    apiKey: "AIzaSyBj5WA90ODeJvUD4b45PTkHKit9ui3Td6c",
    authDomain: "scout-4801e.firebaseapp.com",
    databaseURL: "https://scout-4801e.firebaseio.com",
    projectId: "scout-4801e",
    storageBucket: "scout-4801e.appspot.com",
    messagingSenderId: "1052947190185"
  };
  firebase.initializeApp(config);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();


export { auth, db, storage }
export default firebase