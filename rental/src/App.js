import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nabvar from "./Components/Navbar";
import Destinations from "./Pages/Destinations";
import ViewAll from "./Pages/ViewAll";


const Home = () => {
  return  <div className="leland">
            <div className="valign-wrapper callout">
              <h2>Explore Leelanau</h2>
            </div>
          </div>
}

const About = () => {
  return  <div className="leland">
            <div className="valign-wrapper callout">
              <h2>About</h2>
            </div>
          </div>
}

const Contact = () => {
  return  <div className="lelanau">
            <div className="valign-wrapper callout">
              <h2>Contact us</h2>
            </div>
          </div>
}

const App = () => {
  return (
    <Router>
      <Nabvar />
      <Route exact path="/" component={Home} />
      <Route exact path="/all-rentals" component={ViewAll} />
      <Route exact path="/destinations" component={Destinations} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <h1>footer</h1>
    </Router>
  );
}

export default App;
