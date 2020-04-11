import React from "react";
import "./scan-page.css";
import Scan_Icon from "../../assets/scan.svg";
import Trousse_Icon from "../../assets/trousse.svg";
import Blog_Icon from "../../assets/blog.svg";
import Params_Icon from "../../assets/params.svg";

class Scan extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="search_container">
          <input className="search" type="text" placeholder="Rechercher" />
        </div>
        <div className="scan_window"></div>

        <nav className="footer_menu_icons">
          <a href="#" className="footer_scan_logo">
            <img
              src={Scan_Icon}
              alt="logo_scan"
              Link
              to="inscription"
              onClick=""
            />
          </a>

          <a href="#" className="footer_trousse_logo">
            <img
              src={Trousse_Icon}
              alt="logo_trousse"
              Link
              to="inscription"
              onClick=""
            />
          </a>

          <a href="#" className="footer_blog_logo">
            <img
              src={Blog_Icon}
              alt="logo_blog"
              Link
              to="inscription"
              onClick=""
            />
          </a>
          <a href="#" className="footer_params_logo">
            <img
              src={Params_Icon}
              alt="logo_params"
              Link
              to="inscription"
              onClick=""
            />
          </a>
        </nav>
      </div>
    );
  }
}
export default Scan;
