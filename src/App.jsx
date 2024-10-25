import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from "./Components/Navbar/Navbar"
import HomePage from "./Components/HomePage/HomePage"
import CountryPage from "./Components/CountryPage/CountryPage"
import { ThemeProvider } from './Components/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className='App'>
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/country/:countrycode' element={<CountryPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>  
  )
}

export default App


