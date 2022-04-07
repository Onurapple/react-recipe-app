import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Details from '../pages/details/Details'
import About from '../pages/about/About'
import Login from '../pages/login/Login'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
            <Route path="/react-recipe-app/" element={<Login/>} />
            <Route path="/react-recipe-app/home" element={<Home/>} />
            <Route path="/react-recipe-app/about" element={<About/>} />
            <Route path="/react-recipe-app/details" element={<Details/>} />
            <Route path="*" element={<Login/>} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default AppRouter

