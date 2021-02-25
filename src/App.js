import { BrowserRouter as Router, Route, Link , Switch } from "react-router-dom";
import React from 'react';
import './App.css';
import Counter from './Counter';
import Nav from './Nav';
import About from './About';
import { render } from "@testing-library/react";

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <switch>
    <Route path="/" exact component={Home} />
     <Route path="/counter" component={Counter } />    
     <Route path="/about" component={About} />      
     </switch>     
    </div>
    </Router>
  );
}
const Home = () => {
  return (
    <div className="CompContainer">
      <h1>Homepage</h1>
    </div>
  );
};

export default App;
