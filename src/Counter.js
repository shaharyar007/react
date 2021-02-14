import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Counter extends React.Component{
    render(){
    return(
      <div className="CompContainer">
        <h2>Counter component</h2>
      </div>
    )
  }
  }