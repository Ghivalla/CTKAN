import React from "react";
import Scan_Icon from "../../assets/scan.svg";
import Trousse_Icon from "../../assets/trousse.svg";
import Blog_Icon from "../../assets/blog.svg";
import Params_Icon from "../../assets/params.svg";
import "./ajouter-page.css";
import cat1_Icon from "../../assets/cat1.svg";
import cat2_Icon from "../../assets/cat2.svg";
import cat3_Icon from "../../assets/cat3.svg";
import FormInput from "../../components/form-input/form-input-component.jsx";

class Ajouter extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="search_container">
          <input className="search" type="text" placeholder="Rechercher" />
        </div>
        <div className="products_category_peremption">
          <div className="products">
            <h2>Nom du produit :</h2>
            <input className="search" type="text" />
          </div>
          <div className="category">
            <h2>Dans quelle catégorie ?</h2>

            <div className="icons_category">
              <div>
                <img src={cat1_Icon}></img>
              </div>
              <div>
                <img src={cat2_Icon}></img>
              </div>
              <div>
                <img src={cat3_Icon}></img>
              </div>
            </div>
          </div>
          <div className="peremption">
            <h2>Date de peremption:</h2>
          </div>
          <div className="peremption-elements">
            <div>
              <input className="search" type="text" />
            </div>
            <FormInput
              value="Ajouter dans la trousse"
              type="submit"
              className="btn-primary"
            />
          </div>
        </div>
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
export default Ajouter;
