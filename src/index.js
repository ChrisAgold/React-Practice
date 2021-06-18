import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App";

const firstBook = {
    img: 'https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED',
    title: 'I Love Potatoes',
    author: 'sv3rige'
}

const secondBook = {
    img: 'https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED',
    title: 'I Love Tea',
    author: 'Lee'
}

function BookList() {
    return (
        <section>
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
            <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
        </section>
    )
}

const Book = (props) => {
    return (
        <article>
            <img src={props.img}/>
            <h1>{props.title}</h1>
            <h4>{props.author}</h4>
        </article>
    )
}


ReactDOM.render(<BookList/>, document.getElementById("root"));











