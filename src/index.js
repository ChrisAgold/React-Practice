import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import './index.css';
// Variables
const firstBook = {
    img: "https://pbs.twimg.com/profile_images/1197056293963489280/rImVimA8_400x400.jpg",
    title: 'My Hero',
    author: 'Kirashima'
}

const secondBook = {
    img: "https://i.pinimg.com/564x/8f/d7/a4/8fd7a404f715702524fab9ca3a48e0e9.jpg",
    title: 'My Hero',
    author: 'Todoroki'
}

function BookList() {
    return (
        <section className='book-list'>
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
            <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
        </section>
    )
}

const Book = (props) => {
    return (
        <article className='book'>
            <img src={props.img} alt='My Hero'/>
            <h1>{props.title}</h1>
            <h4>{props.author}</h4>
        </article>
    )
};

ReactDOM.render(<BookList/>, document.getElementById('root'));

