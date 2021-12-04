import React from 'react'

export default function ScoreBoard({ moves } : {moves:any}) {
    return (
        <div className="score-board">
            <h2>Moves: {moves}</h2>
        </div>
    )
}
