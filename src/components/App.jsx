import React from "react";

var isDone = false;

function strike() {
    isDone = true;
}

function unStrike() {
    isDone = false;
}

function App() {
    return (
        <div>
            <p id="strike">牛乳?</p>
            <p>ネコ</p>
            <button onClick={strike}>Change to strike through</button>
            <button onClick={unStrike}>Change back</button>
        </div>
    );
}

export default App;
