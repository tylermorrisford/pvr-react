import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Destinations from "./Components/Destinations";
import ViewAll from "./Components/ViewAll";

const Home = () => {
  return  <div className="leland">
            <div className="valign-wrapper callout">
              <h2>Explore Leelanau</h2>
            </div>
          </div>
}

function App() {
  return (
    <Router>
      <h1>Header</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/all-rentals">Destinations</Link>
        <Link to="/destinations">All Rentals</Link>
      </div>
      <Route exact path="/" component={Home} />
      <Route exact path="/all-rentals" component={ViewAll} />
      <Route exact path="/destinations" component={Destinations} />
      {/* <Route path="/about" component={About} /> */}
      {/* <Route path="/contact" component={Contact} /> */}
      <h1>footer</h1>
    </Router>
  );
}

export default App;
