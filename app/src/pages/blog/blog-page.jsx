import React, { Component } from "react";
import "./blog-page.css";
import Footer from "../../components/footer/footer-component";

class Blog extends Component {
  render() {
    return (
      <div>
        <div className="scan_window"></div>

        <Footer activePage={3} />
      </div>
    );
  }
}

export default Blog;
