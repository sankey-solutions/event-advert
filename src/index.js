import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDVJC-YWQy9IT_cA0Uv1tVZiP3JlJLsxd0",
  authDomain: "technothon-65ada.firebaseapp.com",
  projectId: "technothon-65ada",
  storageBucket: "technothon-65ada.appspot.com",
  messagingSenderId: "554332875656",
  appId: "1:554332875656:web:c65917bf6857f8f024683d",
  measurementId: "G-JHVZ9R9T7C"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
