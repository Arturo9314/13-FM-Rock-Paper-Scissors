import React from 'react'
import rulesBonus from '../assets/image-rules-bonus.svg'
import rules from '../assets/image-rules.svg'
export default function Modal({modeGame}) {
    const toogleModal = ()=> document.body.classList.remove('open')
    return (
    <>
    <div className='background'
        onClick = {toogleModal}>
    </div>
    <section className='modal'>
        <figure className='modal-content'>
            <h3>Rules</h3>
            <img src={modeGame === 'Normal'? rules : rulesBonus} alt='pentagon or triangle with info about the rules of rock-papper-scissors game or extend'/>
        </figure>
    </section>
    </>
  )
}
