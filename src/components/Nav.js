import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import ReactCountryFlag from 'react-country-flag';

// constants 
import * as CONSTANTS from '../constants';
const axios = require("axios");
let aJSON = require("../data/codes.json"); // two letter ISO to three letter ISO country codes

let logoContrast = require('../images/logo/logo_contrast.svg');

class Nav extends React.Component {
  constructor() {
    super();
    this.determineCountryFlag = this.determineCountryFlag.bind(this);
    this.determineNavText = this.determineNavText.bind(this);
  }
  determineCountryFlag(sIsoAlpha2Code) {
    let sIsoAlpha3Code;
    for (var i = 0; i < aJSON.length; i++) {
      if (aJSON[i].iso_alpha_2 == sIsoAlpha2Code) { // look for the entry with a matching code
        sIsoAlpha3Code = aJSON[i].iso_alpha_3; // flag needs three letter code
        console.log(sIsoAlpha3Code)
        return (
          <ReactCountryFlag code={sIsoAlpha2Code}/>
        );
      }
    }
  }
  determineNavText() {
    let sSiteText; // "UNITED STATES", "EUROPE", or "ASIA"
    if (this.props.sSite === CONSTANTS.US) {
      sSiteText = "UNITED STATES";
    } else if (this.props.sSite === CONSTANTS.EU) {
      sSiteText = "EUROPE";
    } else if (this.props.sSite === CONSTANTS.ASIA) {
      sSiteText = "ASIA";
    } else { // default to US
      sSiteText = "UNITED STATES";
    }
    return sSiteText;
  }
  render () {
    console.log(this.props.locale);
    let oFlag, sSiteText;
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
    sSiteText = this.determineNavText();
    return (
      <div>
        {/*menu start*/}
        <section id="menu">
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
                    <li className="smooth-menu no-decoration">
                      <a href="#location-langauge">
                        {sSiteText} 
                      </a>
                    </li>
                    <li className="smooth-menu no-decoration">
                      <a href="#location-langauge">
                        {sLanguage}
                      </a> }
                    </li>
                    {oFlag && <li className="smooth-menu no-decoration">
                       <a href="#location-langauge">
                        { oFlag }
                      </a> 
                    </li> }
                    <li className="smooth-menu"><a href="#story"><FormattedMessage id="Nav.story"/></a></li>
                    <li className="smooth-menu"><a href="#charity"><FormattedMessage id="Nav.charity"/></a></li>
                    <li className="smooth-menu"><a href="#products"><FormattedMessage id="Nav.products"/></a></li>
                    <li className="smooth-menu"><a href="#contact"><FormattedMessage id="Nav.contact"/></a></li>
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

export default Nav;