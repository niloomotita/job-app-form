import React, { Component } from 'react';
import '../styles/App.css';
import "../styles/Form.css";
import  Form  from"./Form";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 className="title">
            Let's talk
          </h1>
          <p className="title"> Think you have what it takes? Show us.</p>
        </div>
        <h3> 1. Personal information</h3>
        <Form/>
      </div>
    );
  }
}

export default App;
