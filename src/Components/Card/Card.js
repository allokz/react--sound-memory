import React, { useState, useEffect } from 'react';
import './Card.css';
import { images } from './images/index';


export function Card(props) {

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
    }, [props.visibleCards]);


    const handleClick = () => {
        console.log('handleClick');
        props.addVisibleCard(props.card);
    }

    return (
        <div className='card' id={props.card.id} onClick={handleClick} >
             <img src={images[props.card.image]} />
        </div>
    )
}