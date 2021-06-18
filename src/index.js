import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App";

function BookList() {
    return (
        <section>
            <Image/>
            <Title/>
            <Author/>
        </section>
    )
}

const Image = () => (
    <img src='https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED' alt=""/>
);

        const Title = () => <h1>Book</h1>;

const Author = () => <h4>Jim Scila</h4>



ReactDOM.render(<BookList />, document.getElementById("root"));











