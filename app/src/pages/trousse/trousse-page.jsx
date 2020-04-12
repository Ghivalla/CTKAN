import React, { Component } from "react";
import "./trousse-page.css";
import Footer from "../../components/footer/footer-component";

class Trousse extends Component {
  render() {
    return (
      <div>
        <div className="scan_window"></div>

        <Footer activePage={2} />
      </div>
    );
  }
}

export default Trousse;
