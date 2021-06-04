import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as pi from "./math.js";
import * as cal from "./calculator.js";

import Hello from './Hello.js'

// ReactDOM.render(
//     <ul>
//         <li>{cal.add(1, 3)}</li>
//         <li>{cal.multiply(5, 5)}</li>
//         <li>{cal.subtract(10, 2)}</li>
//         <li>{cal.divide(25, 5)}</li>
//     </ul>,
//     document.getElementById('root')
// );

ReactDOM.render(
    <React.StrictMode>
        <App/>
        <Hello/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
