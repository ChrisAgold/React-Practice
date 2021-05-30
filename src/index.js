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

const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid black"
}
// change style on the go
customStyle.color = "blue";

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

    <div>
        <h1 style={customStyle}>Hello World!</h1>
        <div>
            <img src={img + "?grayscale"} alt="random image"/>
        </div>
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
