import React from "react";
import Login from './Login.jsx'

var isLoggedIn = false;

const currentTime = new Date(2021, 6, 9).getHours();
console.log(currentTime);

function App() {
    return <div className="container"> {
        // isLoggedIn === true ? <h1>Hello</h1> : <Login/>
        // can also be written as this:
        // isLoggedIn ? <h1>Hello</h1> : <Login/>
        currentTime > 12 && <h1>Why are you still working?</h1>
    }</div>;
}

export default App;
