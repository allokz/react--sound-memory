import React, { useState, useEffect } from 'react';
import './Card.css';
import { images } from './images/index';


export function Card(props) {
    const [visibility, setVisibility] = useState('hidden');

    // switch visibility of image and the cursor style
    useEffect(() => {
        const card = document.getElementById(props.card.id);

        card.firstElementChild.style.visibility = visibility;

        if (visibility === 'visible') {
            card.style.cursor = 'default';
        } else {
            card.style.cursor = 'pointer';
        }

        // console.log('visibility of ' + props.card.id + ' = ' + visibility);
    }, [visibility]);

    const handleClick = () => {
        if (props.numberOfOpenCards < 2 && visibility === 'hidden') {
            setVisibility('visible');
            props.addOpenCard(props.card.id);
        }
    }

    return (
        <div className='card' id={props.card.id} onClick={handleClick} >
             <img src={images[props.card.image]} />
        </div>
    )
}