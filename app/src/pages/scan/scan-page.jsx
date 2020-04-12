import React from "react";
import "./scan-page.css";

import Footer from "../../components/footer/footer-component";
class Scan extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="search_container">
          <input className="search" type="text" placeholder="Rechercher" />
        </div>
        <div className="scan_window"></div>
        <Footer activePage={1} />
      </div>
    );
  }
}
export default Scan;
