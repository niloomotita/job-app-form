import React, { Component } from "react";
import "../styles/App.css";
import "../styles/Form.css";
import serializeForm from "form-serialize";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      phone:"",
      email:"",
      emailConfirm:"",
      adr:"",
      city:"",
      countryState:"",
      region:"",
      code:"",
    };
  }

  handlesubmit = (e)=>{
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    console.log(values, 'values')
  }
  render() {
    return (
      <form action="submit" className="form" onSubmit = {this.handlesubmit}>
        <div className="name-phone">
          <input
            type="text"
            placeholder="Full name*"
            className="form-item name"
            value={this.state.name}
            name = "name"
            onChange = {(event)=> this.setState({name : event.target.value})}
          />
          <input
            type="tel"
            placeholder="+358-452345678*"
            className="form-item tel"
            value={this.state.phone}
            name="phone"
            onChange = {(event)=>this.setState({phone : event.target.value})}
          />
          <input
            type="email"
            placeholder="Email*"
            className="form-item email"
            value={this.state.email}
            name="email"
            onChange = {(event)=> this.setState({email: event.target.value})}
          />
          <input
            type="email"
            placeholder="Re-enter email*"
            className="form-item email"
            value={this.state.emailConfirm}
            name= "emailConfirm"
            onChange = {(event)=> this.setState({emailConfirm: event.target.value})}
          />
        </div>

        <input
          type="text"
          placeholder="Address*"
          className="form-item adrs"
          value={this.state.adr}
          name="adr"
          onChange = {(event)=> this.setState({adr: event.target.value})}
        />
        <input type="text" className="form-item adrs" />
        <div className="city-adr">
          <input
            type="text"
            placeholder="City*"
            className="form-item city adr-item"
            value={this.state.city}
            name="city"
            onChange = {(event)=> this.setState({city: event.target.value})}
          />
          <input
            type="text"
            placeholder="State*"
            className="form-item state adr-item"
            value={this.state.countryState}
            name="countryState"
            onChange = {(event)=> this.setState({countryState: event.target.value})}
          />
          <input
            type="text"
            placeholder="Country/Region*"
            className="form-item region adr-item"
            value={this.state.region}
            name="region"
            onChange={(event)=> this.setState({region: event.target.value})}
          />
          <input
            type="text"
            placeholder="Zip/Postal code*"
            className="form-item postcode adr-item"
            value={this.state.code}
            name="code"
            onChange={(event)=> this.setState({code: event.target.value})}
          />
        </div>

        <input
          type="text"
          placeholder="How did you hear about us?"
          size="130"
          className="form-item extra"
        />
        <button 
          type="submit" 
          className="sub-btn"
          >
          
          Submit
        </button>
      </form>
    );
  }
}

export default Personal;
