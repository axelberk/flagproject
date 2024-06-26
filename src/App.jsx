import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from "./Components/Navbar"
import HomePage from './Components/HomePage'
import Search from './Components/Search'
import Dropdown from "./Components/Dropdown"

function App() {
  

  return (
    <>
    <div className='App'>
      <Navbar/>
      <HomePage>
        <Search/>
        <Dropdown />
      </HomePage>
    </div>
    
      
     
      
    </>
  )
}

export default App
