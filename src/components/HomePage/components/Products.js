import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import store from '../../../store'
import { MenuItem } from 'react-bootstrap';

// constants
import * as CONSTANTS from '../../../constants';

class ProductsEU extends React.Component {
  constructor() {
    super();
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
  }
  addVariantToCart(variantId, quantity) {
    const state = store.getState(); // state from redux store
    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}] // id: ?
    const checkoutId = state.cart.checkout.id
    state.cart.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      store.dispatch({type: 'ADD_VARIANT_TO_CART', payload: {isCartOpen: true, checkout: res}});
    });
  }
  filterProducts() {
    
  }
  render () {
    const state = store.getState(); // state from redux store
    let oMessage; 
    let aMenuItems = [];
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
    CONSTANTS.aFilterTypes.forEach((sFilterType, iIndex) => {
      aMenuItems.push(<MenuItem eventKey={iIndex.toString()}>{sFilterType}</MenuItem>)
      // <MenuItem eventKey="2">Another action</MenuItem>
      // <MenuItem eventKey="3">Something else here</MenuItem>
      // <MenuItem divider />
      // <MenuItem eventKey="4">Separated link</MenuItem>
    });
    // {oProducts} // no more shopify :(
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
                <br/>
                <h2>
                  Due to lack of interest and traffic, we are no longer producing or shipping our apparel from Shopify :( 
                </h2>
                <br/>
                <a href="https://www.redbubble.com/people/sirenapparel/" target="_blank" rel="noopener noreferrer">
                  <h2 className="">
                      We have moved all our work to <span style={{textDecoration:'underline'}}>our Redbubble page</span>.
                  </h2>
                </a>
              </div>{/*/.section-header*/}  
            </div>{/*/.service-details*/}
          </div>{/*/.container*/}
        </section>{/*/.service*/}
        {/*products end*/}
      </div>
    );
  }
}

export default connect((state) => state)(ProductsEU);