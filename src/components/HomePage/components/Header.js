import React from "react";
import { FormattedMessage } from "react-intl";
import Emoji from "react-emoji-render";
import { connect } from "react-redux";
import store from "../../../store";

// constants
import * as CONSTANTS from "../../../constants";

// requires
let logoContrast = require("../../../images/logo/logo_contrast.svg");
var validator = require("email-validator");
const axios = require("axios");

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      sEmail: "",
      sButtonState: CONSTANTS.SUBMIT,
      bEmailSubmitted: false,
      bDisableButton: false,
      iCount: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
  }
  handleChange(i, event) {
    this.setState({ [i.target.name]: i.target.value });
  }
  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.submitEmail();
    }
  }
  submitEmail() {
    if (this.state.sEmail === "") {
      return; // end process
    }
    if (!validator.validate(this.state.sEmail)) {
      return; // end the process
    }
    console.log(this.state.sEmail);
    var oData = { sEmail: this.state.sEmail };
    // post to server
    axios
      .post(process.env.REACT_APP_ROOT_URL + "/new-email", oData)
      .then((oData) => {
        if (oData.data.bAlreadyHaveEmail) {
          this.setState({
            bEmailSubmitted: true,
            sButtonState: CONSTANTS.SUBSCRIBED,
            bDisableButton: true,
          });
        } else {
          this.setState({
            bEmailSubmitted: true,
            sButtonState: CONSTANTS.THANK_YOU,
            bDisableButton: true,
          });
        }
      })
      .catch((error) => {
        this.setState({
          bEmailSubmitted: false,
          sButtonState: CONSTANTS.ERROR,
        });
      });
  }
  render() {
    const state = store.getState();

    return (
      <div>
        {/* header-slider-area start */}
        <section className="header-slider-area">
          <div
            id="home"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            {/* Wrapper for slides */}
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <div className="single-slide-item slide-1">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="single-slide-item-content">
                          <img src={logoContrast} width="150px" alt="logo" />
                          {state.location.sSite === CONSTANTS.US && (
                            <div>
                              <h2 className="light-text">
                                <FormattedMessage id="Header.title" />
                              </h2>
                            </div>
                          )}
                          {state.location.sSite === CONSTANTS.EU && (
                            <div>
                              <h2 className="light-text">
                                <FormattedMessage id="Header.title" />
                                <sup>
                                  <sup>
                                    <sup>
                                      <sup>
                                        *EU!
                                        <Emoji text=":wink:" />
                                      </sup>
                                    </sup>
                                  </sup>
                                </sup>
                              </h2>
                            </div>
                          )}
                          {state.location.sSite === CONSTANTS.ASIA && (
                            <div>
                              <h2 className="light-text">
                                <FormattedMessage id="Header.title" />
                                <sup>
                                  <sup>
                                    <sup>
                                      <sup>
                                        *ASIA!
                                        <Emoji text=":wink:" />
                                      </sup>
                                    </sup>
                                  </sup>
                                </sup>
                              </h2>
                            </div>
                          )}
                          <p className="light-text">
                            <b>
                              <FormattedMessage id="Header.description" />
                            </b>
                          </p>
                          <li
                            className="smooth-menu"
                            style={{ listStyle: "none" }}
                          >
                            <a href="#story">
                              <button type="button" className="slide-btn">
                                <FormattedMessage id="Header.story" />
                              </button>
                            </a>
                            <a href="#charity">
                              <button type="button" className="slide-btn">
                                <FormattedMessage id="Header.charity" />
                              </button>
                            </a>
                            <a href="#products">
                              <button type="button" className="slide-btn">
                                <FormattedMessage id="Header.products" />
                              </button>
                            </a>
                          </li>
                        </div>
                        {/* /.single-slide-item-content*/}
                      </div>
                      {/* /.col*/}
                    </div>
                    {/* /.row*/}
                  </div>
                  {/* /.container*/}
                </div>
                {/* /.single-slide-item*/}
              </div>
              {/* /.item .active*/}
            </div>
            {/* /.carousel-inner*/}
          </div>
          {/* /.carousel*/}
        </section>
        {/* /.header-slider-area*/}
        {/* header-slider-area end */}
      </div>
    );
  }
}

export default connect((state) => state)(Header);
