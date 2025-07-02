import React from 'react';

function Card(props) {
    return (
        <div className="card">
            if (props.title === "Free Space") {
                <p>{props.title}</p>
            } else {
                <div>
                    <img src={props.image} alt={props.description} />
                    <p>{propss.title}</p>
                    <section className='links'>
                        <button><a href={props.website}>&#xF470;</a></button>
                        <button><a href={props.direction}>&#xF3E8;</a></button>
                    </section>
                </div>
            }
        </div>
    )
}

export default Card;