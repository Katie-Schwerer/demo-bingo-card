import React from 'react';

function SecretSpace(props) {
    return (
        <div className='secret-card'>
            <p>{props.name}</p>
        </div>
    )
}

export default SecretSpace;