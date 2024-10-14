import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from "./Components/Navbar"
import HomePage from './Components/HomePage'
import Search from './Components/Search'
import Dropdown from "./Components/Dropdown"
import CountryCard from './Components/CountryCard'

function App() {
  

  return (
    <>
    <div className='App'>
      <Navbar/>
      <HomePage>
        <div className='main-container'>
          <div className='filter-container'>
            <Search />
            <Dropdown />
        
          </div>
          <CountryCard />
        </div>
        
        
      </HomePage>
    </div>
    
      
     
      
    </>
  )
}

export default App
