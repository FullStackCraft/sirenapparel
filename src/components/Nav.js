import React from 'react'
import PropTypes from 'prop-types'
let logoContrast = require('../images/logo/logo_contrast.svg');

class Nav extends React.Component {
  render () {
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
                    <li className="smooth-menu"><a href="#story">Story</a></li>
                    <li className="smooth-menu"><a href="#charity">Charity</a></li>
                    <li className="smooth-menu"><a href="#products">Products</a></li>
                    <li className="smooth-menu"><a href="#contact">Contact</a></li>
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