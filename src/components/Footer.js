// imports
import React from 'react'
import PropTypes from 'prop-types'
import { FormattedHTMLMessage } from 'react-intl'
import ReactCountryFlag from "react-country-flag";
import { connect } from 'react-redux';
import store from '../store';

// custom imports
import { determineCountryFlag, getFullLanguageText } from '../utils';

// requires
const axios = require('axios');

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.onClickLanguage = this.onClickLanguage.bind(this);
  }
  onClickLanguage(oEvent) { // sets the language 
    console.log(oEvent.nativeEvent.target.name);
    const sFullLanguage = getFullLanguageText(oEvent.nativeEvent.target.name);
    store.dispatch({type: 'LANGUAGE_CHANGED', payload: {sLanguage: oEvent.nativeEvent.target.name, sFullLanguage: sFullLanguage}});
  }
  render () {
    let oFlag;
    let sIsoAlpha2Code = this.props.locale.split('-')[1]; // if the locale has the secondary country, take interval
    const state = store.getState(); 
    if (sIsoAlpha2Code) { // if country locale is part of locale, use it! (this means the user has already set their preferred locale in the browser)
      oFlag = <ReactCountryFlag code={sIsoAlpha2Code}/>
    } else { // otherwise use ipstack API on service with the user's api
      axios.post(process.env.REACT_APP_ROOT_URL + "/user-country")
        .then(function (oResponse) {
          if (oResponse.data.sIsoAlpha2Code) {
            oFlag = <ReactCountryFlag code={sIsoAlpha2Code}/>
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    let oLanguageDropDown = (
      <div className="dropup">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {state.language.sFullLanguage}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item dropdownItemStyled" href="#" name="en" onClick={this.onClickLanguage}>English</a><br/>
          <a className="dropdown-item dropdownItemStyled" href="#" name="de" onClick={this.onClickLanguage}>Deutsch</a><br/>
          <a className="dropdown-item dropdownItemStyled" href="#" name="fr" onClick={this.onClickLanguage}>Français</a><br/>
          <a className="dropdown-item dropdownItemStyled" href="#" name="es" onClick={this.onClickLanguage}>Español</a><br/>
        </div>
      </div>
    );
    return (
      <div>
        {/* footer-copyright start */}
        <footer className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-sm-7">
                <div className="foot-copyright pull-left">
                  <p>
                    <FormattedHTMLMessage id="Footer.main"/>
                  </p> 
                  <br/>   
                    <div style={{'float':'left'}}>{oLanguageDropDown}</div>
                    <div style={{'float':'left'}}>&nbsp;&nbsp;</div>
                    <div style={{'float':'left'}}>{oFlag}</div>            
                </div>{/*/.foot-copyright*/}
              </div>{/*/.col*/}
              <div className="col-sm-5">
                <div className="foot-menu pull-right white-bold-link">	  
                  <ul>
                    {/* <li><a href="https://sirenapparel.us/legal" class="white-bold-link">legal</a></li>
								<li><a href="https://sirenapparel.us/sitemap" class="white-bold-link">sitemap</a></li>
								<li><a href="https://sirenapparel.us/privacy-policy" class="white-bold-link">privacy policy</a></li> */}
                  </ul>
                  
                </div>{/* /.foot-menu*/}
              </div>{/*/.col*/}
              
            </div>{/*/.row*/}
            <div id="scroll-Top">
              <i className="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" data-original-title="Back to Top" aria-hidden="true" />
            </div>{/*/.scroll-Top*/}
          </div>{/* /.container*/}
        </footer>{/* /.footer-copyright*/}
        {/* footer-copyright end */}
      </div>
    );
  }
}

export default connect((state) => state)(Footer);