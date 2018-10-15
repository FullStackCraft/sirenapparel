import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import store from '../store';
import ReactCountryFlag from 'react-country-flag';

// constant variables
import * as CONSTANTS from '../constants';

// custom components
import LocaleModal from './LocaleModal';

// requires
const axios = require("axios");
let aJSON = require("../data/codes.json"); // two letter ISO to three letter ISO country codes
let logoContrast = require('../images/logo/logo_contrast.svg');

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      bLocaleModalOpen: false,
      sShopText: "",
      sBlogLink: ""
    }
    this.determineCountryFlag = this.determineCountryFlag.bind(this);
    this.determineLocationBasedElements = this.determineLocationBasedElements.bind(this);
    this.openLocaleModal = this.openLocaleModal.bind(this);
  }
  determineCountryFlag(sIsoAlpha2Code) {
    let sIsoAlpha3Code;
    for (var i = 0; i < aJSON.length; i++) {
      if (aJSON[i].iso_alpha_2 === sIsoAlpha2Code) { // look for the entry with a matching code
        sIsoAlpha3Code = aJSON[i].iso_alpha_3; // flag needs three letter code
        return (
          <ReactCountryFlag code={sIsoAlpha2Code}/>
        );
      }
    }
  }
  determineLocationBasedElements() { // determines location based texts: so far, site name, and blog link
    const state = store.getState();
    let sShopText, sBlogLink; 
    // shop text determination
    if (state.sSite === CONSTANTS.US) {
      sShopText = "US";
    } else if (state.sSite === CONSTANTS.EU) {
      sShopText = "EU";
    } else if (state.sSite === CONSTANTS.ASIA) {
      sShopText = "Asia";
    } else { // default to US
      sShopText = "US";
    }
    // blog link determination (different for production and dev)
    if (process.env.NODE_ENV === 'production') {
      if (state.sSite === CONSTANTS.US) {
        sBlogLink = "https://sirenapparel.us/blog";
      } else if (state.sSite === CONSTANTS.EU) {
        sBlogLink = "https://sirenapparel.eu/blog";
      } else if (state.sSite === CONSTANTS.ASIA) {
        sBlogLink = "https://sirenapparel.asia/blog";
      } else { // default to US
        sBlogLink = "https://sirenapparel.us/blog";
      }
    } else {
      sBlogLink = process.env.REACT_APP_ROOT_URL + "/blog";
    }
    this.setState({sShopText: sShopText, sBlogLink: sBlogLink});
  }
  openLocaleModal() {
    this.setState({bLocaleModalOpen: true});
  }
  closeLocaleModal() {
    this.setState({bLocaleModalOpen: false});
  }
  componentWillMount() {
    this.determineLocationBasedElements();
  }
  render () {
    const { bLocaleModalOpen } = this.state;
    let oFlag;
    let sLanguage = this.props.locale.split('-')[0].toUpperCase(); // locale doesn't always have country code so just get the language
    let sIsoAlpha2Code = this.props.locale.split('-')[1]; // if the locale has the secondary country, take interval
    if (sIsoAlpha2Code) { // if country locale is part of locale, use it!
      oFlag = this.determineCountryFlag(sIsoAlpha2Code);
    } else { // otherwise use ipstack API on service with the user's api
      axios.post(process.env.REACT_APP_ROOT_URL + "/user-location")
        .then(function (oResponse) {
          if (oResponse.data.sIsoAlpha2Code) {
            oFlag = this.determineCountryFlag(oResponse.data.sIsoAlpha2Code);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    console.log(this.state.sBlogLink);
    return (
      <div>
        {/*menu start*/}
        <section id="menu">
          { bLocaleModalOpen && 
          <div>
            <LocaleModal closeLocaleModal={this.closeLocaleModal}/>
          </div>
          }
          <div className="container">
            <div className="menubar">
              <nav className="navbar navbar-default">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <li className="smooth-menu no-decoration">
                    <a className="navbar-brand" href="#home">
                      <img src={logoContrast} width="45px" alt="logo" />
                    </a>
                  </li>
                </div>{/*/.navbar-header */}
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a href="https://www.facebook.com/sirenapparel/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true" /></a>{/*/li*/} <span className="light-text">|</span> <a href="https://twitter.com/siren_apparel" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true" /></a>{/*/li*/} <span className="light-text">|</span> <a href="https://www.instagram.com/sirenapparel.us" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true" /></a><span className="light-text">|</span> <a href="https://www.medium.com/@sirenapparel" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium" aria-hidden="true" /></a>
                    </li>{/*/li*/}
                    <li className="smooth-menu"><a href="#story"><FormattedMessage id="Nav.story"/></a></li>
                    <li className="smooth-menu"><a href="#charity"><FormattedMessage id="Nav.charity"/></a></li>
                    <li className="smooth-menu"><a href="#products"><FormattedMessage id="Nav.products"/></a></li>
                    <li className="smooth-menu"><a href="#contact"><FormattedMessage id="Nav.contact"/></a></li>
                    <li className="smooth-menu"><a href="#cart">
                      <div className="App__view-cart-wrapper">
                        { this.props.iCartCount === 0 && <button className="App__view-cart" onClick={this.props.handleCartOpen}>Cart</button> }
                        { this.props.iCartCount > 0 && <button className="App__view-cart" onClick={this.props.handleCartOpen}>Cart ({this.props.iCartCount})</button> }
                      </div>
                    </a></li>
                    <li className="smooth-menu no-decoration">
                      <a href="#location-langauge" onClick={this.openLocaleModal}>
                        {this.state.sShopText} Shop | {sLanguage} | { oFlag && <div style={{'display':'inLine'}}>{ oFlag }</div>}
                      </a> 
                    </li>
                  </ul>{/* / ul */}
                </div>{/* /.navbar-collapse */}
              </nav>{/*/nav */}
            </div>{/*/.menubar */}
          </div>{/* /.container */}
        </section>{/*/#menu*/}
        {/*menu end*/}
      </div>
    )
  }
}

export default connect((state) => state)(Nav);