import React from 'react'
import { connect } from 'react-redux';

// custom components
import Header from './components/Header';
import Story from './components/Story';
import Charity from './components/Charity';
import Products from './components/Products';

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <Story/>
        <Charity/>
        <Products/>
      </div>
    );
  }
}

export default connect((state) => state)(HomePage);