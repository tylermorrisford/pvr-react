import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nabvar from "./Components/Navbar";
import Home from "./Pages/Home";
import Destinations from "./Pages/Destinations";
import ViewAll from "./Pages/ViewAll";
import NoMatch from "./Pages/NoMatch";
import About from "./Components/About";
import CottagePage from './Components/CottagePage';
import Footer from "./Components/Footer";
import Confirmation from "./Pages/Confirmation";
import Admin from "./Pages/Admin";
import Leland from './Pages/Leland';
// import LakeLeelanau from './Pages/LakeLeelanau';
// import Northport from './Pages/Northport';
// import LittleTraverseLake from './Pages/LittleTraverseLake';
// import LakeMichigan from "./Pages/LakeMichigan";


const Contact = () => {
  return  <div className="northport">
            <div className="valign-wrapper callout">
              <h2>Contact us</h2>
            </div>
          </div>
}
// Add Auth0 on Admin route
const App = () => {
  return (
    <Router>
      <Nabvar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/destinations" component={Destinations} />
      <Route exact path="/all-rentals" component={ViewAll} />
      <Route exact path="/leland" component={Leland} />
      {/* <Route exact path="/lakeleelanau" component={LakeLeelanau} /> */}
      {/* <Route exact path="/northport" component={Northport} /> */}
      {/* <Route exact path="/littletraverselake" component={LittleTraverseLake} /> */}
      {/* <Route exact path="/lakemichigan" component={LakeMichigan} /> */}
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/cottages/:id" component={CottagePage} />
      <Route exact path="/confirmation/:startDate/:endDate/:reservationLength/:cottageId" component={Confirmation} />
      <Route exact path="/admin" component={Admin} /> 
      <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
