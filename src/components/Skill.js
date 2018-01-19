import React, { Component } from "react";
import "../styles/App.css";
import "../styles/Skill.css";

class Skill extends Component {
  render() {
    return (
      <form action="submit">
        <p className="question"> Which is your primary design discipline?*</p>
        <ul className="radiobox">
          {this.props.radioInput.map((item, i) => {
            return (
              <li
                key={i}
                className={`${item.checked === true ? "blue radio" : " radio"}`}
              >
                <input
                  className="radio-input design"
                  type={item.type}
                  id={item.id}
                  name={item.name}
                  checked={item.checked}
                  onChange={() => {
                    const changedCheck = this.props.radioInput.map((obj, n) => {
                      return i === n
                        ? { ...obj, checked: true }
                        : { ...obj, checked: false };
                    });
                    this.props.handleRadio(changedCheck);
                  }}
                />
                <label htmlFor={item.id}>{item.title}</label>
              </li>
            );
          })}
        </ul>
        <div className="clmn">
          <ul className="exp">
            <p>Do you have experience with any other disciplines?</p>
            {this.props.deciplineInput.map((item, i) => {
              return (
                <li className="check" key={i}>
                  <input
                    type={item.type}
                    id={item.id}
                    name={item.name}
                    checked={item.checked}
                    onChange={()=>{
                      const checkedObjArr =this.props.deciplineInput.map((obj,n)=>{
                        return n === i
                        ? {...obj, checked:!obj.checked}
                        : {...obj}
                      })
                      console.log(checkedObjArr)
                      this.props.handleDeciplineInput(checkedObjArr);
                    }}
                  />
                  <label htmlFor={item.id}>{item.title}</label>
                  <button className="delete">X</button>
                </li>
              );
            })}
          </ul>
          <ul className="int">
            <p>Where are you interested in working?</p>
            <h5>
              You must be legally authorized to work without visa sponsorship<br />{" "}
              in that location you choose.
            </h5>
            {this.props.locationInput.map((item, i) => {
              return (
                <li className="check" key={i}>
                  <input 
                    type={item.type} 
                    id={item.id} 
                    name={item.name}
                    checked={item.checked}
                    onChange = {()=>{
                      const newlocationArr = this.props.locationInput.map((obj, n)=>{
                        return i ===n
                        ? {...obj, checked:!obj.checked}
                        : {...obj}
                      })
                      this.props.handleLocationInput(newlocationArr)
                    }} 
                    />
                  <label htmlFor={item.id}>{item.title}</label>
                  <button className="delete">X</button>
                </li>
              );
            })}
          </ul>
        </div>
      </form>
    );
  }
}

export default Skill;
