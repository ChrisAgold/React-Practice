import React from 'react';

const Tweet = (props) => {
    return (
        <div className="tweet">
            <h2>Name {props.author}</h2>
            <h3>The Tweet</h3>
            <button>Delete</button>
            <button>like</button>
        </div>
    );
}

export default Tweet;
