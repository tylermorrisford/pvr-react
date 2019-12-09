import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css";
import M from "materialize-css/dist/js/materialize.min.js";

class Navbar extends Component {

    componentDidMount(){
        M.AutoInit();
    }


    render() {

        return(
            <div className="navbar-fixed">
            <nav className="white">
                <div className="nav-wrapper">
                    <NavLink exact to="/" className="brand-logo"><h5>Peninsula Vacation Rentals</h5></NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {/* <li><a href="#" className="dropdown-trigger nav-links" data-target="dropdown1">Destinations<i className="material-icons right">arrow_drop_down</i></a></li> */}
                        <li><NavLink className="nav-links" to="/destinations">Destinations</NavLink></li>
                        <li><NavLink className="nav-links" to="/all-rentals">All Rentals</NavLink></li>
                        <li><NavLink className="nav-links" to="/about">About</NavLink></li>
                        <li><NavLink className="nav-links" to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
    
                             <ul id="dropdown1" className="dropdown-content">
                                 <li><NavLink className="nav-links" to="/leland">Leland</NavLink></li>
                                 <li className="divider"></li>
                                 <li><NavLink className="nav-links" to="/lakeleelanau">Lake Leelanau</NavLink></li>
                                 <li className="divider"></li>
                                 <li><NavLink className="nav-links" to="/northport">Northport</NavLink></li>
                                 <li className="divider"></li>
                                 <li><NavLink className="nav-links" to="/littletraverselake">Little Traverse Lake</NavLink></li>
                                 <li className="divider"></li>
                                 <li><NavLink className="nav-links" to="/lakemichigan">Lake Michigan</NavLink></li>
                                 <li className="divider"></li>
                             </ul>
    
            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><NavLink className="nav-links" to="/all-rentals">All Rentals</NavLink></li>
                <li><NavLink className="nav-links" to="/about">About</NavLink></li>
                <li><NavLink className="nav-links" to="/contact">Contact</NavLink></li>
            </ul>
            </div>
        )
    }
}
// image logo:  <img alt="logo" src="/assets/images/pvr-logo2.png" />
export default Navbar