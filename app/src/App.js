import React, { Component } from "react";
import { Router, navigate } from "@reach/router";
import "./App.css";
import Login from "./pages/login/login-page";
import Inscription from "./pages/inscription/inscription-page";
import Scan from "./pages/scan/scan-page";
import Ajouter from "./pages/ajouter/ajouter-page";
import Trousse from "./pages/trousse/trousse-page";
import Blog from "./pages/blog/blog-page";
import Params from "./pages/params/params-page";

class App extends Component {
  state = {
    user: {
      id: "",
      email: "",
      joined: "",
    },
    isLoggedIn: false,
  };

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        email: data.email,
        joined: data.joined,
      },
      isLoggedIn: true,
    });
    navigate("/");
  };

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Router>
          <Scan path="/" />
          <Ajouter path="/ajouter" />
          <Trousse path="/trousse" />
          <Blog path="/blog" />
          <Params path="/params" />
        </Router>
      );
    } else {
      return (
        <Router>
          <Login path="/" loadUser={this.loadUser} />
          <Inscription path="/inscription" loadUser={this.loadUser} />
        </Router>
      );
    }
  }
}

export default App;
