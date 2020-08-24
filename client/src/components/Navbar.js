import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="z-depth-0">
            <div className="nav-wrapper navbar-white">
                <Link to="/" className="brand-logo left">Instamern</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/"><i class="small material-icons">home</i></Link></li>
                    <li><Link to="#"><i class="small material-icons">favorite_border</i></Link></li>
                    <li><Link to="/profile">JavaScript</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;