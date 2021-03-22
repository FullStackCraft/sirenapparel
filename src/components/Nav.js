import React from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

// requires
let logoContrast = require("../images/logo/logo_contrast.svg");

class Nav extends React.Component {
  render() {
    return (
      <div>
        {/*menu start*/}
        <section id="menu">
          <div className="container">
            <div className="menubar">
              <nav className="navbar navbar-default">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
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
                </div>
                {/*/.navbar-header */}
                {/* Collect the nav links, forms, and other content for toggling */}
                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-1"
                >
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a
                        href="https://www.facebook.com/sirenapparel/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                      <a
                        href="https://twitter.com/siren_apparel"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </a>
                      <a
                        href="https://www.instagram.com/sirenapparel.us"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                      <a
                        href="https://www.medium.com/@sirenapparel"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-medium" aria-hidden="true" />
                      </a>
                      <a
                        href="https://www.redbubble.com/people/sirenapparel/shop"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        RedBubble Shop
                      </a>
                    </li>

                    <li className="smooth-menu">
                      <a href="#story">
                        <FormattedMessage id="Nav.story" />
                      </a>
                    </li>
                    <li className="smooth-menu">
                      <a href="#charity">
                        <FormattedMessage id="Nav.charity" />
                      </a>
                    </li>
                    <li className="smooth-menu">
                      <a href="#products">
                        <FormattedMessage id="Nav.products" />
                      </a>
                    </li>
                    <li className="smooth-menu">
                      <a href="#contact">
                        <FormattedMessage id="Nav.contact" />
                      </a>
                    </li>
                    <li className="smooth-menu">
                      <a href="#cart">
                        <div className="App__view-cart-wrapper">
                          {this.props.iCartCount === 0 && (
                            <button
                              className="App__view-cart"
                              onClick={this.props.handleCartOpen}
                            >
                              Cart
                            </button>
                          )}
                          {this.props.iCartCount > 0 && (
                            <button
                              className="App__view-cart"
                              onClick={this.props.handleCartOpen}
                            >
                              Cart ({this.props.iCartCount})
                            </button>
                          )}
                        </div>
                      </a>
                    </li>
                  </ul>
                  {/* / ul */}
                </div>
                {/* /.navbar-collapse */}
              </nav>
              {/*/nav */}
            </div>
            {/*/.menubar */}
          </div>
          {/* /.container */}
        </section>
        {/*/#menu*/}
        {/*menu end*/}
      </div>
    );
  }
}

export default connect((state) => state)(Nav);
