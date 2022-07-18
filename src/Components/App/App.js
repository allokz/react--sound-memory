import React, { useState } from 'react';
import './App.css';
import { GameSettings } from '../GameSettings/GameSettings';
import { MemoryImages } from '../MemoryImages/MemoryImages';



function App() {
    const [activeGame, setActiveGame] = useState(null);
    const [numberOfCards, setNumberOfCards] = useState(0);
    const [player1Name, setPlayer1Name] = useState(null);
    const [player2Name, setPlayer2Name] = useState(null);

    const startNewGame = (gameType, cards, player1, player2) => {
        setActiveGame(gameType);
        setNumberOfCards(cards);
        setPlayer1Name(player1);
        setPlayer2Name(player2);

        if (gameType === 'image') {
            document.getElementById('imageMemory').classList.toggle('hidden');
            document.getElementById('settings').classList.toggle('hidden');
        } else if (gameType === 'music') {
            setActiveGame(musicMemory);
        }
    }

    const switchGameAndSettings = () => {
        if (activeGame === 'image') {
            document.getElementById('imageMemory').classList.toggle('hidden');
            document.getElementById('settings').classList.toggle('hidden');
        } else if (activeGame === 'music') {
            setActiveGame(musicMemory);
        }
    }

    const musicMemory = (
        <p>music</p>
    )

    return (
        <div className="App">
            <header>
                <h1>Memory</h1>
            </header>
            <main>
                <div id='settings' className=''>
                    <GameSettings
                        startNewGame={startNewGame}
                    />
                </div>
                <div id='imageMemory' className='hidden'>
                    <MemoryImages
                        numberOfCards={numberOfCards}
                        player1={player1Name}
                        player2={player2Name}
                        switchToSettings={switchGameAndSettings}
                    />
                </div>
            </main>
        </div>
    );
}

export default App;
