import React, { Component } from 'react';
import './styles/App.css';

// custom components
import Nav from './components/Nav';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
          <HomePage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
