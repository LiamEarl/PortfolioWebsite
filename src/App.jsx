import React from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';

const App = () => {
  return (
    <div className='container'>
      <NavBar/>
      <Home/>
      <Skills/>
    </div>
  )
}

export default App;