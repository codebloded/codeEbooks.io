import firebase from "firebase";
import "firebase/firestore"
import firebaseConfig from "./firebaseConfig";

const appFirebase = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db }
export default firebase;