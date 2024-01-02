import { useState } from 'react';
import './App.css'

function App() {
  const [name, setName]=useState("React")
  console.log(name);
  function onClickHandler(){
    setName("Vite");
    console.log(name);
  }
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">{name}</div>
      <button onClick={onClickHandler}>click me !</button>
    </>
  )
}

export default App
