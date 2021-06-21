import React from "react";
import Tweet from "./components/Tweet";
import ReactDOM from "react-dom";
import CreateTweet from "./components/CreateTweet";

function App() {
    // JS Write Here
    const name = "Tech Boi";

    return (
        <div>
            <h1>Hello</h1>
            <CreateTweet />
            <Tweet author="Jonas Music"/>
        </div>
    );
}

export default App;


