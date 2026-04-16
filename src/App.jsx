import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Service from './components/Service'
import Contact from './components/Contact'


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Service/>
      <Contact/>
    </div>
  )
}

export default App
