import React, { useState, useEffect } from 'react';
import './Card.css';
import { images } from './images/index';


export function Card(props) {
    // const [visibility, setVisibility] = useState('hidden');

    // switch visibility of image and the cursor style
    useEffect(() => {
        const card = document.getElementById(props.card.id);

        card.firstElementChild.style.visibility = props.card.visibility;
        
        if (props.card.visibility === 'visible') {
            card.style.cursor = 'default';
        } else {
            card.style.cursor = 'pointer';
        }

        // console.log('visibility of ' + props.card.id + ' = ' + visibility);
    }, [props.card.visibility]);

    const handleClick = () => {
        if (props.numberOfOpenCards < 2 && props.card.visibility === 'hidden') {
            props.setVisibility(props.card.id, 'visible');
            props.addOpenCard(props.card.id);
        }
    }

    return (
        <div className='card' id={props.card.id} onClick={handleClick} >
             <img src={images[props.card.image]} />
        </div>
    )
}