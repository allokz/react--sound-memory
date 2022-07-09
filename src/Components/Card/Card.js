import React from 'react';
import './Card.css';
import { images } from './images/index';


export function Card(props) {
    const handleClick = () => {
        if (props.numberOfOpenCards < 2 && visibility === 'hidden') {
            setVisibility('visible');
            props.incrementOpenCards(props.card.id);
        }
    }

    return (
        <div className='card' id={props.card.id} onClick={handleClick} >
             <img src={images[props.card.image]} />
        </div>
    )
}