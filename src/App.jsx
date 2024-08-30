import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Companies from './components/Companies/Companies'
import Residence from './components/Residence/Residence'
import Value from './components/Value/Value'
import Contact from './components/Contact/Contact'
import GetStarted from './components/GetStarted/GetStarted'
import Footer from './components/Footer/Footer'
import Reference from './components/Reference/Reference'
const App = () => {
  return (
    <div>
     <Header />
     <Hero />
     <Companies />
     <Residence />
     <Value />
     <Contact />
     <GetStarted />
     <Footer />
     <Reference />
    </div>
  )
}

export default App
