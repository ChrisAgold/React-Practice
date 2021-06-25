import React, {useState} from 'react';

const UseStateCounter = () => {
    // STATE
    const [value, setValue] = useState(0)
    // RESET FUNCTION
    const reset = () => {
        setValue(0)
    }

    return (
        <>
            <section style={{margin: '4rem 0'}}>
                <h2>COUNTER</h2>
                <h1>{value}</h1>
                <button className="btn" onClick={() => setValue(value - 1)}>DECREASE</button>
                <button className="btn" onClick={reset}>RESET</button>
                <button className="btn" onClick={() => setValue(value + 1)}>INCREASE</button>
            </section>
        </>
    );
};

export default UseStateCounter;
