import React, { useState } from 'react';
import './App.css';
import { MemoryImages } from '../MemoryImages/MemoryImages';


function App() {
    const numberOfCards = 20;
    const [activeGame, setActiveGame] = useState(null);

    const imageMemory = (
        <MemoryImages
            numberOfCards={numberOfCards}
        />
    )

    const musicMemory = (
        <p>music</p>
    )

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
