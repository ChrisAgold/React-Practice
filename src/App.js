import './App.css';
import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Heading from "./Heading";
import List from "./List";

import Hello from './Hello.js';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Hello</h1>
                </header>
            </div>
        );
    }
}



// function App() {
//     return <div>
//         <Heading/>
//     </div>
// }

export default App;
