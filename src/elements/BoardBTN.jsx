import React from 'react'

export default function BoardBTN({handleClick, name, icon}) {
  const handleUser = ()=>{
    handleClick(name)
  }
  return (
    <button className='btn' onClick={handleUser}><img src={icon}/></button>
  )
}
