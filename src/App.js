import logo from './logo.svg';
import './App.css';

function App() {
    let count = 5;

    //get endpoimt resi;ts
    return (
        <div className="App">
            Donkey {count}
            <App2/>
        </div>
    );
}

function App2() {
    return (
        <div className="App">
            Hello World
        </div>
    );
}

export default App;
