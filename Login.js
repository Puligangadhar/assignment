import React from "react";
/*import { component } from "react";
import Cookies from "js-cookie";
import "./index.css";
class Login extends component {
  state = {
    name: "",
    email: "",
    mobile: "",
    error: "",
    showSubmitError: false,
    errorMsg: "",
  };
}
onChangeUsername = (event) => {
  this.setState({ name: event.target.value });
};
onChangeEmail = (event) => {
  this.setState({ email: event.target.value });
};
onChangeMobile = (event) => {
  this.setState({ mobile: event.target.value });
};
onSubmitSuccess = (jwtToken) => {
  const { history } = this.props;
  Cookies.set("jwt_token", jwtToken, { expires: 30 });
  history.replace("/");
};
onSubmitFailure = (errorMsg) => {
  this.setState({ showSubmitError: true, errorMsg });
};
submitForm = async (event) => {
  event.preventDefault();
  const { name, email, mobile } = this.state;
  const userDetails = { name, email, mobile };
  const url = "https://apis.ccbp.in/login";
  const options = {
    method: "POST",
    body: JSON.stringify(userDetails),
  };
  const response = await fetch(url, options);
  const data = await response.json();
  if (response.ok === true) {
    this.subMitSuccesss(data, jwt_token);
  } else {
    this.onSubmitFailure(data, error_msg);
  }
};
renderNameField = () => {
  const { name } = this.state;
  return (
    <>
      <label for="name">Name*</label>
      <input
        type="text"
        className="form-control"
        id="name"
        placeholder="Enter Your Name"
        value={name}
        onChange={this.onChangeUsername}
      />
    </>
  );
};
renderEmailField = () => {
  const { email } = this.state;
  return (
    <>
      <label for="Email">Email*</label>
      <input
        type="text"
        className="form-control"
        id="Email"
        placeholder="Enter Your Email"
        value={email}
        onChange={this.onChangeEmail}
      />
    </>
  );
};
renderMobileField = () => {
  const { mobile } = this.state;
  return (
    <>
      <label for="number">Mobile Name*</label>
      <input
        type="phone"
        className="form-control"
        id="number"
        placeholder="Enter Your Mobile Number"
        value={mobile}
        onChange={this.onChangeMobile}
      />
    </>
  );
};
render(){
  const { showSubmitError, errorMsg } = this.state;
  return (
    <div className="login-form-container">
      <form className="form-container" onSubmit={this.submitForm}>
        <div className="input-container">{this.renderNameField()}</div>
        <div className="input-container">{this.renderEmailField()}</div>
        <div className="input-container">{this.renderMobileField()}</div>
        <button type="submit" className="login-button">
          Register Now
        </button>
        {showSubmitError && <p className="error-message">*{errorMsg}</p>}
      </form>
    </div>
  );
};*/
const Login = () => {
  return (
    <div className="login column">
      <div className=" col-md-6  ">
        <h1>GET IN TOUCH</h1>
        <p>Please complete the form and we will get back to you</p>
      </div>
      <div className="col-md-6 m-3">
        {" "}
        <form id="myForm col-md-6">
          <div className="mb-3 ">
            <label for="name">Name*</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label for="Email">Email*</label>
            <input
              type="text"
              className="form-control"
              id="Email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-3">
            <label for="number">Mobile Name*</label>
            <input
              type="phone"
              className="form-control"
              id="number"
              placeholder="Enter Your Mobile Number"
            />
          </div>
          <button className="button">Register Now</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
