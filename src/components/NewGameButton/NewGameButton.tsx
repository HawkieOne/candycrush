import React from 'react'
import './NewGameButton.css';

export default function NewGameButton( {newGame} : any) {
    return (
        <div>
            <button className="new-game-button" type="button" onClick={newGame}>New Game</button>
        </div>
    )
}
