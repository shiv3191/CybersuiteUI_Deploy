import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Cards from './Components/Cards'
import Team from './Components/Team'
import Contact from './Components/Contact'
import Footer from './Components/footer'
import About from './Components/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Cards/>
      <About/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
