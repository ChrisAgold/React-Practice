import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Hello from './Hello.js'
import 'tachyons';

ReactDOM.render(
    <React.StrictMode>
        <App/>
        <Hello greeting={'Hello React Ninja'}/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
