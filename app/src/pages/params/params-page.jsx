import React, { Component } from "react";
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
