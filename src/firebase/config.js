import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAVSvYqzU2VpMbRzdltyrIct7xj65AyPkE",
  authDomain: "robblog-e5ec8.firebaseapp.com",
  projectId: "robblog-e5ec8",
  storageBucket: "robblog-e5ec8.appspot.com",
  messagingSenderId: "157681419693",
  appId: "1:157681419693:web:1474e0e236c421243a4d24"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export{db};