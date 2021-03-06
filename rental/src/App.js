import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ViewAll from "./Pages/ViewAll";
import NoMatch from "./Pages/NoMatch";
import About from "./Components/About";
import Contact from "./Pages/Contact";
import CottagePage from './Components/CottagePage';
import Footer from "./Components/Footer";
import Confirmation from "./Pages/Confirmation";
import Admin from "./Pages/Admin";
import Leland from './Pages/Leland';
import LakeLeelanau from './Pages/LakeLeelanau';
import Northport from './Pages/Northport';
import LittleTraverseLake from './Pages/LittleTraverseLake';
import LakeMichigan from "./Pages/LakeMichigan";
import LoginFail from './Pages/LoginFail';
import Callback from './Pages/Callback';


const App = () => {

  // Add private routes
  // fix router issue where typing route into url loads a blank page

  return (
    <Router >
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/all-rentals" component={ViewAll} />
      <Route exact path="/leland" component={Leland} />
      <Route exact path="/lakeleelanau" component={LakeLeelanau} />
      <Route exact path="/northport" component={Northport} />
      <Route exact path="/littletraverselake" component={LittleTraverseLake} />
      <Route exact path="/lakemichigan" component={LakeMichigan} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/cottages/:id" component={CottagePage} />
      <Route exact path="/confirmation/:startDate/:endDate/:reservationLength/:cottageId" component={Confirmation} />
      <Route exact path="/callback" component={Callback} />
      <Route exact path="/fail" component={LoginFail} />
      <Route exact path="/admin" component={Admin} />
      <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
