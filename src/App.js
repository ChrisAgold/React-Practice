import React, {useState, useEffect} from "react";
import Tweet from "./components/Tweet";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";
import './styles/App.css';

function App() {

    // State
    const [name, setName] = useState("Techboi");
    const [textInput, setTextInput] = useState("");
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        console.log("we run a function yay")
    },[textInput]);

    return (
        <div>
            <div>Twitter Light</div>
            <CreateTweet textInput={textInput}
                         setTextInput={setTextInput}
                         tweets={tweets}
                         setTweets={setTweets}/>

            <TweetList name={name} tweets={tweets} setTweets={setTweets}/>
        </div>
    );
}

export default App;


