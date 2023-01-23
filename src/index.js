import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDG-Rln7HvI6Dos_nSEdPN77KyR94k_8eg",
    authDomain: "java-chat-f53c8.firebaseapp.com",
    projectId: "java-chat-f53c8",
    storageBucket: "java-chat-f53c8.appspot.com",
    messagingSenderId: "91636461157",
    appId: "1:91636461157:web:697387a93aba071255e08c",
    measurementId: "G-PTJF4G36PE"
};

// Initialize Firebase

export const Context = createContext(null);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        auth,
        firestore
    }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Context.Provider>
);

