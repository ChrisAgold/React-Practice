import './App.css';
import React from "react";
import Heading from "./Heading";
import List from "./List";


// function App() {
//     let count = 5;
//
//     //get endpoint results
//     return (
//         <div className="App">
//             Donkey {count}
//             <Button color={'blue'} text={'submit'}/>
//         </div>
//     );
// }
//
// function Button(props) {
//     const text = props.text
//     const color = props.color
//
//     return (
//         <div style={{backgroundColor:color}} className="App">
//             {text}
//         </div>
//     );
// }

function App() {
    return <div>
        <Heading/>
        <List/>
    </div>
}

export default App;