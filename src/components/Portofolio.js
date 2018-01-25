import React, { Component } from "react";
import "../styles/App.css";
import "../styles/Portofolio.css";
import serializeForm from "form-serialize";
import validator from "validator";

const validate = portofolio => {
  return {
    portofolio: !validator.isURL(portofolio)
  };
};

class Portofolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portofolio: "",
      text: "",
      touched: {
        portofolio: false
      }
    };
  }
  handlesubmit = e => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    console.log(values);
  };

  handleBlur = e => {
    this.setState({
      touched: {
        ...this.state.touched,
        [e.target.name]: true
      }
    });
  };
  showError = () => {
    const { portofolio, touched } = this.state;
    const errors = validate(portofolio);
    return {
      portofolio: touched.portofolio && errors.portofolio
    };
  };
  render() {
    const showErrors = this.showError();
    console.log(showErrors);
    return (
      <div>
        <h3> 3. Portfolio</h3>
        <form
          action="submit"
          className="portfolio-form"
          onSubmit={this.handlesubmit}
        >
          <p className="paragraph-portofolio">
            Prove you are IBM's next great designer by showing us who you are.
            What you've done. How you think. Tell us your story.
          </p>
          <input
            className={`link form-item ${
              showErrors.portofolio ? "invalid" : ""
            }`}
            type="text"
            name="portofolio"
            placeholder="Portfolio link*"
            value={this.state.portofolio}
            onBlur={this.handleBlur}
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
      </div>
    );
  }
}

export default Portofolio;
