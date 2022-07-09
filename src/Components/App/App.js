import React, { useState, useEffect } from 'react';
import './App.css';
import newGameIcon from './new-game.png';
import { PlayingField } from '../PlayingField/PlayingField';
import { MemoryImages } from '../MemoryImages/MemoryImages';


function App() {
    const numberOfCards = 20;
    const [activeGame, setActiveGame] = useState(null);

    const imageMemory = (
        <MemoryImages />
    )

    const musicMemory = (
        <p>music</p>
    )

    /*
    function createCardDeck(numberOfCards) {
        const cardDeck = [];
        let imageId = -1;
        for (let i = 0; i < numberOfCards; i++) {
            if (i % 2 == 0) {
                imageId++;
            }
            cardDeck.push({
                id: i,
                image: imageId,
                visibility: 'hidden'
            });
        }
        return shuffle(cardDeck);
    }

    

    const setVisibility = (cardId, value) => {
        const newCards = cards;
        const cardToChangeIndex = newCards.findIndex(card => card.id === cardId);
        let cardToChange = newCards.find(card => card.id === cardId);
        cardToChange.visibility = value;
        newCards[cardToChangeIndex] = cardToChange;
        setCards(newCards);
    }
    */

    return (
        <div className="App">
            <header>
                <h1>Memory</h1>
                <div>
                    <button onClick={() => setActiveGame(imageMemory)}>
                        Images
                    </button>
                    <button onClick={() => setActiveGame(musicMemory)}>
                        Music
                    </button>
                </div>
            </header>
            <main>
                {activeGame}
            </main>
        </div>
    );
}

export default App;
