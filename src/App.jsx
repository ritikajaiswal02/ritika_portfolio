import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Achievements from './components/Achievements/Achievements'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import MLProjectsPage from './pages/MLProjectsPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Header />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Achievements />
            <Contact />
            <Footer />
          </div>
        } />
        <Route path="/ml-projects" element={<MLProjectsPage />} />
      </Routes>
    </Router>
  )
}

export default App
