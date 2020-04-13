import React, { Component } from "react";
import { Link, navigate } from "@reach/router";
import "./inscription-page.css";
import FormInput from "../../components/form-input/form-input-component.jsx";
import Logo from "../../assets/logo-home-Page.svg";

// eslint-disable-next-line
const EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

class Inscriptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      emailError: "",
      passwordError: "",
    };
  }

  validate = () => {
    const { confirmPassword, password, email } = this.state;
    const isEmailValid = EMAIL_REGEXP.test(email) ? true : false;
    const identiquePassWord = confirmPassword === password;
    const gotRequiredPassWordLength = password.length >= 6;
    if (isEmailValid && identiquePassWord && gotRequiredPassWordLength)
      return true;
    if (!isEmailValid) {
      this.setState({ emailError: "format mail incorrect" });
      this.setState({ email: "" });
    } else {
      this.setState({ emailError: "" });
    }

    if (!identiquePassWord) {
      this.setState({ passwordError: "Mot de passe non identique" });
      this.setState({ password: "" });
      this.setState({ confirmPassword: "" });
      return false;
    }
    if (!gotRequiredPassWordLength) {
      this.setState({ passwordError: "doit comporter plus de 6 character" });
      this.setState({ password: "" });
      this.setState({ confirmPassword: "" });
      return false;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      fetch(`${process.env.REACT_APP_API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    } else {
      console.log("unable to register");
    }
  };

  render() {
    const {
      email,
      password,
      confirmPassword,
      passwordError,
      emailError,
    } = this.state;
    return (
      <div>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            value={email}
            type="email"
            handleChange={(e) => this.setState({ email: e.target.value })}
            error={emailError}
            className="input"
            autoComplete="username"
          />
          <FormInput
            label="Mot de passe"
            value={password}
            type="password"
            handleChange={(e) => this.setState({ password: e.target.value })}
            error={passwordError}
            className="input"
            autoComplete="new-password"
          />
          <FormInput
            label="Confirmer le mot de passe"
            value={confirmPassword}
            type="password"
            handleChange={(e) =>
              this.setState({ confirmPassword: e.target.value })
            }
            error={passwordError}
            className="input"
            autoComplete="new-password"
          />
          <FormInput
            value="Creer un compte"
            type="submit"
            className="btn-primary"
          />
        </form>
      </div>
    );
  }
}

export default Inscriptions;
