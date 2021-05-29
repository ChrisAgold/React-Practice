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
//     <div>
//         <h1 className="heading" contentEditable="true" spellCheck="false">Hello</h1>
//         <p>Created by {name}</p>
//         <p>Copyright {year}</p>
//     </div>,
    <div>
        <div>
            <img className="img" src="https://ca-times.brightspotcdn.com/dims4/default/bfba83d/2147483647/strip/true/crop/1920x1080+0+0/resize/1486x836!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa9%2F29%2F9095034649138782a2e1d7b4a3e0%2Fds-still-012.jpg"/>
            <img className="img" src="http://www.austinchronicle.com/binary/9512/demonslayer-movie-web.jpg"/>
            <img className="img" src="https://media.comicbook.com/2021/02/demon-slayer-live-action-movie-hollywood-blockbuster-anime-manga-1257283-1280x0.jpeg"/>
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
