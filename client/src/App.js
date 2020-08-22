import React from 'react';
import NavBar from './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Signin from './components/Signin'
import Signup from './components/Signup'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact>
        <Signup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </BrowserRouter>
  )
}

export default App;