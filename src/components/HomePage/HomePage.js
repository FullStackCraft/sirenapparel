import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import store from '../../store';

// custom components
import Header from './components/Header';
import Story from './components/Story';
import Charity from './components/Charity';
import Products from './components/Products';
import Contact from './components/Contact';

// constants
import * as CONSTANTS from '../../constants';

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <Story/>
        <Charity/>
        <Products/>
        <Contact/>
      </div>
    );
  }
}

export default connect((state) => state)(HomePage);