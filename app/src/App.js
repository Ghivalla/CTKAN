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

  async componentDidMount() {
    const token = window.sessionStorage.getItem("token");
    const googleToken = window.sessionStorage.getItem("g-token");
    if (token && !this.state.isLoggedIn) {
      const { userId } = await this.getSession({ token });
      const userProfile = await this.getUserProfile({ userId, token });
      this.loadUserData(userProfile);
    }
    if (googleToken && !this.state.isLoggedIn) {
      const { user_id, email } = await fetch(
        `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${googleToken}`
      );
      if (user_id) {
        const joined = new Date();
        this.loadUserData({ id: user_id, email, joined });
      } else {
        console.log("token invalide");
      }
    }
  }

  authUser = async ({ email, password }) => {
    const { userId, token } = await this.getSession({ email, password });
    this.saveAuthTokenSession(token);
    const userProfile = await this.getUserProfile({ userId, token });
    this.loadUserData(userProfile);
  };

  saveAuthTokenSession = (token) => {
    window.sessionStorage.setItem("token", token);
  };

  getSession = async ({ email, password, token }) => {
    const sessionHeader = new Headers({ "Content-Type": "application/json" });
    if (token) {
      sessionHeader.append("Authorization", token);
    }
    const getSession = await fetch(`${process.env.REACT_APP_API_URL}/signin`, {
      method: "POST",
      headers: sessionHeader,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const session = await getSession.json();
    return session;
  };

  getUserProfile = async ({ userId, token }) => {
    const getUserProfile = await fetch(
      `${process.env.REACT_APP_API_URL}/profile/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    const userProfile = await getUserProfile.json();
    return userProfile;
  };

  loadUserData = ({ id, email, joined }) => {
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
    return this.state.isLoggedIn ? (
      <Router>
        <Scan path="/" />
        <Ajouter path="/ajouter" />
        <Trousse path="/trousse" />
        <Blog path="/blog" />
        <Params path="/params" />
      </Router>
    ) : (
      <Router>
        <Login
          path="/"
          authUser={this.authUser}
          loadUserData={this.loadUserData}
        />
        <Inscription path="/inscription" loadUserData={this.loadUserData} />
      </Router>
    );
  }
}

export default App;
