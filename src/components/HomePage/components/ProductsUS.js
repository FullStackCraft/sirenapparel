import React from 'react'
import PropTypes from 'prop-types'

// images
let tshirt1 = require('../../../images/products/tshirt1.jpg');
let tshirt2 = require('../../../images/products/tshirt2.jpg');
let tshirt3 = require('../../../images/products/tshirt3.jpg');
let tshirt4 = require('../../../images/products/tshirt4.jpg');

class ProductsUS extends React.Component {
  render () {
    return (
      <div>
        {/*products start*/}
        <section id="products" className="service">
          <div className="container">
            <div className="service-details">
              <div className="section-header text-center">
                <h2>Products</h2>
                <p>
                  Uniquely and independently designed.<br />
                  Shipping worldwide through Amazon.
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
                          <a href="https://www.amazon.com/dp/B07DW6RJ5H" target="_blank" rel="noopener noreferrer">Classic Hydrant Removal T-Shirt</a>
                        </h2>
                        <p>
                          Our classic hydrant removal design. Get the one in orange for the true original design that we had in our original crowd fund! Complete with front and back printing.
                        </p>
                        <a href="https://www.amazon.com/dp/B07DW6RJ5H" target="_blank" rel="noopener noreferrer" className="service-btn">
                          Buy on Amazon.com
                        </a>
                      </div>{/*/.service-txt*/}
                    </div>{/*/.service-single*/}
                  </div>{/*/.col*/}
                  <div className="col-sm-6 col-xs-12">
                    <div className="service-single text-center">
                      <div className="service-img">
                        <img src={tshirt2} alt="Roll Out T-Shirt" />
                      </div>{/*/.service-img*/}
                      <div className="service-txt">
                        <h2>
                          <a href="https://www.amazon.com/dp/B07DWBTFL8" target="_blank" rel="noopener noreferrer">Roll Out T-Shirt</a>
                        </h2>
                        <p>
                          Roll out the big guns with this bold t-shirt design! Front and back printing.
                        </p>
                        <a href="https://www.amazon.com/dp/B07DWBTFL8" target="_blank" rel="noopener noreferrer" className="service-btn">
                          Buy on Amazon.com
                        </a>
                      </div>{/*/.service-txt*/}
                    </div>{/*/.service-single*/}
                  </div>{/*/.col*/}
                </div>{/*/.row*/}
              </div>{/*/.service-content-one*/}
              <div className="service-content-two">
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <div className="service-single text-center">
                      <div className="service-img">
                        <img src={tshirt3} alt="Big Hydrant Logo - Blue" />
                      </div>{/*/.service-img*/}
                      <div className="service-txt">
                        <h2>
                          <a href="https://www.amazon.com/dp/B07FGHJDTC" target="_blank" rel="noopener noreferrer">Big Hydrant Logo - Blue</a>
                        </h2>
                        <p>
                          The biggest print we could manage - this one is sure to get questions and compliments from friends and family. We won't mind if you mention what we are trying to do here at Siren Apparel!
                        </p>
                        <a href="https://www.amazon.com/dp/B07FGHJDTC" target="_blank" rel="noopener noreferrer" className="service-btn">
                          Buy on Amazon.com
                        </a>
                      </div>{/*/.service-txt*/}
                    </div>{/*/.service-single*/}
                  </div>{/*/.col*/}
                  <div className="col-sm-6 col-xs-12">
                    <div className="service-single text-center">
                      <div className="service-img">
                        <img src={tshirt4} alt="Big Hydrant Logo - Red" />
                      </div>{/*/.service-img*/}
                      <div className="service-txt">
                        <h2>
                          <a href="https://www.amazon.com/dp/B07DVZ2GDW" target="_blank" rel="noopener noreferrer">Big Hydrant Logo - Red</a>
                        </h2>
                        <p>
                          Just like the blue version, but with our signature deep red
                        </p>
                        <a href="https://www.amazon.com/dp/B07DVZ2GDW" target="_blank" rel="noopener noreferrer" className="service-btn">
                          Buy on Amazon.com
                        </a>
                      </div>{/*/.service-txt*/}
                    </div>{/*/.service-single*/}
                  </div>{/*/.col*/}
                </div>{/*/.row*/}
              </div>{/*/.service-content-two*/}
            </div>{/*/.service-details*/}
          </div>{/*/.container*/}
        </section>{/*/.service*/}
        {/*products end*/}
      </div>
    );
  }
}

export default ProductsUS;