import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blogs from '../Blogs/Blogs'
import Contact from '../Contact/Contact'
import Gohome from '../GoHome/Gohome'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Products from '../Products/Products'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import './App.css'
const App = () => {
  return ( 
      <BrowserRouter>
  <div>
    <Navbar/>
    <Route exact path='/' component={Home}/>
    <Route path='/skills' component={Skills}/>
    <Route path='/projects' component={Projects}/>
    <Route path='/products' component={Products}/>
    <Route path='/blogs' component={Blogs}/>
    <Route path='/contact' component={Contact}/>
    <Gohome/>
  </div>
      </BrowserRouter>
    )
}

export default App