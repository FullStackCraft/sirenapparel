import React, { Component } from 'react';
import './styles/App.css';
import { determineLocation } from './utils';

// custom components
import Nav from './components/Nav';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer';

class App extends Component {
  render() {
    // determine which site to render
    let sSite = determineLocation();
    return (
      <div>
        <Nav locale={this.props.locale} sSite={sSite}/>
          <HomePage sSite={sSite}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
