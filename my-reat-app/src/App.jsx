import { useState } from 'react';
import './App.css'
import Main from './components/Main/Main';
import PropsExemple from './components/PropsExemple/PropsExemple';

function App() {
  const [name, setName]=useState("React")
  console.log(name);
  function onClickHandler(test){
    setName("Vite");

    console.log("je proviens de l'enfant :", test)

    setName((prev)=>{return prev + " Vite"})
    console.log(name);
  }
  return (
    <>
      <header>
        Mini-projet React 
      </header>
      <Main/>
      <footer>
        Quentin GONNON - Isitech RPI D
      </footer>
    </>
  )
}

export default App
