// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEq2zSc4hPORXQUNzU6XDSB1HWRog73a4",
  authDomain: "proyectoti3-c250d.firebaseapp.com",
  projectId: "proyectoti3-c250d",
  storageBucket: "proyectoti3-c250d.appspot.com",
  messagingSenderId: "786407530568",
  appId: "1:786407530568:web:6522aaae5721567131387d"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db 