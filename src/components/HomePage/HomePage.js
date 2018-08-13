import React from 'react'
import PropTypes from 'prop-types'

// custom components
import Header from './components/Header';
import Story from './components/Story';
import Charity from './components/Charity';
import ProductsUS from './components/ProductsUS';
import ProductsEU from './components/ProductsEU';
import ProductsASIA from './components/ProductsASIA';
import Contact from './components/Contact';

// constants
import * as CONSTANTS from '../../constants';

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <Header sSite={this.props.sSite}/>
        <Story/>
        <Charity/>
          { this.props.sSite === CONSTANTS.US && 
            <ProductsUS/>
          }
          { this.props.sSite === CONSTANTS.EU && 
            <ProductsEU/>
          }
          { this.props.sSite === CONSTANTS.ASIA && 
            <ProductsASIA/>
          }
        <Contact/>
      </div>
    );
  }
}

export default HomePage;