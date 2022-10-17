import React, { useState } from 'react';
import './Scoreboard.css';

export function Scoreboard(props) {

    return (
        <div className='scoreboard'>
            <div className='scoreboard-name'>
                <input
                    type='text'
                    className='hidden'
                ></input>
                <h3>{props.playerNames.player1}</h3>
                <button>
                    <img id='edit-1' className='edit-icon' src={iconEdit} alt='' />
                    <img id='done-1' className='done-icon hidden' src={iconDone} alt='' />
                </button>
            </div>

            <h2>{props.score.player1} : {props.score.player2}</h2>
            
            <div className='scoreboard-name'>
                <input
                    type='text'
                    className='hidden'
                ></input>
                <h3>{props.playerNames.player2}</h3>
                <button>
                    <img id='edit-2' className='edit-icon' src={iconEdit} alt='' />
                    <img id='done-2' className='done-icon hidden' src={iconDone} alt='' />
                </button>
            </div>
        </div>
    )
}