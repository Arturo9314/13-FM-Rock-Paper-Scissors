import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Mode({handleMode}) {
  const navigate = useNavigate()  
  const handleClick = (e)=>{
    handleMode(e.target.textContent)
    navigate('/new_game')
  }
  return (
    <section id='mode'>
        <button onClick={handleClick} className='mode-btn circle'>Normal</button>
        <button onClick={handleClick} className='mode-btn circle'>Extend</button>
    </section>
  )
}
