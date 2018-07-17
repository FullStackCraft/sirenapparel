import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import Emoji from 'react-emoji-render';

let logoContrast = require('../../../images/logo/logo_contrast.svg');

class Header extends React.Component {
  render () {
    return (
      <div>
        {/* header-slider-area start */}
        <section className="header-slider-area">
          <div id="home" className="carousel slide carousel-fade" data-ride="carousel">
            {/* Wrapper for slides */}
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <div className="single-slide-item slide-1">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="single-slide-item-content">
                          <img src={logoContrast} width="150px" alt="logo" />
                          <h2 className="light-text"><FormattedMessage id="Header.title"/><sup><sup><sup><sup>*EU!<Emoji text=":wink:"/></sup></sup></sup></sup></h2>
                          <p className="light-text">
                            <b><FormattedMessage id="Header.description"/></b>
                          </p>
                          <li className="smooth-menu" style={{listStyle: 'none'}}>
                            <a href="#story">
                              <button type="button" className="slide-btn">
                                <FormattedMessage id="Header.story"/>
                              </button>
                            </a>
                            <a href="#charity">
                              <button type="button" className="slide-btn">
                                <FormattedMessage id="Header.charity"/>
                              </button>
                            </a>
                            <a href="#products">
                              <button type="button" className="slide-btn">
                                <FormattedMessage id="Header.products"/>
                              </button>
                            </a>
                          </li>
                        </div>{/* /.single-slide-item-content*/}
                      </div>{/* /.col*/}
                    </div>{/* /.row*/}
                  </div>{/* /.container*/}
                </div>{/* /.single-slide-item*/}
              </div>{/* /.item .active*/}
            </div>{/* /.carousel-inner*/}
          </div>{/* /.carousel*/}
        </section>{/* /.header-slider-area*/}
        {/* header-slider-area end */}
      </div>
    )
  }
}

export default Header;