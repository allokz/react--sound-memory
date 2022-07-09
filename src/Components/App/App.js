import './App.css';
import newGameIcon from './new-game.png';
import { PlayingField } from '../PlayingField/PlayingField';


function App() {
    const numberOfCards = 20;

    const generateCards = numberOfCards => {
        const cards = [];
        for (let i = 0; i < numberOfCards; i++) {
            cards.push({
                id: i,
                name: i
            });
        }
        return cards;
    }

    return (
        <div className="App">
            <header>
                <h1>Sound Memory</h1>
                <button>
                    <img src={newGameIcon} alt='Reset icon' />
                    New Game
                </button>
            </header>
            <main>
                <PlayingField cards={generateCards(20)} />
            </main>
        </div>
    );
}

export default App;
