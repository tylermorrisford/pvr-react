import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import ViewByLocation from "./Components/ViewByLocation";
import ViewAll from "./Components/ViewAll";

function App() {
  return (
    <div className="App">
      <ViewByLocation />
      <ViewAll />
    </div>
  );
}

export default App;
