import logo from '../../logo.svg';
import './App.css';
import newGameIcon from './new-game.png';

function App() {
  return (
    <div className="App">
                <h1>Sound Memory</h1>
                <button>
                    <img src={newGameIcon} alt='Reset icon' />
                    New Game
                </button>
      </header>
    </div>
  );
}

export default App;
