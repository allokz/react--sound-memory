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

    function createCards(numberOfCards) {
        const array = [];
        let imageId = -1;
        for (let i = 0; i < numberOfCards; i++) {
            if (i % 2 == 0) {
                imageId++;
            }
            array.push({
                id: i,
                image: imageId,
                visibility: 'hidden'
            });
        }
        setCards(shuffle(array));
    }


    return (
        <section id='gameApp'>
            <h2>Image Memory</h2>
            <div id='stats'>
                stats
                <br/>
                <button onClick={() => createCards(props.numberOfCards)}>
                    New Game
                </button>
            </div>
            <div id='cards'>
                {
                    cards.map(card => {
                        return <Card 
                            key={card.id}
                            card={card}
                        />
                    })
                }
            </div>
        </section>
    )
}