import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
    return (
        <div className="my-style">
            <h2>{props.name}</h2>
            <img
                src={props.img}
                alt="avatar"
            />
            <p>{props.tel}</p>
            <p>{props.email}</p>
        </div>
    );
}

ReactDOM.render(
    <div>
        <h1>My Contacts</h1>
        <Card name="Beyonce"
              img=""
              tel="+123 456 789" email="b@beyonce.com"/>
        <input id="fName"/>

        <Card
            name="Jack Bauer"
            img=""
            tel="7307676555"
            email="jack@gmail.com"
        />
    </div>,
    document.getElementById("root")
);
