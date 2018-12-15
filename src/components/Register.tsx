import * as React from "react";
import { Component } from "react";

export interface RegisterProps {}

export interface RegisterState {
  username: string;
  password: string;
  confirmPassword: string;
  secondName: string;
  firstName: string;
  email: string;
}

class Register extends React.Component<RegisterProps, RegisterState> {
  maxLength = 20;
  handleUsername = e => {
    this.setState({ username: e.target.value });
  };
  handlePassword = e => {
    this.setState({ password: e.target.value });
  };
  handleConfirmPassword = e => {
    this.setState({ confirmPassword: e.target.value });
  };
  handleFirstName = e => {
    this.setState({ firstName: e.target.value });
  };
  handleSecondName = e => {
    this.setState({ secondName: e.target.value });
  };
  handleEmal = e => {
    this.setState({ email: e.target.value });
  };
  buttonClick = e => {
    let re = /[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let { username, password, confirmPassword, email } = this.state;
    if (
      username === confirmPassword &&
      username.length <= this.maxLength &&
      re.test(email)
    ) {
      console.log(1);
    } else console.log(0);
  };
  render() {
    return (
      <div id="login" className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s12">
              <h4>Регистрирай се</h4>
              <div className="input-field">
                <input
                  onChange={this.handleFirstName}
                  id="first_name"
                  type="text"
                  placeholder="Стоян"
                />
                <label className="active" htmlFor="first_name">
                  Име
                </label>
              </div>
              <div className="input-field">
                <input
                  onChange={this.handleFirstName}
                  id="first_name"
                  type="text"
                  placeholder="Колев"
                />
                <label className="active" htmlFor="first_name">
                  Име
                </label>
              </div>
              <input onChange={this.handleSecondName} placeholder="Фамилия" />
              <div className="input-field">
                <input id="username" type="text" data-length={this.maxLength} />
                <label htmlFor="username">Потребителско име</label>
              </div>
              <input onChange={this.handleEmal} placeholder="E-mail" />
              <input onChange={this.handlePassword} placeholder="Парола" />
              <input
                onChange={this.handleConfirmPassword}
                placeholder="Потвърдете паролата"
              />
              <button
                className="pure-button pure-button-primary"
                style={{
                  backgroundColor: "var(--color-1)",
                  textAlign: "center"
                }}
                onClick={this.buttonClick}
              >
                Регистрирай се
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

/*<div>
        <input onChange={this.handleFirstName} placeholder="First Name" />
        <input onChange={this.handleSecondName} placeholder="Second Name" />
        <input onChange={this.handleUsername} placeholder="Username" />
        <input onChange={this.handleEmal} placeholder="Email" />
        <input onChange={this.handlePassword} placeholder="Password" />
        <input
          onChange={this.handleConfirmPassword}
          placeholder="Confirm Password"
        />
        <button onClick={this.buttonClick}>Submit</button>
      </div> */
