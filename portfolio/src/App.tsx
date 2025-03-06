import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import MainContent from './components/Maincontent'

function App() {
  return (
    <div className='container'>
      <AboutMe></AboutMe>
      <MainContent></MainContent>
    </div>
  )
}

export default App