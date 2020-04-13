import React from "react";
import Scan_Icon from "../../assets/scan.svg";
import Trousse_Icon from "../../assets/trousse.svg";
import Blog_Icon from "../../assets/blog.svg";
import Params_Icon from "../../assets/params.svg";
import "./footer-component.css";
import { Link } from "@reach/router";

export default function ({ activePage }) {
  return (
    <div>
      <nav className="footer_menu_icons">
        <Link to="/" className="footer_scan_logo">
          <img
            src={Scan_Icon}
            alt="logo_scan"
            className={activePage === 1 ? "active-image" : ""}
          />
        </Link>
        <Link to="/trousse" className="footer_trousse_logo">
          <img
            src={Trousse_Icon}
            alt="logo_trousse"
            className={activePage === 2 ? "active-image" : ""}
          />
        </Link>

        <Link to="/blog" className="footer_blog_logo">
          <img
            src={Blog_Icon}
            alt="logo_blog"
            className={activePage === 3 ? "active-image" : ""}
          />
        </Link>
        <Link to="/params" className="footer_params_logo">
          <img
            src={Params_Icon}
            alt="logo_params"
            className={activePage === 4 ? "active-image" : ""}
          />
        </Link>
      </nav>
    </div>
  );
}
