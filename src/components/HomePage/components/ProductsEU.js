import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

// images
let tshirt1 = require('../../../images/products/eu_tshirt1.png');
let tshirt2 = require('../../../images/products/eu_tshirt2.png');

class ProductsEU extends React.Component {
  render () {
    return (
      <div>
        {/*products start*/}
        <section id="products" className="service">
          <div className="container">
            <div className="service-details">
              <div className="section-header text-center">
                <h2><FormattedMessage id="Products.title"/></h2>
                <p>
                  <FormattedHTMLMessage id="Products.descriptionEU"/>
                </p>
              </div>{/*/.section-header*/}
              <div className="service-content-one">
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <div className="service-single text-center">
                      <div className="service-img">
                        <img src={tshirt1} alt="Classic Hydrant Removal T-Shirt" />
                      </div>{/*/.service-img*/}
                      <div className="service-txt">
                        <h2>
                          <a href="https://siren-apparel-usa.myshopify.com/collections/frontpage/products/siren-apparel-eu-promo-embroidered-polo" target="_blank" rel="noopener noreferrer"><FormattedMessage id="Products.product1TitleEU"/></a>
                        </h2>
                        <p>
                          <FormattedMessage id="Products.product1DescriptionEU"/>
                        </p>
                        <a href="https://siren-apparel-usa.myshopify.com/collections/frontpage/products/siren-apparel-eu-promo-embroidered-polo" target="_blank" rel="noopener noreferrer" className="service-btn">
                          <FormattedMessage id="Products.buyMessageEU"/>
                        </a>
                      </div>{/*/.service-txt*/}
                    </div>{/*/.service-single*/}
                  </div>{/*/.col*/}
                  <div className="col-sm-6 col-xs-12">
                    <div className="service-single text-center">
                      <div className="service-img">
                        <img src={tshirt2} alt="Siren Apparel x /u/thingstosay- 'The Big Fire' Mashup T-Shirt" />
                      </div>{/*/.service-img*/}
                      <div className="service-txt">
                        <h2>
                          <a href="https://siren-apparel-usa.myshopify.com/collections/frontpage/products/short-sleeve-unisex-t-shirt" target="_blank" rel="noopener noreferrer"><FormattedMessage id="Products.product2TitleEU"/></a>
                        </h2>
                        <p>
                          <FormattedMessage id="Products.product2DescriptionEU"/>
                        </p>
                        <a href="https://siren-apparel-usa.myshopify.com/collections/frontpage/products/short-sleeve-unisex-t-shirt" target="_blank" rel="noopener noreferrer" className="service-btn">
                          <FormattedMessage id="Products.buyMessageEU"/>
                        </a>
                      </div>{/*/.service-txt*/}
                    </div>{/*/.service-single*/}
                  </div>{/*/.col*/}
                </div>{/*/.row*/}
              </div>{/*/.service-content-one*/}
            </div>{/*/.service-details*/}
          </div>{/*/.container*/}
        </section>{/*/.service*/}
        {/*products end*/}
      </div>
    );
  }
}

export default ProductsEU;