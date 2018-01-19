import React, { Component } from "react";
import "../styles/App.css";
import "../styles/Portofolio.css";

class Portofolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portofolio: "",
      text: ""
    };
  }
   handlesubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <form action="submit" className="portfolio-form" onSubmit={this.handlesubmit}>
        <p className="paragraph-portofolio">
          Prove you are IBM's next great designer by showing us who you are.
          What you've done. How you think. Tell us your story.
        </p>
        <input
          className="link form-item"
          type="text"
          placeholder="Portfolio link*"
          value={this.state.portofolio}
          onChange={e => {
            this.setState({ portofolio: e.target.value });
          }}
        />
        <textarea
          className="form-item text-area-portofolio"
          name="text"
          cols="130"
          rows="10"
          placeholder="Anything else (another link, availability,etc.)?"
          value={this.state.text}
          onChange={e => {
            this.setState({ text: e.target.value });
          }}
        />
        <button type="submit" className="sub-btn">
          Submit
        </button>
      </form>
    );
  }
}

export default Portofolio;
