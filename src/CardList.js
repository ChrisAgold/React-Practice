import React from 'react';
import Card from "./Card";
import {robots} from "./robots";

// Loop through all robots in object array
const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card key={i}
                              id={robots[i].id}
                              name={robots[i].name}
                              email={robots[i].email}/>
                    );
                })
            }
        </div>
    );
}
export default CardList;
