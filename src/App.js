import React from "react";
import Tweet from "./components/Tweet";
import ReactDOM from "react-dom";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
    // JS Write Here
    const name = "Tech Boi";
    const message = "The tweet";

    return (
        <div>
            <h1>Hello</h1>
            <CreateTweet/>
            <TweetList name={name} message={message}/>
        </div>
    );
}

export default App;


