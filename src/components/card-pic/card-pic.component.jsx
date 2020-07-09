import React from 'react';

import './card-pic.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.prc.id}?set=set2&size=180x180`} />
        <h2>{props.prc.name}</h2>
        <p>{props.prc.email}</p>
    </div>
);