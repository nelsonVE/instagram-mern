import React, {useEffect, createContext, useReducer, useContext} from 'react';
import NavBar from './components/Navbar'
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Signin from './components/Signin'
import Signup from './components/Signup'
import CreatePost from './components/CreatePost'
import './App.css'
import {reducer, initialState } from './reducers/userReducer'

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const {state, dispatch} = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER", payload: user})
    } else {
      history.push('/signin')
    }
  },[])

  return(
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/home" exact>
        <Home />
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
      <Route path="/create">
        <CreatePost />
      </Route>
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{state, dispatch}}>
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;
