import React, { Component } from "react";
import { Link } from "@reach/router";
import FormInput from "../../components/form-input/form-input-component.jsx";
import Logo from "../../assets/logo-home-Page.svg";
import Scan_Icon from "../../assets/scan.svg";
import Trousse_Icon from "../../assets/trousse.svg";
import Blog_Icon from "../../assets/blog.svg";
import Params_Icon from "../../assets/params.svg";
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <nav className="footer_menu_icons">
          <a href="/scan" className="footer_scan_logo">
            <img
              src={Scan_Icon}
              alt="logo_scan"
              Link
              to="inscription"
              onClick=""
              className={this.props.activePage == 1 ? "active-image" : ""}
            />
          </a>

          <a href="/trousse" className="footer_trousse_logo">
            <img
              src={Trousse_Icon}
              alt="logo_trousse"
              Link
              to="inscription"
              onClick=""
              className={this.props.activePage == 2 ? "active-image" : ""}
            />
          </a>

          <a href="/blog" className="footer_blog_logo">
            <img
              src={Blog_Icon}
              alt="logo_blog"
              Link
              to="inscription"
              onClick=""
              className={this.props.activePage == 3 ? "active-image" : ""}
            />
          </a>
          <a href="/params" className="footer_params_logo">
            <img
              src={Params_Icon}
              alt="logo_params"
              Link
              to="inscription"
              onClick=""
              className={this.props.activePage == 4 ? "active-image" : ""}
            />
          </a>
        </nav>
      </div>
    );
  }
}

export default Footer;
