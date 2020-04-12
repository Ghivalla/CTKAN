import React, { Component } from "react";
import { Link } from "@reach/router";
import FormInput from "../../components/form-input/form-input-component.jsx";
import Logo from "../../assets/logo-home-Page.svg";
import "./params-page.css";
import Footer from "../../components/footer/footer-component";

class Params extends Component {
  render() {
    return (
      <div>
        <div className="scan_window"></div>

        <Footer activePage={4} />
      </div>
    );
  }
}

export default Params;
