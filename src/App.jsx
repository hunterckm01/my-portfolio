import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Home from './pages/Home'
import About from './pages/About'
import React from 'react'
import Navbar from './components/Navbar'
import FooterTab from './components/FooterTab'

function App() {

  return (
    <>
    <div className='w-full h-full bg-slate-950'>

    <header className='w-full  '>
      <Navbar/>
    </header>
      
    <main className='w-full h-full'>
        <Home/>
        <Project/>
        <About/>
        <Contact/>
    </main>
    
    <footer className='w-full h-full'>
      <FooterTab/>  
    </footer>
    </div>

        {/* <div>sdfsdf</div> */}
      <Routes>
          <Route path = "/Home" element = {<Home/>}></Route>
          <Route path = "/project" element = {<Project/>}></Route>
          <Route path = "/about" element = {<About/>}></Route>
          <Route path = "/contact" element = {<Contact/>}></Route>
      </Routes>
    </>
  )
}

export default App
