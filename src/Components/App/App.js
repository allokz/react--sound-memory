import React, { useState, useEffect } from 'react';
import './App.css';
import newGameIcon from './new-game.png';
import { PlayingField } from '../PlayingField/PlayingField';


function App() {
    const numberOfCards = 20;
    const [cards, setCards] = useState([]);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            [array[i], array[j]] = [array[j], array[i]]; // the same as: let temp = array[i]; array[i] = array[j]; array[j] = temp;
        }
        return array;
    }

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

    const handleClick = () => {
        setCards(createCardDeck(numberOfCards));
    }

    const setVisibility = (cardId, value) => {
        const newCards = cards;
        const cardToChangeIndex = newCards.findIndex(card => card.id === cardId);
        let cardToChange = newCards.find(card => card.id === cardId);
        cardToChange.visibility = value;
        newCards[cardToChangeIndex] = cardToChange;
        setCards(newCards);
    }

    return (
        <div className="App">
            <header>
                <h1>Sound Memory</h1>
                <div>
                    <button onClick={handleClick}>
                        <img src={newGameIcon} alt='Reset icon' />
                        New Game
                    </button>
                </div>
            </header>
            <main>
                <PlayingField cards={cards} setVisibility={setVisibility} />
            </main>
        </div>
    );
}

export default App;
