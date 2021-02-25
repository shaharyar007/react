import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Counter extends React.Component{
  constructor(props){
    super(props);
    this.inc =  this.inc.bind(this.inc);
    this.dec = this.dec.bind(this.dec);
    this.state = {
      number : 12

    };
 
  }
  inc = () => {
      this.setState({
        number : this.state.number + 1
      });
  }
  dec = () =>{
    this.setState({
      number : this.state.number - 1
    });
  }
 
    render(){
    return(
      <div className="CompContainer">
        <h2>Counter component</h2>
        <div className="counter_container">
         <button onClick={this.inc}>+</button>
         <button onClick={this.dec}>-</button>
         
        <h1>{this.state.number}</h1>
        
        </div>
         {/* Sending state to child comp  */}
      <Secondcomponent number ={this.state.number} />
      </div>
     
      
    )
  }
  }
  class Secondcomponent extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        // receiving state from parent as prop
        <h1>{this.props.number}</h1>
      )
    }
  }