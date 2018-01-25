import React, { Component } from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/Form.css";
import Personal from "./Personal";
import Skill from "./Skill";
import Portofolio from "./Portofolio";
import Header from "./Header";

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
          checked: false
        },
        {
          type: "checkbox",
          id: "check2",
          name: "check-answer2",
          title: "UX Design",
          checked: false
        },
        {
          type: "checkbox",
          id: "check3",
          name: "check-answer1",
          title: "Front-end Development",
          checked: false
        }
      ],
      locationInput: [
        {
          type: "checkbox",
          id: "texas",
          name: "check-answer",
          title: "Austin, Texas",
          checked: false
        },
        {
          type: "checkbox",
          id: "new-york",
          name: "check-answer",
          title: "New York, New York",
          checked: false
        },
        {
          type: "checkbox",
          id: "canada",
          name: "check-answer",
          title: "Toronto, Canada",
          checked: false
        },
        {
          type: "checkbox",
          id: "chaina",
          name: "check-answer",
          title: "Shanghai, China",
          checked: false
        },
        {
          type: "checkbox",
          id: "reland",
          name: "check-answer",
          title: "Dublin, Ireland",
          checked: false
        },
        {
          type: "checkbox",
          id: "uk",
          name: "check-answer",
          title: "Hursley, United Kingdom",
          checked: false
        },
        {
          type: "checkbox",
          id: "germany",
          name: "check-answer",
          title: "Boeblingen, Germany",
          checked: false
        },
        {
          type: "checkbox",
          id: "some",
          name: "check-answer",
          title: "Somewhere else",
          checked: false
        }
      ]
    };
  }
  handleRadio = radioIn => {
    this.setState({
      radioInput: radioIn
    });
  };
  handleDeciplineInput = checkIn => {
    this.setState({
      deciplineInput: checkIn
    });
  };
  handleLocationInput = checkedInput => {
    this.setState({
      locationInput: checkedInput
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" component={Personal} />
            <Route
              path="/Form2"
              render={() => (
                <Skill
                  radioInput={this.state.radioInput}
                  deciplineInput={this.state.deciplineInput}
                  locationInput={this.state.locationInput}
                  handleRadio={this.handleRadio}
                  handleDeciplineInput={this.handleDeciplineInput}
                  handleLocationInput={this.handleLocationInput}
                />
              )}
            />
            <Route path="/Form3" component={Portofolio} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
