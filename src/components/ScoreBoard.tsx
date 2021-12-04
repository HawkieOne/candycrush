import React from 'react'

export default function ScoreBoard({ score } : {score:any}) {
    return (
        <div className="moves-board">
            <h2>Score: {score}</h2>
        </div>
    )
}
