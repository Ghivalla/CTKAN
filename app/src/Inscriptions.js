import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
const EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

class Inscriptions extends Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  };

  validate = () => {
    /*let emailError = "";
    let passwordError = "";

    if (!this.state.email.includes("@")) {
      emailError = "Votre email doit contenir @";
    }
    if (!this.state.email.includes(".")) {
      emailError = "Votre email doit contenir un point";
    }
    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    return true;
    if (!this.state.password.length < 6) {
      passwordError = "Votre mot de passe doit contenir au moins 5 caractères";
    }
    if (passwordError) {
      this.setState({ passwordError });
      return false;
    }
*/
    let { confirmPassword, password, emailError, passwordError } = this.state;
    const isEmailValid = EMAIL_REGEXP.test(this.email) ? true : false;
    const isPassWordValid = confirmPassword === password && password.length > 4;
    if (!isEmailValid) {
      this.setState({ emailError: "format incorrect" });
    }
    if (!isPassWordValid) {
      this.setState({ passwordError: "format incorrect" });
    }
    return isEmailValid && isPassWordValid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
    } else {
      this.setState({
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="HomePage_logo">
          <figure>
            <img
              src="logo-home-Page.svg"
              alt="logo"
              style={{ maxwidth: "800px", width: "20%", margin: "3% auto" }}
            />
          </figure>
        </div>
        <div>
          <label>
            <input
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </label>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <label>
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmer le mot de passe"
              value={this.state.confirmPassword}
              onChange={(e) =>
                this.setState({ confirmPassword: e.target.value })
              }
            />
          </label>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        <button className="Signin" type="submit">
          Créer un compte
        </button>
      </form>
    );
  }
}

export default Inscriptions;
