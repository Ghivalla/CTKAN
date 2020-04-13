import React, { Component } from "react";
import { Router } from "@reach/router";
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
  componentDidMount() {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      fetch(`${process.env.REACT_APP_API_URL}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && data.id) {
            fetch(`${process.env.REACT_APP_API_URL}/profile/${data.id}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: token,
              },
            })
              .then((res) => res.json())
              .then((user) => {
                if (user && user.email) {
                  this.loadUser(user);
                }
              });
          }
        })
        .catch(console.log);
    }
  }
  loadUser = ({ id, email, joined }) => {
    this.setState({
      user: {
        id,
        email,
        joined,
      },
      isLoggedIn: true,
    });
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
