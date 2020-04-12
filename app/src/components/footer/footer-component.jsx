import React from "react";
import Scan_Icon from "../../assets/scan.svg";
import Trousse_Icon from "../../assets/trousse.svg";
import Blog_Icon from "../../assets/blog.svg";
import Params_Icon from "../../assets/params.svg";
import { Link } from "@reach/router";

export default function ({ activePage }) {
  return (
    <div>
      <nav className="footer_menu_icons">
        <Link to="/scan" className="footer_scan_logo">
          <img
            src={Scan_Icon}
            alt="logo_scan"
            Link
            to="inscription"
            onClick=""
            className={activePage === 1 ? "active-image" : ""}
          />
        </Link>
        <Link to="/trousse" className="ffooter_trousse_logo">
          <img
            src={Trousse_Icon}
            alt="logo_trousse"
            Link
            to="inscription"
            onClick=""
            className={activePage === 2 ? "active-image" : ""}
          />
        </Link>

        <Link to="/blog" className="footer_blog_logo">
          <img
            src={Blog_Icon}
            alt="logo_blog"
            Link
            to="inscription"
            onClick=""
            className={activePage === 3 ? "active-image" : ""}
          />
        </Link>
        <Link to="/params" className="footer_params_logo">
          <img
            src={Params_Icon}
            alt="logo_params"
            Link
            to="inscription"
            onClick=""
            className={activePage === 4 ? "active-image" : ""}
          />
        </Link>
      </nav>
    </div>
  );
}
