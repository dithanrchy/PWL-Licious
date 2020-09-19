import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD4nZXNgQCPoOhav8UctOS-2_G1-v_2K7Q",
  authDomain: "licious-pwl.firebaseapp.com",
  databaseURL: "https://licious-pwl.firebaseio.com",
  projectId: "licious-pwl",
  storageBucket: "licious-pwl.appspot.com",
  messagingSenderId: "963186068037",
  appId: "1:963186068037:web:99d02386282bcd27f2712c",
  measurementId: "G-GP6JCMGPBS"
};

const fconfig = firebase.initializeApp(firebaseConfig);

export default fconfig;