import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nabvar from "./Components/Navbar";
import Destinations from "./Pages/Destinations";
import ViewAll from "./Pages/ViewAll";
import NoMatch from "./Pages/NoMatch";
import About from "./Components/About";
import CottagePage from './Components/CottagePage';
import Footer from "./Components/Footer";
import Admin from "./Pages/Admin";


const Home = () => {
  return  <div className="leland">
            <div className="valign-wrapper callout">
              <h2>Explore Leelanau County</h2>
            </div>
          </div>
}

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
      <Route exact path="/all-rentals" component={ViewAll} />
      <Route exact path="/destinations" component={Destinations} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/cottages/:id" component={CottagePage} />
      <Route exact path="/admin" component={Admin} /> 
      <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
