import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Proker from './Pages/Proker'
import ScrollToTop from './Components/ScrollToTop' 

function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/proker" element={<Proker/>} />
        </Routes>
      <ScrollToTop />
      </Router>
    </>
  )
}

export default App
