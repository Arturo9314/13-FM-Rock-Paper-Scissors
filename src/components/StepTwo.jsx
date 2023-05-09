import React, { useEffect } from 'react'
import data from '../data/appData'
import { useWinner } from '../functions/winner'
import { useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'
export default function StepTwo({modeGame, user, handleScore}) {
    
    const index = data.findIndex((e)=>e.name===user)
    const icon = index<0? '': data[index].icon
    const { randomPlayer, winner, playOne} = useWinner(modeGame, user, handleScore)
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/new_game')
    }
    useEffect(()=>{
        if(!user) navigate('/new_game')
        const timeoutId = setTimeout(()=>{
            playOne()
        }, 500)
        return ()=>clearTimeout(timeoutId)
    },[])
    return (
    <section id='play-section' className='page-content'>
        {index<0? '':
        <>
        <article className='container-game'>
            <h3 className='picked'>You Picked</h3>
            <figure className={`${user}-btn circle play`}>
                <div className='btn'>
                    <img src={icon} alt={user}/>
                </div>
            </figure>
        </article>
        <div id='result'>
            {winner && <>
                <p>{winner}</p> 
                <button className='play-btn' onClick={handleClick}>Play again</button>
                </>}
            {
                winner === 'You Win' && <Confetti initialVelocityY={0.1}/> 
            }
        </div>
        <article className='container-game'>
            <h3 className='picked'>The House Picked</h3>
            {randomPlayer &&
            <figure className={`${randomPlayer.name}-btn circle play`} >
                <div className='btn'>
                    <img src={randomPlayer.icon} alt={randomPlayer.name}/>
                </div>
            </figure>
            }
        </article>
        </>}
    </section>
  )
}
