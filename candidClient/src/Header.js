import React from 'react';
import './Header.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home.js';



function Header() {
  return (
    <div className='header'>
      <nav className='navbar'>
        <a href='/Home'>Home</a>
        <a href='/Profile'>
          <span className='l2'>Login / Signup</span>
        </a>
      </nav>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/dashbord" element={<Students/>}/>
        </Routes>
      </Router>
    </div>
  )
}


export default Header;