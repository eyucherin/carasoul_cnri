import React, { useState, useEffect } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar'
import ControlButtons from './components/ControlButtons'
import Card from './components/Card'

function App() {
  let numberOfCards = 10

  const [count, setNum] = useState(0)

  const increase = () =>{
    setNum(count == numberOfCards ? count:count+ 1)
  }

  const decrease = () =>{
    setNum(count == 0 ? count: count-1)
  }

  return (
    <div className = "flex flex-col items-center justify-center h-screen">
      <ProgressBar num={count}/>
      <div className='w-[60%] flex justify-center border border-sky-500'>
        <ControlButtons buttonSymbol='<' buttonClickFunction = {decrease}/>
        <Card/>
        <ControlButtons buttonSymbol='>' buttonClickFunction = {increase}/>
      </div>
    </div>
  );
}

export default App;
