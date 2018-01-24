import React, { Component } from "react";
import "../styles/App.css";
import "../styles/Form.css";
import serializeForm from "form-serialize";


const validate =(name, phone, email,emailConfirm, adr, city, countryState, region, code)=>{
	const nameReg = /^[a-zA-z]+(\s[a-zA-Z]+)+$/
	const phoneReg =/^(\+|0{2})358-?0?[0-9]{9}$/
	const emailReg =/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
	const adrReg = /^(\w+\s\w?)/
	const cityReg = /[a-zA-Z]{2,}/
	const codeReg = /\d{5}/
	return {
		name: !nameReg.test(name),
		phone: !phoneReg.test(phone),
		email: !emailReg.test(email),
		emailConfirm: !emailReg.test(emailConfirm),
		adr:!adrReg.test(adr),
		city:!cityReg.test(city),
		countryState:!cityReg.test(countryState),
		region:!cityReg.test(region),
		code:!codeReg.test(code),
	}
}

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      emailConfirm: "",
      adr: "",
      city: "",
      countryState: "",
      region: "",
	  code: "",
	  touched:{
		name: false,
		phone: false,
		email: false,
		emailConfirm: false,
		adr: false,
		city: false,
		countryState: false,
		region: false,
		code: false,
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
			[e.target.name]: true,
		}
	});
}
showError = () => {
	const { name, phone, email,emailConfirm, adr, city, countryState, region, code, touched } = this.state;
	const errors = validate(name, phone, email, emailConfirm, adr, city, countryState, region, code);
  console.log('errors.emailConfirm', errors.emailConfirm)
  console.log('touched.emailConfirm', touched.emailConfirm)

	return {
		name: errors.name && touched.name,
		phone: errors.phone && touched.phone,
		email: errors.email && touched.email,
		emailConfirm: touched.emailConfirm && email.localeCompare(emailConfirm),
		adr:errors.adr && touched.adr,
		city: errors.city && touched.city,
		countryState: errors.countryState && touched.countryState,
		region: errors.region && touched.region,
    code: errors.code && touched.code,
  }
}

  render() {
	  const {name, phone, email,emailConfirm, adr, city, countryState, region, code} = this.state;
	  const errors = validate(name, phone, email,emailConfirm, adr, city, countryState, region, code);
	  console.log(Object.keys(errors,'errors key'))
	  const showErrors = this.showError();
	  console.log(showErrors, 'showErrors')
    return (
      <form action="submit" className="form" onSubmit={this.handlesubmit}>
        <div className="name-phone">
          <input
            type="text"
            placeholder="Full name*"
            className={`form-item name ${showErrors.name ? 'invalid' : ''}`}
            value={name}
            name="name"
			      onBlur={this.handleBlur}
            onChange={event => this.setState({ name: event.target.value })}
          />
          <input
            type="tel"
            placeholder="+358-452345678*"
            className={`form-item tel ${showErrors.phone ? 'invalid' : ''}`}
            value={phone}
            name="phone"
			      onBlur={this.handleBlur}
            onChange={event => this.setState({ phone: event.target.value })}
          />
          <input
            type="email"
            placeholder="Email*"
            className={`form-item email ${showErrors.email ? 'invalid' : ''}`}
            value={email}
            name="email"
			      onBlur={this.handleBlur}
            onChange={event => this.setState({ email: event.target.value })}
          />
          <input
            type="email"
            placeholder="Re-enter email*"
            className={`form-item email ${showErrors.emailConfirm ? 'invalid' : ''}`}
            value={emailConfirm}
            name="emailConfirm"
			      onBlur={this.handleBlur}
            onChange={event =>
              this.setState({ emailConfirm: event.target.value })
            }
          />
          <span className={`email-match ${showErrors.emailConfirm ? 'emails-not-match' : ''}`}> Your emails do not match!</span>
        </div>

        <input
          type="text"
          placeholder="Address*"
          className={`form-item adrs ${showErrors.adr ? 'invalid' : ''}`}
          value={adr}
          name="adr"
		      onBlur={this.handleBlur}
          onChange={event => this.setState({ adr: event.target.value })}
        />
        <input type="text" className="form-item adrs" />
        <div className="city-adr">
          <input
            type="text"
            placeholder="City*"
            className={`form-item city adr-item" ${showErrors.city ? 'invalid' : ''}`}
            value={city}
            name="city"
			      onBlur={this.handleBlur}
            onChange={event => this.setState({ city: event.target.value })}
          />
          <input
            type="text"
            placeholder="State*"
            className={`form-item state adr-item" ${showErrors.countryState ? 'invalid' : ''}`}
            value={countryState}
            name="countryState"
			      onBlur={this.handleBlur}
            onChange={event =>
              this.setState({ countryState: event.target.value })
            }
          />
          <input
            type="text"
            placeholder="Country/Region*"
            className={`form-item region adr-item" ${showErrors.region? 'invalid' : ''}`}
            value={region}
            name="region"
			      onBlur={this.handleBlur}
            onChange={event => this.setState({ region: event.target.value })}
          />
          <input
            type="text"
            placeholder="Zip/Postal code*"
            className={`form-item postcode adr-item" ${showErrors.code ? 'invalid' : ''}`}
            value={code}
            name="code"
			      onBlur={this.handleBlur}
            onChange={event => this.setState({ code: event.target.value })}
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
			disabled={Object.keys(errors).some((key) => errors[key])}
		>
          Submit
        </button>
      </form>
    );
  }
}

export default Personal;
