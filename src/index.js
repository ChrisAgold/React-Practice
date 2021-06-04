import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Card from './Card.js';
import 'tachyons';

ReactDOM.render(
    <div>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>,
    document.getElementById('root')
);

reportWebVitals();
