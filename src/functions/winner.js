import { useState } from 'react'
import data from '../data/appData'

const newRandom = (modeGame)=>{
    const dataGame = modeGame === 'Normal' ? data.slice(0,3).map(e=>({...e})) : data
    const randomChoice = dataGame[Math.floor(Math.random()*dataGame.length)]
    return randomChoice
}

export const useWinner = (modeGame,user, handleScore)=>{
    const [winner, setWinner]=useState(null)
    const [randomPlayer, setRandomPlayer]=useState(null)
    const index = data.findIndex((e)=>e.name===user)
    const userBeats = index < 0? []: data[index].beats
    const delayPlay = (randomName, randomBeats)=>{
        const userBeatsRandom = userBeats.includes(randomName)
        const randomBeatsUser = randomBeats.includes(user)
        if( (userBeatsRandom && randomBeatsUser) || (!userBeatsRandom && !randomBeatsUser) ){
            setWinner('Draw')
        }else if(userBeatsRandom){
            setWinner('You Win')
            handleScore()
        }else{
            setWinner('You Lose')
        }
    }
    const playOne =()=>{
        const newGame = newRandom(modeGame)
        const randomName = newGame.name
        const randomBeats = newGame.beats
        setRandomPlayer(newGame)
        setTimeout(()=>{
            delayPlay(randomName, randomBeats)
        }, 1000)
    }

    return { randomPlayer,winner, playOne}
}