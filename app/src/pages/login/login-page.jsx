import React, { Component } from "react";
import { Link } from "@reach/router";
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
      fetch("https://api.ctkan.com/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          const { id, email, joined } = user;
          if (id && email) {
            this.props.loadUser({ id, email, joined });
          } else {
            this.setState({ loginError: "Mail ou mot de passe invalide" });
          }
        });
    } else {
      this.setState({ loginError: "Format de mail ou mot de passe invalide" });
    }
  };

  responseGoogle = (response) => {
    console.log(response);
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
        <Link to="inscription">
          <p className="register-link">Tu n'as pas de compte ?</p>
        </Link>
      </section>
    );
  }
}

export default Login;
