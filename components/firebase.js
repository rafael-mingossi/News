import * as firebase from "firebase";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDP6j3HGI8Yvu_ol3y3dMcejoYiXoRGbh8",
  authDomain: "newsapp-6d0d4.firebaseapp.com",
  projectId: "newsapp-6d0d4",
  storageBucket: "newsapp-6d0d4.appspot.com",
  messagingSenderId: "1095525983478",
  appId: "1:1095525983478:web:b410157d000778e134f8d7",
});

const db = firebase.firestore();

export { db };
