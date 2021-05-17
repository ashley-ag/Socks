import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCiFcPYC8COBbo7nrlsHPwndO4n-W3tQPI",
    authDomain: "socks-e7b3b.firebaseapp.com",
    projectId: "socks-e7b3b",
    storageBucket: "socks-e7b3b.appspot.com",
    messagingSenderId: "339005722570",
    appId: "1:339005722570:web:9a637628b224925d4e0933"
};

firebase.initializeApp(firebaseConfig);

export default firebase;