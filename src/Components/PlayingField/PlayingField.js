import React from 'react';
import './PlayingField.css';
import { Card } from '../Card/Card';


export function PlayingField(props) {

    return (
        <section>
            <div id="game-info" className='playing-field'>
                {props.cards.length === 0 ? <p>Please hit 'New Game'</p> : (
                    <div>
                        <span>open cards: {openCards.map(card => {
                            return <span key={card}>{card}, </span>;
                        })}</span>
                        <span> ; </span>
                        <span>number of open cards: {numberOfOpenCards}</span>
                </div>
                )}
            </div>
            <div id="cards" className='playing-field'>
            {
                props.cards.map(card => {
                        return <Card 
                            key={card.id}
                            card={card}
                            incrementOpenCards={addOpenCard}
                            resetOpenCards={resetNumberOfOpenCards}
                            numberOfOpenCards={numberOfOpenCards}
                        />
                })
            }
            </div>
        </section>
    );
}