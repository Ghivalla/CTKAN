import React, { Component } from "react";
import { Link, navigate } from "@reach/router";
import FormInput from "../../components/form-input/form-input-component.jsx";
import "./login-page.css";
import Logo from "../../assets/logo-home-Page.svg";
import { GoogleLogin } from "react-google-login";

// eslint-disable-next-line
const EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginError: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const isValidEmail = EMAIL_REGEXP.test(email);
    if (isValidEmail && password.length >= 6) {
      this.props.authUser({ email, password });
    }
  };

  responseGoogle = (response) => {
    console.log("It's closed maggle !");
  };

  render() {
    const { email, password, loginError } = this.state;
    return (
      <section className="App">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            value={email}
            type="email"
            handleChange={(e) => this.setState({ email: e.target.value })}
            className="input"
            autoComplete="username"
          />
          <FormInput
            label="Mot de passe"
            value={password}
            type="password"
            handleChange={(e) => this.setState({ password: e.target.value })}
            className="input"
            autoComplete="current-password"
          />
          <p className="error">{loginError}</p>
          <FormInput
            value="Se connecter"
            type="submit"
            className="btn-primary"
          />
        </form>
        <div className="button">
          <GoogleLogin
            clientId="493514020551-ug4dlq91i99jncsjeb0ghg046srpl7mn.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
            className="button-google"
          >
            <span> Continuer avec google</span>
          </GoogleLogin>
        </div>
        <Link to="/" className="register-link">
          <p>Tu n'as pas de compte ?</p>
        </Link>
      </section>
    );
  }
}

export default Login;
