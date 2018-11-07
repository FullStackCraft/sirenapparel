import React, { Component } from 'react';
import './styles/App.css';
import { connect } from 'react-redux';
import Cart from './components/shopify/Cart';
import store from './store';

// custom components
import Nav from './components/Nav';
import HomePage from './components/HomePage/HomePage';
import UnsubscribeModal from './components/UnsubscribeModal';
import Footer from './components/Footer';

// requires
const axios = require('axios');

class App extends Component {
  constructor() {
    super();
    this.state = {
      bShowUnsubscribeModal: false,
      bUnsubscribeError: false
    }
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
  }
  updateQuantityInCart(lineItemId, quantity) {
    const state = store.getState(); // state from redux store
    const checkoutId = state.cart.checkout.id
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]
    state.cart.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      store.dispatch({type: 'UPDATE_QUANTITY_IN_CART', payload: {checkout: res}});
    });
  }
  removeLineItemInCart(lineItemId) {
    const state = store.getState(); // state from redux store
    const checkoutId = state.cart.checkout.id
    state.cart.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      store.dispatch({type: 'REMOVE_LINE_ITEM_IN_CART', payload: {checkout: res}});
    });
  }
  handleCartClose() {
    store.dispatch({type: 'CLOSE_CART'});
  }
  handleCartOpen() {
    store.dispatch({type: 'OPEN_CART'});
  }
  componentWillMount() { // so far only an unsubscribe is in componentWillMount 
    if (window.location.href.includes('/unsubscribe?ref=')) {
      console.log('deleting...');
      axios.post(process.env.REACT_APP_ROOT_URL + "/unsubscribe?ref=" + window.location.href.split('/unsubscribe?ref=')[1])
      .then(() => {
        window.location.href = process.env.REACT_APP_ROOT_URL;
        this.setState({bShowUnsubscribeModal: true, bUnsubscribeError: false});
      })
      .catch((err) => {
        window.location.href = process.env.REACT_APP_ROOT_URL;
        this.setState({bShowUnsubscribeModal: true, bUnsubscribeError: true});
      });
    }
  }
  render() {
    const state = store.getState(); // state from redux store
    let iCartCount = 0;
    if (state.cart.checkout.lineItems && state.cart.checkout.lineItems.length > 0) {
      for (var i = 0; i < state.cart.checkout.lineItems.length; i++) {
        iCartCount += state.cart.checkout.lineItems[i].quantity;
      }
    } 
    return (
      <div>
        <Nav locale={this.props.locale} iCartCount={iCartCount} handleCartOpen={this.handleCartOpen}/>
          <HomePage/>
        <Footer locale={this.props.locale}/>
        <Cart
          checkout={state.cart.checkout}
          isCartOpen={state.cart.isCartOpen}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
         />
       <UnsubscribeModal bUnsubscribeError={this.state.bUnsubscribeError}/>
      </div>
    );
  }
}

export default connect((state) => state)(App);
