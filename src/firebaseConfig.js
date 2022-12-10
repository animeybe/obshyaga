import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBl8DXdoKoO2tGa39-vjR-YyAuN2li3q-0",
    authDomain: "obshyaga-fefu.firebaseapp.com",
    projectId: "obshyaga-fefu",
    storageBucket: "obshyaga-fefu.appspot.com",
    messagingSenderId: "482097233153",
    appId: "1:482097233153:web:da8eca9e7066fade5eaf00",
    measurementId: "G-D4R67MY307"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
async () => {
  await setPersistence(auth, browserSessionPersistence);
};

export { auth }