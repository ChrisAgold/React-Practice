import React, {useState, useEffect} from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

    // STATE
    const [size, setSize] = useState(window.innerWidth)

    // FUNCTION
    const checkSize = () => {
        setSize(window.innerWidth);
    }

// useEFFECT
    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('resize', checkSize);
        // evoke function once we exit useEffect
        // return ()=> {
        //     console.log('cleanup')
        //     window.addEventListener('resize',checkSize)
        // }
    },[])

    return (
        <>
            <h1>window</h1>
            <h2>{size} PX</h2>
        </>
    );
};

export default UseEffectCleanup;
