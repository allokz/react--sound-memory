import React, { useEffect } from 'react';
import './Card.css';
import { images } from './images/index';


export function Card(props) {

    // hide card image
    useEffect(() => {
        const card = document.getElementById(props.card.id);

        if (props.visibleCards.includes(props.card)) {
            console.log('if true');
            card.firstElementChild.style.visibility = 'visible';
            card.style.cursor = 'default';
        } else {
            console.log('if false');
            card.firstElementChild.style.visibility = 'hidden';
            card.style.cursor = 'pointer';
        }

    });


    // hide whole card
    useEffect(() => {
        const card = document.getElementById(props.card.id);

        if (props.solvedCards.includes(props.card)) {
            card.firstElementChild.style.visibility = 'hidden';
            card.style.visibility = 'hidden';
            card.style.cursor = 'default';
        } else {
            card.style.visibility = 'visible';
            card.style.cursor = 'pointer';
        }

    });


    const handleClick = () => {
        console.log('handleClick');
        props.addVisibleCard(props.card);
    }

    return (
        <div className='card' id={props.card.id} onClick={handleClick} >
             <img src={images[props.card.image]} alt='Background of the memory card.' />
        </div>
    )
}