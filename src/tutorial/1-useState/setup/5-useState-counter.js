import React, {useState} from 'react';

const UseStateCounter = () => {
    // STATE
    const [value, setValue] = useState(0)
    // RESET FUNCTION
    const reset = () => {
        setValue(0)
    }

    const complexIncrease = () => {
        setTimeout(()=>{
            // setValue(value + 1)
            setValue((prevState)=> {
                return prevState + 1;
            })
        },2000)
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

            <section style={{margin: '4rem 0'}}>
                <h2>COMPLEX COUNTER</h2>
                <h1>{value}</h1>
                <button className="btn" onClick={complexIncrease}>INCREASE Later</button>
            </section>
        </>
    );
};

export default UseStateCounter;
