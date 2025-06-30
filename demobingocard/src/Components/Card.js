import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <p>{props.title}</p>
        </div>
    )
}

export default Card;