import React, { Component } from "react";
import "../styles/App.css";
import "../styles/Form.css";
import Personal from "./Personal";
import Skill from "./Skill";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioInput: [
        {
          type: "radio",
          id: "research",
          name: "deciplineIsChecked",
          title: "Design Research",
          checked: false
        },
        {
          type: "radio",
          id: "visual",
          name: "deciplineIsChecked",
          title: " Visual Design",
          checked: false
        },
        {
          type: "radio",
          id: "ux",
          name: "deciplineIsChecked",
          title: " UX Design",
          checked: false
        },
        {
          type: "radio",
          id: "front",
          name: "deciplineIsChecked",
          title: "Front-end Dev",
          checked: false
        }
      ],
      deciplineInput: [
        {
          type: "checkbox",
          id: "check1",
          name: "check-answer1",
		  title: "Visual Design",
		  checked: false,
        },
        {
          type: "checkbox",
          id: "check2",
          name: "check-answer2",
		  title: "UX Design",
		  checked: false,
        },
        {
          type: "checkbox",
          id: "check3",
          name: "check-answer1",
		  title: "Front-end Development",
		  checked: false,
        }
      ],
      locationInput: [
        {
          type: "checkbox",
          id: "texas",
          name: "check-answer",
		  title: "Austin, Texas",
		  checked: false,
        },
        {
          type: "checkbox",
          id: "new-york",
          name: "check-answer",
		  title: "New York, New York",
		  checked: false,
        },
        {
          type: "checkbox",
          id: "canada",
          name: "check-answer",
		  title: "Toronto, Canada",
		  checked: false,
        },
        {
          type: "checkbox",
          id: "chaina",
          name: "check-answer",
		  title: "Shanghai, China",
		  checked: false,
        },
        {
          type: "checkbox",
          id: "reland",
          name: "check-answer",
		  title: "Dublin, Ireland",
		  checked: false,
        },
        {
          type: "checkbox",
          id: "uk",
          name: "check-answer",
		  title: "Hursley, United Kingdom",
		  checked: false,
        },
        {
          type: "checkbox",
          id: "germany",
          name: "check-answer",
		  title: "Boeblingen, Germany",
		  checked: false,
        },
        {
          type: "checkbox",
          id: "some",
          name: "check-answer",
		  title: "Somewhere else",
		  checked: false,
        }
      ]
    };
  }
  handleRadio = (radioIn) => {
	  this.setState({
		radioInput: radioIn
	  })
  };
  handleDeciplineInput = (checkIn) => {
	this.setState({
	  deciplineInput: checkIn
	})
};
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 className="title">Let's talk</h1>
          <p className="title"> Think you have what it takes? Show us.</p>
        </div>
        <h3> 1. Personal information</h3>
        <Personal />
        <h3> 2. Skills and location</h3>
        <Skill
          radioInput={this.state.radioInput}
          deciplineInput={this.state.deciplineInput}
          locationInput={this.state.locationInput}
		  handleRadio = {this.handleRadio}
		  handleDeciplineInput = {this.handleDeciplineInput}
        />
      </div>
    );
  }
}

export default App;
