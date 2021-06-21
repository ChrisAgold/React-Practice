import React, {useState, useEffect} from "react";
import Tweet from "./components/Tweet";
import ReactDOM from "react-dom";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
    const name = 'TechBoi';
    const message = 'Hello';

    return (
        <div>
            <CreateTweet/>
            <TweetList name={name} message={message}/>

        </div>
    );
}

export default App;


