import React, { Component } from "react";
import FormInput from "../../components/form-input/form-input-component.jsx";
import "./login-page.css";
import Logo from "../../assets/logo-home-Page.svg";

const EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

class Login extends Component {
  state = {
      email: "",
      password: "",
      emailError: "",
      passwordError:"",
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    const isValidEmail = EMAIL_REGEXP.test(email);
    if(isValidEmail)
      console.log(`POST : { email : ${email}, password : ${password} }`)
  };

  render() {
    const {email, password, passwordError, emailError} = this.state;
    return (
      <section className="App">
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
          />
        </div>
        <form  onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            value={email}
            type="email"
            handleChange={(e)=>this.setState({email:e.target.value})}
            error={emailError}
            className="input"
            autoComplete="username"
          />
          <FormInput
            label="Mot de passe"
            value={password}
            type="password"
            handleChange={(e)=>this.setState({password:e.target.value})}
            error={passwordError}
            className="input"
            autoComplete="current-password"
          />
          <FormInput
            value="Se connecter"
            type="submit"
            className="btn-primary"
          />
        </form>
        <button className="btn-secondary">
          Se connecter avec Google
        </button>
        <p className="link">Tu n'as pas de compte ?</p>
      </section>
    );
  }
}

export default Login;
