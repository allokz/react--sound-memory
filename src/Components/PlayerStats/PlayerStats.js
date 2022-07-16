import React, { useState } from 'react';
import './PlayerStats.css';

export function PlayerStats(props) {

    return (
        <section className='playerstats'>
            <div>
                <input
                    id={inputId} 
                    className='hidden' 
                    type='text'
                    placeholder={playerName}
                    value={playerName}
                    onChange={handleChange}
                ></input>
                <h3 id={playerNameId}>{playerName} {props.activePlayer === props.playerId ? 'has the turn.' : ''} </h3>
                <button title='Edit Player Name' onClick={handleClick}>
                    <img id={editImageId} className='edit-icon' src={iconEdit} alt='' />
                    <img id={doneImageId} className='done-icon hidden' src={iconDone} alt='' />
                </button>
            </div>
            <p>Score: {props.score} </p>
        </section>
    )
}