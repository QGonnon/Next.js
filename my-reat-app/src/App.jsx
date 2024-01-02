import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

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
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
