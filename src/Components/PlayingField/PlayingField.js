import React from 'react';
import './PlayingField.css';
import { Card } from '../Card/Card';


export function PlayingField(props) {

    return (
        <section id="playing-field">
            {
                props.cards.map(card => {
                    return <Card card={card} key={card.id} />
                })
            }
        </section>
    );
}