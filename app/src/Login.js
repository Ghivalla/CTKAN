import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError:"",
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const email = target.email;
    const password = target.password;
    this.setState({
      [email]: target.value,
      [password]: target.value,
    });
  };

  validate = () => {
    let emailError = "";
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
    if (!this.state.password.length > 5) {
      passwordError = "Votre mot de passe doit contenir au moins 6 caractères";
    }
    if (passwordError) {
      this.setState({ passwordError });
      return false;
    }
  };

  render() {
    return (
      <section className="App">
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
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type="email"
                placeholder="Email"
                value={this.state.value}
                required
                onChange={this.handleInputChange}
                style={{ maxwidth: "800px", width: "20%", height: "20%" }}
              />
            </label>
            <div style={{ fontSize: 12, color: "red" }}></div>
            {this.state.emailError}
          </form>
        </div>
        <br />
        <div>
          <label>
          <input
            type="password"
            placeholder="Mot de passe"
            value={this.state.value}
            onChange={this.handleInputChange}
            style={{ maxwidth: "800px", width: "20%", height: "20%" }}
            /></label>
          <div style={{ fontSize: 12, color: "red" }}></div>
            {this.state.passwordError}
        </div>
        <br />
        <div>
          <button
            className="Signin"
            style={{ color: "#ffffff", padding: "1% 4%" }}
          >
            Se connecter{" "}
          </button>
        </div>
        <br />
        <div>
          <button>Se connecter avec Google </button>
        </div>
        <div>
          <p>Tu n'as pas de compte ?</p>
        </div>
      </section>
    );
  }
}

export default Login;
