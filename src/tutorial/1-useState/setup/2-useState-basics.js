import React, {useState} from 'react';

const UseStateBasics = () => {

    // STATE
    const [text, setText] = useState('title');

// Function
    const handleClick = () => {
        if(text === 'title') {
            setText('こんにちは')
        } else {
            setText('title')
        }
    }

    return (
        <>
            <h1>{text}</h1>
            <button className="btn" onClick={handleClick}>Change Title</button>
        </>
    )
};

export default UseStateBasics;
