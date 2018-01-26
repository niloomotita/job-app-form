import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import "../styles/App.css";
import "../styles/Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuBtn: "visible-item",
      headerVisible: "not-visible",
      spanClose: "not-visible",
    };
  }
  handleToggleOpen = () => {
    this.setState({
      menuBtn: "not-visible",
      headerVisible: "visible-item",
      spanClose: "visible-item",
      
    });
  };
  handleToggleClose = () => {
    this.setState({
      menuBtn: "visible-item",
      headerVisible: "not-visible",
      spanClose: "not-visible",
    });
  };
  render() {
 
    return (
      <div className="header-container">
         <NavLink exact to="/" className="item store home"><span >Home</span></NavLink>
        <ul className={`header ${this.state.headerVisible}`}>
          <NavLink  exact to="/" className="item store">
            <li>Personal Info</li>
          </NavLink>
          <NavLink to="/Form2" className="item about">
            <li>Skills</li>
          </NavLink>
          <NavLink to="/Form3" className="item contact">
            <li>Portfolio</li>
          </NavLink>
        </ul>
        <span
          className={`toggle ${this.state.menuBtn}`}
          onClick={() => this.handleToggleOpen()}
        >
          ☰
        </span>
        <span
          className={`close ${this.state.spanClose}`}
          onClick={() => this.handleToggleClose()}
        >
          X
        </span>
      </div>
    );
  }
}

export default Header;
