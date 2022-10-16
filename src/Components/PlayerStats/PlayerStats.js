import React, { useState } from 'react';
import './PlayerStats.css';
import iconEdit from './edit-48.png';
import iconDone from './done-48.png';

export function PlayerStats(props) { // props: playerId, activePlayer, score
    const [playerName, setPlayerName] = useState('Player ' + props.playerId);

    const inputId = 'input-' + props.playerId;
    const playerNameId = 'player-' + props.playerId + '-name';
    const editImageId = 'edit-' + props.playerId;
    const doneImageId = 'done-' + props.playerId;

    const handleClick = () => {
        // toggle input and player name
        document.getElementById(inputId).classList.toggle('hidden');
        document.getElementById(playerNameId).classList.toggle('hidden');

        // toggle button img
        document.getElementById(editImageId).classList.toggle('hidden');
        document.getElementById(doneImageId).classList.toggle('hidden');
    }

    const handleChange = (event) => {
        setPlayerName(event.target.value);
    }

    return (
        <section className='playerstats'>
            <div>
                <input
                    id={inputId} 
                    className='hidden' 
                    type='text'
                    value={playerName}
                    onChange={handleChange}
                ></input>
                <h3 id={playerNameId}>{props.playerName} {props.activePlayer === props.playerId ? 'has the turn.' : ''} </h3>
                <button title='Edit Player Name' onClick={handleClick}>
                    <img id={editImageId} className='edit-icon' src={iconEdit} alt='' />
                    <img id={doneImageId} className='done-icon hidden' src={iconDone} alt='' />
                </button>
            </div>
            <p>Score: {props.score} </p>
        </section>
    )
}