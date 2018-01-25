import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import "../styles/App.css";
import "../styles/Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuBtn: "not-visible",
      headerVisibele: "visible-item",
      spanClose: "visible-item",
    };
  }
  handleToggleOpen = () => {
    this.setState({
      menuBtn: "not-visible",
      headerVisibele: "visible-item",
      spanClose: "visible-item"
    });
  };
  handleToggleClose = () => {
    this.setState({
      menuBtn: "visible-item",
      headerVisibele: "not-visible",
      spanClose: "not-visible",
    });
  };
  render() {
    return (
      <div className="header-container">
        <ul className={`header ${this.state.headerVisibele}`}>
          <NavLink  exact to="/" className="item store">
            <li>Home</li>
          </NavLink>
          <NavLink to="/Form2" className="item about">
            <li>Skills and Location</li>
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
