import React, {useState} from 'react';

const CreateTweet = () => {
    // State
    const [textInput, setTextInput] = useState("");
    const [tweets, setTweets] = useState([]);

    // Functions
    const userInputHandler = (e) => {
        setTextInput(e.target.value)
    };

    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, textInput]);
        setTextInput("");
    };

    return (
        <form onSubmit={submitTweetHandler}>
            <textarea value={textInput} onChange={userInputHandler} cols="50" rows="5"/>
            <button>Submit</button>
            <h1 onClick={() => setTextInput("")}>{textInput}</h1>
        </form>
    );
}

export default CreateTweet;
