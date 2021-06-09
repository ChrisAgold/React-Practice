import React from "react";
import Card from "./Card.jsx"

function App() {
    return (
        <div>
            <Card
                name="Kirishima"
                img="circle-img"
                src="https://www.anime-planet.com/images/characters/eijiro-kirishima-66853.jpg"
                alt="avatar_img"
                tel="+123 456 789"
                email="k@kiri.com"
            />
        </div>
    );
}

export default App;
