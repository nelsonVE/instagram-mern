import React, { useContext } from 'react';
import './Navbar.css'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../App'

const NavBar = () => {
    const {state, dispatch} = useContext(UserContext);
    const history = useHistory();
    const renderList = () => {
        if(state){
            return [
                <li><Link to="/"><i className="small material-icons">home</i></Link></li>,
                <li><Link to="#"><i className="small material-icons">favorite_border</i></Link></li>,
                <li><Link to="/create"><i className="small material-icons">add_circle</i></Link></li>,
                <li><Link to="/profile">My profile</Link></li>,
                <li><Link 
                onClick={() => {
                        localStorage.clear()
                        dispatch({ type: "CLEAR" })
                        history.push('/signin')
                    }
                }><i className="small material-icons">exit_to_app</i></Link></li>
            ]
        } else {
            return [
                <li><Link to="/signin">SignIn</Link></li>,
            ]
        }
    };

    return (
        <nav className="z-depth-0">
            <div className="nav-wrapper navbar-white">
                <Link to={state ? "/" : "/signin"} className="brand-logo left">Instamern</Link>
                <ul id="nav-mobile" className="right">
                    {renderList()}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;