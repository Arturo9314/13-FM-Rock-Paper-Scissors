import { useEffect, useState } from "react"
import Score from "./components/Score"
import StepOne from "./components/StepOne"
import StepTwo from "./components/StepTwo"
import './styles/App.css'
import { Route, Routes, useNavigate } from "react-router-dom"
import Mode from "./components/Mode"
function App() {
  const [user, setUser]= useState(null)
  const savedScore = localStorage.getItem('score') ?JSON.parse(localStorage.getItem('score')) : 0

  const [score, setScore]= useState(savedScore)
  const [modeGame, setModeGame] = useState('Normal')
  const navigate = useNavigate();
  const handleMode = (mode)=>{
    setModeGame(mode)
  }
  const handleScore = ()=>{
    setScore(score+1)
  }
  const handleClick = (name)=>{
    setUser(name)
    const board = document.getElementById('board-type')
    board.classList.add('rotate')
    setTimeout(()=>{
      navigate('/play')
      board.classList.remove('rotate')
    }, 1500)
  }

  useEffect(()=>{
    localStorage.setItem('score', JSON.stringify(score))
  }, [score])

  return (
    <>
      <Score score={score} modeGame={modeGame}/>
      <Routes>
        <Route index path="/" element={<Mode handleMode={handleMode}/>}/>
        <Route path="/new_game" element={<StepOne modeGame={modeGame} handleClick={handleClick}/>}/>
        <Route path="/play" element={<StepTwo modeGame={modeGame} handleScore={handleScore} user={user}/>}/>
      </Routes>
    </>
  )
}

export default App
