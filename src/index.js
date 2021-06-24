import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import './index.css';
// Array of Objects
const books = [
    {
        id: 1,
        img: "https://pbs.twimg.com/profile_images/1197056293963489280/rImVimA8_400x400.jpg",
        title: 'My Hero',
        author: 'Kirashima'
    },
    {
        id: 2,
        img: "https://i.pinimg.com/564x/8f/d7/a4/8fd7a404f715702524fab9ca3a48e0e9.jpg",
        title: 'My Hero',
        author: 'Todoroki'
    },
    {
        id: 3,
        img: "https://i.pinimg.com/474x/e2/89/ee/e289eef59c98ceaaaa6909bc00a7655e.jpg",
        title: 'My Hero',
        author: 'Bakugo'
    },
]

function BookList() {
    return (
        <section className='book-list'>
            {books.map((book) => {
                return (
                    <Book key={book.id} {...book}>
                    </Book>)
            })}
        </section>
    );
}

// pass props to Book function (destructure)
const Book = ({img, title, author}) => {
    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = () => {
        alert('Hello')
    }
    const complexExample = (e) => {
        console.log(author)
    }
    return (
        <article className='book' onMouseOver={() => {
        console.log(title);
        }}>
            <img src={img} alt='My Hero'/>
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>reference example</button>
            <button type="button" onClick={() => complexExample(author)}>more complex example</button>
        </article>
    )
};

ReactDOM.render(<BookList/>, document.getElementById('root'));

