import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import DashBoard from './DashBoard'

function Routecompo() {
  return (
    <div>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/register" element ={<Register/>}/>
        <Route path="/dashboad" element ={<DashBoard/>}/>
      </Routes>
    </div>
  )
}

export default Routecompo
