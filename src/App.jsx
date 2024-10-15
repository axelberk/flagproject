import React from 'react'
import ReactDOM from "react-dom/client"
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from "./Components/Navbar"
import HomePage from "./Components/HomePage"
import Search from "./Components/Search"
import Dropdown from "./Components/Dropdown"
import CountryCard from "./Components/CountryCard"
import CountryPage from "./Components/CountryPage"

function App() {
  

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route
          path='/'
          element={
          <HomePage>
            <div className='main-container'>
              <div className='filter-container'>
                <Search />
                <Dropdown />
            
              </div>
              <CountryCard />
            </div>
          </HomePage>
        }
        />
        <Route path='/country/:countrycode' element={<CountryPage />}/>
        
        </Routes>
      </div>
    </BrowserRouter>  
  )
}

export default App
