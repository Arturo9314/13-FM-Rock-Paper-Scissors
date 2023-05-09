import React from 'react'
import icons from '../data/appData'
import BoardBTN from '../elements/BoardBTN'

export default function Board({modeGame,handleClick}) {
    const iconsMode = modeGame === 'Normal'? icons.slice(0,3).map(e=>({...e})) : icons
    const boardType = modeGame === 'Normal'? 'triangle-type' : 'pentagon-type'
    return (
    <section id='board' className='page-content'>
        <ul id='board-type' className={`${boardType}`}>
            {
                iconsMode.map((e)=>(
                    <li className={`${e.name}-btn circle ${boardType}-btn`} key={e.name}>{
                        <BoardBTN handleClick={handleClick} name={e.name} icon={e.icon}/>
                    }</li>
                ))
            }
        </ul>
    </section>
    )
}
