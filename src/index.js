import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import * as pi from "./math.js";

ReactDOM.render(
    // <App/>,
    <ul>
        <li>{pi.default}</li>
        <li>{pi.doublePi()}</li>
        <li>{pi.triplePi()}</li>
    </ul>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

reportWebVitals();
