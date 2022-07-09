import React from 'react';
import './Card.css';
import { images } from './images/index';


export function Card(props) {
    return (
        <div className='card' id={props.card.id} ></div>
    )
}