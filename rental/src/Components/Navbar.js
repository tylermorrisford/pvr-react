import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return(
        <div className="navbar-fixed">
        <nav className="white">
            <div className="nav-wrapper">
                <NavLink exact to="/" class="brand-logo"><img alt="logo" src="/assets/images/pvr-logo2.png" /></NavLink>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><NavLink className="nav-links" to="/destinations">Destinations</NavLink></li>
                    <li><NavLink className="nav-links" to="/all-rentals">All Rentals</NavLink></li>
                    <li><NavLink className="nav-links" to="/about">About</NavLink></li>
                    <li><NavLink className="nav-links" to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navbar