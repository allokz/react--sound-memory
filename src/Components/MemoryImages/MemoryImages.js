import React, { useState, useEffect } from 'react';
import './MemoryImages.css';
import { Card } from '../Card/Card';

export function MemoryImages(props) {
    const [cards, setCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState([]);
    const [solvedCards, setSolvedCards] = useState([]);
    const [activePlayer, setActivePlayer] = useState(1);
    const [namePlayer1, setNamePlayer1] = useState('Player 1');
    const [scorePlayer1, setScorePlayer1] = useState(0);
    const [namePlayer2, setNamePlayer2] = useState('Player 2');
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
        setCards(shuffle(array));
    }

    function addVisibleCard(cardObj) {
        console.log('addVisibleCard');
        if (!visibleCards.includes(cardObj) && visibleCards.length < 2) {
            setVisibleCards(prev => [...prev, cardObj]);
        }
    }

    const handleClick = () => {
        createCards(props.numberOfCards);
        setVisibleCards([]);
        setActivePlayer(1);
        setScorePlayer1(0);
        setScorePlayer2(0);
        setSolvedCards([]);
    }

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
            <h2>Image Memory</h2>
            <div id='stats'>
                <div className='playerbox'>
                    <div className='playername'>
                        <h3>{namePlayer1} {activePlayer === 1 ? 'has the turn.' : ''}</h3>
                        <button title='Edit Player Name'></button>
                    </div>
                    <p>Score: {scorePlayer1}</p>
                </div>
                <div className='playerbox'>
                    <div className='playername'>
                        <h3>{namePlayer2} {activePlayer === 2 ? 'has the turn.' : ''}</h3>
                        <button title='Edit Player Name'></button>
                    </div>
                    <p>Score: {scorePlayer2}</p>
                </div>
                
                <button className='btn-new-game' onClick={handleClick}>
                    New Game
                </button>
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