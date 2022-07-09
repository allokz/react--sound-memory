import './App.css';
import newGameIcon from './new-game.png';
import { PlayingField } from '../PlayingField/PlayingField';


function App() {
    const numberOfCards = 20;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            [array[i], array[j]] = [array[j], array[i]]; // the same as: let temp = array[i]; array[i] = array[j]; array[j] = temp;
        }
        return array;
    }
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
