import React, { Component } from "react";
import { Link } from "@reach/router";
import FormInput from "../../components/form-input/form-input-component.jsx";
import Logo from "../../assets/logo-home-Page.svg";
import "./trousse-page.css";
import Footer from "../../components/footer/footer-component";


class Trousse extends Component {

  

 

  render() {
    return (
      <div>
        <div className="scan_window"></div>

        <Footer activePage={2}/>
      </div>
    );
  }
}

export default Trousse;
