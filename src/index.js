import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import './index.css';
// Array of Objects
const books = [
    {
        img: "https://pbs.twimg.com/profile_images/1197056293963489280/rImVimA8_400x400.jpg",
        title: 'My Hero',
        author: 'Kirashima'
    },
    {
        img: "https://i.pinimg.com/564x/8f/d7/a4/8fd7a404f715702524fab9ca3a48e0e9.jpg",
        title: 'My Hero',
        author: 'Todoroki'
    }
]
const names = ['john', 'doe', 'susan']
const newNames = names.map((name) => {
    return <h1>{name}</h1>
});

function BookList() {
    return (
        <section className='book-list'>
            {newNames}
        </section>
    )
}

// pass props to Book function (destructure)
const Book = (props) => {
    const {img, title, author} = props
    return (
        <article className='book'>
            <img src={img} alt='My Hero'/>
            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>
    )
};

ReactDOM.render(<BookList/>, document.getElementById('root'));

