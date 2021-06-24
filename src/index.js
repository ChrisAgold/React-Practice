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
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid enim et exercitationem
                    facilis molestias odio odit pariatur, quis rem, sed tenetur totam. Ab accusantium dolore id labore
                    natus, suscipit!
                </p>
            </Book>
            <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
        </section>
    )
}

// pass props to Book function (destructure)
const Book = (props) => {
    const { img, title, author, children } = props
    return (
        <article className='book'>
            <img src={img} alt='My Hero'/>
            <h1>{title}</h1>
            <h4>{author}</h4>
            {children}
        </article>
    )
};

ReactDOM.render(<BookList/>, document.getElementById('root'));

