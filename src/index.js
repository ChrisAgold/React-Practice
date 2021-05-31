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

const img = "http://picsum.photos/200"


// change style on the go


// TIME CHALLENGE
const date = new Date();
const currentTime = date.getHours();

const customStyle = {
    color: ""
}
// console.log(currentTime);

let greeting;

if (currentTime < 12) {
    greeting = "Good Morning"
    customStyle.color = "red"
} else if (currentTime < 18) {
    greeting = "Good Afternoon"
    customStyle.color = "green"
} else {
    greeting = "Good Night"
    customStyle.color = "blue"
}

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
//     <div>
//         <h1 className="heading" contentEditable="true" spellCheck="false">Hello</h1>
//         <p>Created by {name}</p>
//         <p>Copyright {year}</p>
//     </div>,

    // <div>
    //     <h1 style={customStyle}>Hello World!</h1>
    //     <div>
    //         <img src={img + "?grayscale"} alt="random image"/>
    //     </div>
    // </div>,

    <h1 className="heading" style={customStyle}>{greeting}</h1>,

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
