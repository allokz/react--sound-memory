import React, { useState, useEffect } from 'react';
import './MemoryImages.css';
import { Card } from '../Card/Card';

export function MemoryImages(props) {
    const [cards, setCards] = useState([]);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            [array[i], array[j]] = [array[j], array[i]]; // the same as: let temp = array[i]; array[i] = array[j]; array[j] = temp;
        }
        return array;
    }


    return (
        <section id='gameApp'>
            <div id='stats'>
                images memory
            </div>
            <div id='cards'>
                {
                    cards.map(card => {
                        <Card 
                            key={card.id}
                            card={card}
                        />
                    })
                }
            </div>
        </section>
    )
}