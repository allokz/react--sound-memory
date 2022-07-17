import React, { useState } from 'react';
import './GameSettings.css';

export function GameSettings(props) {


    return (
        <section id='game-settings'>
            <h2>Set up new Game</h2>
            <label htmlFor='game-select' >Choose a type of game</label>
            <select name='games' id='game-select' onChange={handleSelectChange} >
                <optgroup label='Memory'>
                    <option value='image'>Image Memory</option>
                    <option value='music' disabled>Music Memory</option>
                </optgroup>
            </select>

            <br/>
            <label htmlFor='number-of-cards'>Number of Cards</label>
            <input id='number-of-cards' type='range' min={numberOfCardsMin} max={numberOfCardsMax} step='2' onChange={handleInputRangeChange} defaultValue={numberOfCardsMin}></input>
            <span>{numberOfCards}</span>

            <br/>
            <label htmlFor='player1-name'>Name Player 1</label>
            <input id='player1-name' type='text' placeholder={player1Name} onChange={handleNameChange} ></input>

            <br/>
            <label htmlFor='player2-name'>Name Player 2</label>
            <input id='player2-name' type='text' placeholder={player2Name} onChange={handleNameChange} ></input>

            <br/>
            <button onClick={handleButtonClick}>Start new Game</button>

        </section>
    )
}