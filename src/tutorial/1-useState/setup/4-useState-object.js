import React, {useState} from 'react';

const UseStateObject = () => {
    // STATE
    const [person, setPerson] = useState({
        name: 'peter',
        age: 24,
        message: 'random message',
    })

// BUTTON FUNCTION (SPREAD OPERATOR EXAMPLE)******************************
    const changeMessage = () => {
        setPerson({...person, message: 'hello world'})
    }

    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className="btn" onClick={changeMessage}>
                change message
            </button>
        </>
    );
};

export default UseStateObject;
