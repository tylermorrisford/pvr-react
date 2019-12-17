import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css";
import { Navbar, Icon, NavItem, Dropdown } from 'react-materialize';

class Nav extends Component {

    render() {

        return(
            // <div className="navbar-fixed">
            <Navbar
  className='navbar'          
  alignLinks="right"
  brand={<a id="brand" className="brand-logo" href="/">Peninsula Vacation Rentals</a>}
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true,
    fixed: true
  }}
>
  <Dropdown
    id="dropdown"
    options={{
      alignment: 'left',
      autoTrigger: true,
      closeOnClick: true,
      constrainWidth: true,
      container: false,
      coverTrigger: true,
      hover: false,
      inDuration: 150,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 250
    }}
    trigger={<a href="#!">Destinations{' '}<Icon right>arrow_drop_down</Icon></a>}
  >
    <a id="navItem" href="/leland">
      Leland
    </a>
    <a id="navItem" href="lakeleelanau">
      Lake Leelanau
    </a>
    <a id="navItem" href="/northport">
      Northport
    </a>
    <a id="navItem" href="/lakemichigan">
      Lake Michigan
    </a>
    <a id="navItem" href="/littletraverselake">
      Little Traverse Lake
    </a>
  </Dropdown>
  <NavItem id="navItem" href="/all-rentals">
    All Rentals
  </NavItem>
  <NavItem id="navItem" href="/about">
    About
  </NavItem>
  <NavItem id="navItem" href="/contact">
    Contact
  </NavItem>
</Navbar> 
// </div>

        )
    }
}
export default Nav


// image logo:  <img alt="logo" src="/assets/images/pvr-logo2.png" />


// original nav

{/* <div className="navbar-fixed">
<nav className="white">
    <div className="nav-wrapper">
        <NavLink exact to="/" className="brand-logo"><h5>Peninsula Vacation Rentals</h5></NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#" className="dropdown-trigger nav-links" data-target="dropdown1">Destinations<i className="material-icons right">arrow_drop_down</i></a></li>
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
</div> */}