// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Proker from './Pages/Proker'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/proker" element={<Proker/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
