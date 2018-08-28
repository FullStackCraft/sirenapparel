import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import store from '../../../store'
import Products from '../../shopify/Products'; // shopify JS Buy SDK products 

// constants
import * as CONSTANTS from '../../../constants';

class ProductsEU extends React.Component {
  constructor() {
    super();
    this.addVariantToCart = this.addVariantToCart.bind(this);
  }
  addVariantToCart(variantId, quantity) {
    const state = store.getState(); // state from redux store
    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}] // id: ?
    const checkoutId = state.cart.checkout.id
    state.cart.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      store.dispatch({type: 'ADD_VARIANT_TO_CART', payload: {isCartOpen: true, checkout: res}});
    });
  }
  render () {
    const state = store.getState(); // state from redux store
    let oProducts = <Products
      products={state.cart.products}
      client={state.cart.client}
      addVariantToCart={this.addVariantToCart}
    />;
    let oMessage; 
    switch (state.location.sSite) {
      case CONSTANTS.US:
        oMessage = <FormattedHTMLMessage id="Products.descriptionUS"/>
        break;
      case CONSTANTS.EU:
        oMessage = <FormattedHTMLMessage id="Products.descriptionEU"/>
        break;
      case CONSTANTS.ASIA: 
        oMessage = <FormattedHTMLMessage id="Products.descriptionASIA"/>
        break;
      default:
        oMessage = <FormattedHTMLMessage id="Products.descriptionUS"/>
        break;
    }
    
    return (
      <div>
        {/*products start*/}
        <section id="products" className="service">
          <div className="container">
            <div className="service-details">
              <div className="section-header text-center">
                <h2><FormattedMessage id="Products.title"/></h2>
                <p>
                  {oMessage}
                </p>
              </div>{/*/.section-header*/}
              
                  {oProducts}
                
            </div>{/*/.service-details*/}
          </div>{/*/.container*/}
        </section>{/*/.service*/}
        {/*products end*/}
      </div>
    );
  }
}

export default connect((state) => state)(ProductsEU);