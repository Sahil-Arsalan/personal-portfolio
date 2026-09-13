import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/skills'
import Projects from './components/projects'
import Experience from './components/Experience'
import Contact from './components/contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App