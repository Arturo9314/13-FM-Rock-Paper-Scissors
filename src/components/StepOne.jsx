import React from 'react'
import Board from './Board'
import Rules from './Rules'
export default function StepOne({modeGame, handleClick}){
  return (
    <>
      <Board modeGame={modeGame} handleClick={handleClick}/>
      <Rules modeGame={modeGame}/>
    </>
  )
}
