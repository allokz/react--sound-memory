import React, { useState, useEffect } from 'react';
import './MemoryImages.css';
import { PlayerStats } from '../PlayerStats/PlayerStats';
import { Card } from '../Card/Card';
import iconSettings from './settings-48.png';
import iconPlay from './play-48.png';

export function MemoryImages(props) { // props: numberOfCards, player1, player2
    const [cards, setCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState([]);
    const [solvedCards, setSolvedCards] = useState([]);
    const [activePlayer, setActivePlayer] = useState(1);
    const [scorePlayer1, setScorePlayer1] = useState(0);
    const [scorePlayer2, setScorePlayer2] = useState(0);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            [array[i], array[j]] = [array[j], array[i]]; // the same as: let temp = array[i]; array[i] = array[j]; array[j] = temp;
        }
        return array;
    }

    function createCards(numberOfCards) {
        const array = [];
        let imageId = -1;
        for (let i = 0; i < numberOfCards; i++) {
            if (i % 2 === 0) {
                imageId++;
            }
            array.push({
                id: i,
                image: imageId
            });
        }
        return shuffle(array);
    }

    function addVisibleCard(cardObj) {
        console.log('addVisibleCard');
        if (!visibleCards.includes(cardObj) && visibleCards.length < 2) {
            setVisibleCards(prev => [...prev, cardObj]);
        }
    }

    const handlePlayAgain = () => {
        setCards(createCards(props.numberOfCards));
        setVisibleCards([]);
        setActivePlayer(1);
        setScorePlayer1(0);
        setScorePlayer2(0);
        setSolvedCards([]);
    }

    const handleOpenSettings = () => {
        props.switchToSettings();
    }

    useEffect(() => {
        setCards(createCards(props.numberOfCards));
    }, [props.numberOfCards])

    // hide cards again
    useEffect(() => {
        let hideCards;
        if (visibleCards.length === 2) {
            hideCards = setInterval(() => setVisibleCards([]), 3000);
        }
        return () => clearInterval(hideCards);
    }, [visibleCards]);

    
    useEffect(() => {
        if (visibleCards.length === 2) {

            // check if cards have the same image
            if (visibleCards[0].image === visibleCards[1].image) {

                if (activePlayer === 1) {
                    setScorePlayer1(prev => prev + 1);
                } else if (activePlayer === 2) {
                    setScorePlayer2(prev => prev + 1);
                }

                const intervalHideCards = setInterval(() => {
                    setSolvedCards(prev => [...prev, visibleCards[0], visibleCards[1]]);
                }, 3000);

                return () => clearInterval(intervalHideCards);

            } else {

                let newPlayer;
                if (activePlayer === 1) {
                    newPlayer = 2;
                } else {
                    newPlayer = 1;
                }
                
                const intervalSwitchPlayer = setInterval(() => {
                    setActivePlayer(newPlayer);
                }, 3000);
                return () => clearInterval(intervalSwitchPlayer);

            }
        }
    }, [visibleCards, activePlayer, solvedCards]);


    return (
        <section id='gameApp'>
            <div className='headline'>
                <h2>Image Memory</h2>
                <div>
                    <button onClick={handlePlayAgain}><img src={iconPlay} alt=''/>Play Again</button>
                    <button onClick={handleOpenSettings}><img src={iconSettings} alt=''/>Set up new Game</button>
                </div>
            </div>
            <div id='stats'>
                <PlayerStats
                    playerId={1}
                    playerName={props.player1} 
                    activePlayer={activePlayer}
                    score={scorePlayer1}
                />
                <PlayerStats
                    playerId={2}
                    playerName={props.player2}
                    activePlayer={activePlayer}
                    score={scorePlayer2}
                />
            </div>
            <div id='cards'>
                {
                    cards.map(card => {
                        return <Card 
                            key={card.id}
                            card={card}
                            visibleCards={visibleCards}
                            addVisibleCard={addVisibleCard}
                            solvedCards={solvedCards}
                        />
                    })
                }
            </div>
        </section>
    )
}