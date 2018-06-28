import React from 'react'
import PropTypes from 'prop-types'

import Header from './components/Header';
import Story from './components/Story';
import Charity from './components/Charity';
import Products from './components/Products';
import Contact from './components/Contact';

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

export default HomePage;