import React, {useState} from 'react';

const UseStateObject = () => {
    // STATE
    const [person, setPerson] = useState({
        name: 'peter',
        age: 24,
        message: 'random message',
    })

    // MULTIPLE STATE VALUES
    const [name, setName] = useState('peter')
    const [age, setAge] = useState(26)
    const [message, setMessage] = useState('random message')

// ******BUTTON FUNCTION (SPREAD OPERATOR EXAMPLE, PRESERVE OTHER VALUES IN OBJECT)****** //
    const changeMessage = () => {
        // setPerson({...person, message: 'hello world'})
        setMessage("Hello World")
    }

    return (
        <>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{message}</h3>
            <button className="btn" onClick={changeMessage}>
                change message
            </button>
        </>
    );
};

export default UseStateObject;
