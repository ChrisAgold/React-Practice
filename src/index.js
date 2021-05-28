import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// var React = require('react');
// var ReactDOM = require('react-dom');

const name = "Chris";
const currentDate = new Date();
const year = currentDate.getFullYear();

const fname = "Bill";
const lname = "Hank";
const num = 1;
const number = 3;

ReactDOM.render(
    // <div>
    //     <h1>Hello {fname} {lname}!</h1>
    //     <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
    // </div>,

//    Challenge 1: Create a food list
// <div>
//     <h1>Food List</h1>
//     <ul>
//         <li>random food</li>
//         <li>random food</li>
//         <li>random food</li>
//         <li>random food</li>
//         <li>random food</li>
//     </ul>
// </div>,
    <div>
        <p>Created by {name}</p>
        <p>Copyright {year}</p>
    </div>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
