import React from 'react';
import ReactDOM from 'react-dom';

// Nested components, React Tools

function BookList() {
    return (
        <section>
            <Book/>
        </section>
    )
}

const Book = () => {
    return (
        <article>
            <Image/>
            <Title/>
            <Author/>
        </article>)
};

const Image = () => (
    <img src="https://pbs.twimg.com/profile_images/1197056293963489280/rImVimA8_400x400.jpg"
         alt=''
    />
)

const Title = () => <h1>Hello</h1>;
const Author = () => (
    <h4 style={{color: '#617d98', fontSize: '0.75trm', marginTop: '0.25rem'}}>
        Kirashima
    </h4>
)
ReactDOM.render(<BookList/>, document.getElementById('root'));

