import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

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
    <App/>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

reportWebVitals();
