import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBD5MGckf279WjTZ48F4h7_u4Jpy1psKFo",
  authDomain: "ecommerce-react-77a4b.firebaseapp.com",
  projectId: "ecommerce-react-77a4b",
  storageBucket: "ecommerce-react-77a4b.appspot.com",
  messagingSenderId: "533022891097",
  appId: "1:533022891097:web:4108d53455fbe8f325a548"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
