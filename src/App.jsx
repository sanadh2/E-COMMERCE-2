import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navigation/Navbar';
import Home from './Components/Navigation/pages/Home';
import About from './Components/Navigation/pages/About';
import Login from './Components/Navigation/login/Login';
import Signup from './Components/Navigation/sign-up/Signup';
import { Routes, Route } from 'react-router-dom';
const App=()=> {
  
  return (
    <>
     <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path="/about"  element={<About/>} />
        </Route>
     </Routes>
    </>
  )
}

export default App; 
