import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBE3PayQRS1q-plg31S1A71YkLWfD4er7s',
    authDomain: 'slack-clone-e3aff.firebaseapp.com',
    projectId: 'slack-clone-e3aff',
    storageBucket: 'slack-clone-e3aff.appspot.com',
    messagingSenderId: '537261655863',
    appId: '1:537261655863:web:156bb869ce118ac0b1bcb2',
    measurementId: 'G-GSDL05WP22',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
