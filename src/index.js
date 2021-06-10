// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import animals, { useAnimals } from './data';

// Destructuring Arrays //
// console.log(animals);
const [cat, dog] = animals;
// console.log(cat);

//console.log(useAnimals(cat));

const [animal, makeSound] = useAnimals(cat);
console.log(animal);

// Destructuring Objects //
// const { name: catName, sound: catSound } = cat;
// console.log(catSound);

// if data is null add the value for the object
// const { name = "Fluffy", sound = "Purr" } = cat;
// console.log(name);

// destructure object
// const {name, sound, feedingRequirements: {food, water}} = cat;
// console.log(food);

// ReactDOM.render(
//     <table>
//         <tr>
//             <th>Brand</th>
//             <th>Top Speed</th>
//         </tr>
//         <tr>
//             <td>{tesla.model}</td>
//             <td>{teslaTopSpeed}</td>
//             <td>{teslaTopColour}</td>
//         </tr>
//         <tr>
//             <td>{honda.model}</td>
//             <td>{hondaTopSpeed}</td>
//             <td>{hondaTopColour}</td>
//         </tr>
//     </table>,
//     document.getElementById("root")
// );
