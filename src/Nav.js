import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default class nav extends  React.Component{
    render(){
        return(
         
                <header className="App-header">
                    <h1>My First Counter App, LETS DO THIS</h1>
                <nav>
                <ul className="nav-links">
                <li><Link to="/">  Home</Link></li>
                    <li><Link to="/counter">  Counter</Link></li>
                    <li><Link to="/About">  About</Link></li>
                </ul>
                </nav>           
                </header>
             

        )
    }

}