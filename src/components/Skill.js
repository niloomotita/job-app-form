import React from "react";
import "../styles/App.css";
import "../styles/Skill.css";
import PropTypes from "prop-types";

function Skill(props) {
	const handlesubmit = e => {
		e.preventDefault();
	  };
  return (
    <form action="submit" onSubmit={handlesubmit}>
      <p className="question"> Which is your primary design discipline?*</p>
      <ul className="radiobox">
        {props.radioInput.map((item, i) => {
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
                  const changedCheck = props.radioInput.map((obj, n) => {
                    return i === n
                      ? { ...obj, checked: true }
                      : { ...obj, checked: false };
                  });
                  props.handleRadio(changedCheck);
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
          {props.deciplineInput.map((item, i) => {
            return (
              <li className="check" key={i}>
                <input
                  type={item.type}
                  id={item.id}
                  name={item.name}
                  checked={item.checked}
                  onChange={() => {
                    const checkedObjArr = props.deciplineInput.map((obj, n) => {
                      return n === i
                        ? { ...obj, checked: !obj.checked }
                        : { ...obj };
                    });
                    props.handleDeciplineInput(checkedObjArr);
                  }}
                />
                <label htmlFor={item.id}>{item.title}</label>
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
          {props.locationInput.map((item, i) => {
            return (
              <li className="check" key={i}>
                <input
                  type={item.type}
                  id={item.id}
                  name={item.name}
                  checked={item.checked}
                  onChange={() => {
                    const newlocationArr = props.locationInput.map((obj, n) => {
                      return i === n
                        ? { ...obj, checked: !obj.checked }
                        : { ...obj };
                    });
                    props.handleLocationInput(newlocationArr);
                  }}
                />
                <label htmlFor={item.id}>{item.title}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <button type="submit" className="sub-btn">
        Submit
      </button>
    </form>
  );
}

Skill.prototype = {
  radioInput: PropTypes.array.isRequired,
  deciplineInput: PropTypes.array.isRequired,
  ocationInput: PropTypes.array.isRequired,
  handleRadio: PropTypes.func.isRequired,
  handleDeciplineInput: PropTypes.func.isRequired,
  handleLocationInput: PropTypes.func.isRequired
};

export default Skill;
