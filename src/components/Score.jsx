import React from 'react'
import data from '../data/appData'
export default function Score({score, modeGame}) {
    const dataMode = modeGame === 'Normal' ? data.slice(0,3).map(e=>({...e})) : data
    return (
        <header>
            <h1 id='mode-names'>
                <ul>
                    { dataMode.map((e)=>(
                        <li key={e.name}>{e.name}</li>
                    ))}
                </ul>
            </h1>
            <div id='score'>
                <h2>Score</h2>
                <p>{score}</p>
            </div>
        </header>
    )
}
