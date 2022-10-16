import React, { useEffect } from 'react';
import './Card.css';
import './flip-card.css';
import { images } from './images/index';


export function Card(props) {
    // hide card image
    useEffect(() => {
        const card = document.getElementById(props.card.id);

        if (props.visibleCards.includes(props.card)) {
            console.log("if true");
            card.classList.add("clicked");
            card.style.cursor = "default";
        } else {
            console.log("if false");
            card.classList.remove("clicked");
            card.style.cursor = "pointer";
        }
    });

    // hide whole card
    useEffect(() => {
        const card = document.getElementById(props.card.id);

        if (props.solvedCards.includes(props.card)) {
            // card.style.visibility = "hidden";
            card.classList.add('remove');
            card.style.cursor = "default";
        } else {
            //card.style.visibility = "visible";
            card.classList.remove('remove');
            card.style.cursor = "pointer";
        }
    });

    const handleClick = () => {
        console.log("handleClick");
        props.addVisibleCard(props.card);
    };

    return (
        <div
            className="card flip-card"
            id={props.card.id}
            onClick={handleClick}
        >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    {/* plain color, same for all cards */}
                </div>
                <div className="flip-card-back">
                    {/* specific image, same for two cards */}
                    <img
                        src={images[props.card.image]}
                        alt="Background of the memory card."
                    />
                </div>
            </div>
        </div>
    );
}