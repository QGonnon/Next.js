import { useState } from 'react';
import './App.css'
import Profile from './components/Profile/Profile';

function App() {
  const [name, setName]=useState("React")
  console.log(name);
  function onClickHandler(){
    setName("Vite");
    setName((prev)=>{return prev + " Vite"})
    console.log(name);
  }
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">{name}</div>
      <button onClick={onClickHandler}>click me !</button>
      <Profile/>
    </>
  )
}

export default App
