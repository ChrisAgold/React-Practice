import React, {useState, useEffect} from "react";
import Tweet from "./components/Tweet";
import ReactDOM from "react-dom";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
    // State
    const [name, setName] = useState("Techboi");
    const [textInput, setTextInput] = useState("");
    const [tweets, setTweets] = useState([]);


    return (
        <div>
            <CreateTweet textInput={textInput}
                         setTextInput={setTextInput}
                         tweets={tweets}
                         setTweets={setTweets}/>

            <TweetList name={name} tweets={tweets} setTweets={setTweets}/>
        </div>
    );
}

export default App;


