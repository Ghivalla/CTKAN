import React from "react";

import "./ajouter-page.css";
import cat1_Icon from "../../assets/cat1.svg";
import cat2_Icon from "../../assets/cat2.svg";
import cat3_Icon from "../../assets/cat3.svg";
import FormInput from "../../components/form-input/form-input-component.jsx";
import Footer from "../../components/footer/footer-component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Ajouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: 1,
      datePeremtion: null,
    };
  }
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
              <div
                className={this.state.activeCategory === 1 ? "active-icon" : ""}
                onClick={() => this.setState({ activeCategory: 1 })}
              >
                <img src={cat1_Icon} alt=""></img>
              </div>
              <div
                className={this.state.activeCategory === 2 ? "active-icon" : ""}
                onClick={() => this.setState({ activeCategory: 2 })}
              >
                <img src={cat2_Icon} alt=""></img>
              </div>
              <div
                className={this.state.activeCategory === 3 ? "active-icon" : ""}
                onClick={() => this.setState({ activeCategory: 3 })}
              >
                <img src={cat3_Icon} alt=""></img>
              </div>
            </div>
          </div>
          <div className="peremption">
            <h2>Date de peremption:</h2>
          </div>
          <DatePicker
            contentStyle={{ width: "500px !important" }}
            showPopperArrow={false}
            selected={this.state.datePeremtion}
            onChange={(date) => this.setState({ datePeremtion: date })}
          />
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
        <Footer />
      </div>
    );
  }
}
export default Ajouter;
