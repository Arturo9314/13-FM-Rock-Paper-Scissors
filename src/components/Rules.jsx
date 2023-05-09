import React from 'react'
import Modal from './Modal'
import { useNavigate } from 'react-router-dom'

export default function Rules({modeGame}) {
  const navigate = useNavigate()
  const toogleModal = ()=> document.body.classList.add('open')
  
  const handleMode = ()=>{
    navigate('/')
  }
  return (
    <>
    <footer id='rules-footer'>
      <button onClick={handleMode} id='mode-btn'>Mode</button>
      <button onClick={toogleModal} id='rules'>Rules</button>
    </footer>
    <Modal modeGame={modeGame} toogleModal={toogleModal}/>
    </>
  )
}
