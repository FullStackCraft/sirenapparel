import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sFirstName: '',
      sLastName: '',
      sEmail: '',
      sPhone: '',
      sMessage: '',
      sMessageButtonText: 'send message',
      sMessageButtonClass: 'contact-btn'
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  sendMessage() {
    axios.post("https://sirenapparel.us/new-message", this.state)
    .then(function (response) {
      // response.data
      this.setState({sMessageButtonText: 'Thank you!', sMessageButtonClass: 'contact-btn success'});
      })
      .catch(function (error) {
        this.setState({sMessageButtonText: 'Woops! Not Sent :(', sMessageButtonClass: 'contact-btn error'});
    });
  }
  handleChange(i, event) {
    console.log(i.target.name);
    console.log(i.target.value);
    // console.log(event.target.value);
     // let values = [...this.state.values];
    // values[i] = event.target.value;
     this.setState({ [i.target.name]: i.target.value });
  }
  render() {
    return (
      <div>
        {/*menu start*/}
        <section id="menu">
          <div className="container">
            <div className="menubar">
              <nav className="navbar navbar-default">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a className="navbar-brand" href="#">
                    <img src="assets/images/logo/logo_contrast.svg" width="45px" alt="logo" />
                  </a>
                </div>{/*/.navbar-header */}
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                    <li className="smooth-menu"><a href="#story">Story</a></li>
                    <li className="smooth-menu"><a href="#charity">Charity</a></li>
                    <li className="smooth-menu"><a href="#products">Products</a></li>
                    <li className="smooth-menu"><a href="#contact">Contact</a></li>
                  </ul>{/* / ul */}
                </div>{/* /.navbar-collapse */}
              </nav>{/*/nav */}
            </div>{/*/.menubar */}
          </div>{/* /.container */}
        </section>{/*/#menu*/}
        {/*menu end*/}
        {/* header-slider-area start */}
        <section className="header-slider-area">
          <div id="home" className="carousel slide carousel-fade" data-ride="carousel">
            {/* Wrapper for slides */}
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <div className="single-slide-item slide-1">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="single-slide-item-content">
                          <img src="assets/images/logo/logo_contrast.svg" width="150px" alt="logo" />
                          <h2 className="light-text">We Are Siren Apparel.</h2>
                          <p className="light-text">
                            <b>We create eye-catching and independently designed clothing and donate profits to fire &amp; police departments, forest range offices, and emergency medical response organizations.</b>
                          </p>
                          <li className="smooth-menu" style={{listStyle: 'none'}}>
                            <a href="#story">
                              <button type="button" className="slide-btn">
                                our story
                              </button>
                            </a>
                            <a href="#charity">
                              <button type="button" className="slide-btn">
                                charity and donations
                              </button>
                            </a>
                            <a href="#products">
                              <button type="button" className="slide-btn">
                                view products
                              </button>
                            </a>
                          </li>
                        </div>{/* /.single-slide-item-content*/}
                      </div>{/* /.col*/}
                    </div>{/* /.row*/}
                  </div>{/* /.container*/}
                </div>{/* /.single-slide-item*/}
              </div>{/* /.item .active*/}
            </div>{/* /.carousel-inner*/}
          </div>{/* /.carousel*/}
        </section>{/* /.header-slider-area*/}
        {/* header-slider-area end */}
        {/*story start*/}
        <section id="story" className="contact">
          <div className="container">
            <div className="contact-details">
              <div className="section-header contact-head  text-center">
                <h2>Our Story</h2>
                <p>
                  Our story begins in Potsdam, New York with Chris Frewin, who wanted to build a company to support civil service workers of all kinds: 
                  fire fighters, police officers, forest rangers, and EMTs. Chris though about how he could increase national recognition for groups across 
                  the United States - a charity fund or organization wouldn't be enough exposure. He wanted something physical that would be eye-catching 
                  and get people's attention across the country, sharing stories of police and fire departments nation wide. He was inspired by the charity 
                  based business model of Tom's Shoes, so an apparel company was on his mind. Chris realized he was also creating a lot of art and designs as a hobby. 
                  So, combining these art skills with a charity business model like Tom's, Siren Apparel was born! 
                </p>
                <p>
                  Hi all,<br />
                  Chris here - we're just getting started with this new site and Amazon, so if you have any questions, 
                  feel free to send a message in the contact form at the bottom of this page, or email us at <a href="mailto:sirenapparel@gmail.com">sirenapparel@gmail.com</a>.<br />
                  I'm also the primary software developer of the site, so if anything is off, please let me know!<br />
                  <br />
                  Cheers!<br />
                  <br />
                  Chris Frewin
                </p>
              </div>{/*/.section-header*/}
            </div>{/*/.contact-details*/}
          </div>{/*/.container*/}
        </section>{/*/.story*/}
        {/*charity start*/}
        <section id="charity" className="charity">
          <div className="container">
            <div className="charity-details">
              <div className="section-header charity-head  text-center">
                <h2>Charity and Donations</h2>
                <p>
                  So far, we have donated over $500 to five police and fire departments or organizations:
                </p>
                <p>
                  <a href="http://www.fire.ca.gov/" target="_blank" className="white-bold-link">Cal Fire, California</a>,
                  $120
                </p>
                <p>
                  <a href="http://normanfire.normanok.gov/" target="_blank" className="white-bold-link">City of Norman Fire Department, Oklahoma</a>,
                  $120
                </p>
                <p>
                  <a href="https://www.baltimorepolice.org/" target="_blank" className="white-bold-link">Baltimore City Police Department, Maryland</a>,
                  $120
                </p>
                <p>
                  <a href="http://txwildfirerelief.org/" target="_blank" className="white-bold-link">The Texas Wildfire Fund</a>,
                  $120
                </p>
                <p>
                  <a href="http://www.utahcountyfire.org/" target="_blank" className="white-bold-link">Utah County Fire Department, Utah</a>,
                  $120
                </p>
              </div>{/*/.section-header*/}
            </div>{/*/.contact-details*/}
          </div>{/*/.container*/}
        </section>{/*/.charity*/}
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
                        <img src="assets/images/products/tshirt1.jpg" alt="Classic Hydrant Removal T-Shirt" />
                      </div>{/*/.service-img*/}
                      <div className="service-txt">
                        <h2>
                          <a href="https://www.amazon.com/dp/B07DW6RJ5H" target="_blank">Classic Hydrant Removal T-Shirt</a>
                        </h2>
                        <p>
                          Our classic hydrant removal design. Get the one in orange for the true original design that we had in our original crowd fund! Complete with front and back printing.
                        </p>
                        <a href="https://www.amazon.com/dp/B07DW6RJ5H" target="_blank" className="service-btn">
                          Buy on Amazon.com
                        </a>
                      </div>{/*/.service-txt*/}
                    </div>{/*/.service-single*/}
                  </div>{/*/.col*/}
                  <div className="col-sm-6 col-xs-12">
                    <div className="service-single text-center">
                      <div className="service-img">
                        <img src="assets/images/products/tshirt2.jpg" alt="Roll Out T-Shirt" />
                      </div>{/*/.service-img*/}
                      <div className="service-txt">
                        <h2>
                          <a href="https://www.amazon.com/dp/B07DWBTFL8" target="_blank">Roll Out T-Shirt</a>
                        </h2>
                        <p>
                          Roll out the big guns with this bold t-shirt design! Front and back printing.
                        </p>
                        <a href="https://www.amazon.com/dp/B07DWBTFL8" target="_blank" className="service-btn">
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
                        <img src="assets/images/products/tshirt3.jpg" alt="Big Hydrant Logo - Blue" />
                      </div>{/*/.service-img*/}
                      <div className="service-txt">
                        <h2>
                          <a href="https://www.amazon.com/dp/B07FGHJDTC" target="_blank">Big Hydrant Logo - Blue</a>
                        </h2>
                        <p>
                          The biggest print we could manage - this one is sure to get questions and compliments from friends and family. We won't mind if you mention what we are trying to do here at Siren Apparel!
                        </p>
                        <a href="https://www.amazon.com/dp/B07FGHJDTC" target="_blank" className="service-btn">
                          Buy on Amazon.com
                        </a>
                      </div>{/*/.service-txt*/}
                    </div>{/*/.service-single*/}
                  </div>{/*/.col*/}
                  <div className="col-sm-6 col-xs-12">
                    <div className="service-single text-center">
                      <div className="service-img">
                        <img src="assets/images/products/tshirt4.jpg" alt="Big Hydrant Logo - Red" />
                      </div>{/*/.service-img*/}
                      <div className="service-txt">
                        <h2>
                          <a href="https://www.amazon.com/dp/B07DVZ2GDW" target="_blank">Big Hydrant Logo - Red</a>
                        </h2>
                        <p>
                          Just like the blue version, but with our signature deep red
                        </p>
                        <a href="https://www.amazon.com/dp/B07DVZ2GDW" target="_blank" className="service-btn">
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
        {/*contact start*/}
        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-details">
              <div className="section-header contact-head  text-center">
                <h2>contact us</h2>
                <p>
                  Questions? Problems? Design ideas? Favorite Harry Potter movie? Give us a call or send us a message!
                </p>
              </div>{/*/.section-header*/}
              <div className="contact-content">
                <div className="row">
                  <div className="col-sm-offset-1 col-sm-5">
                    <div className="single-contact-box">
                      <div className="contact-right">
                        <div className="contact-adress">
                          <div className="contact-office-address">
                            <h3>contact info</h3>
                            <p>
                              Saratoga, New York
                            </p>
                            <div className="contact-online-address">
                              <div className="single-online-address">
                                <i className="fa fa-phone" />
                                +1 (607) 288 2005
                              </div>{/*/.single-online-address*/}
                              <div className="single-online-address">
                                <i className="fa fa-envelope-o" />
                                <span>sirenapparel@gmail.com</span>
                              </div>{/*/.single-online-address*/}
                            </div>{/*/.contact-online-address*/}
                          </div>{/*/.contact-office-address*/}
                          <div className="contact-office-address">
                            <h3>socials</h3>
                            <div className="contact-icon">
                              <ul>
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>{/*/li*/}
                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>{/*/li*/}
                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>{/*/li*/}
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>{/*/li*/}
                              </ul>{/*/ul*/}
                            </div>{/*/.contact-icon*/}
                          </div>{/*/.contact-office-address*/}
                        </div>{/*/.contact-address*/}
                      </div>{/*/.contact-right*/}
                    </div>{/*/.single-contact-box*/}
                  </div>{/*/.col*/}
                  <div className="col-sm-5">
                    <div className="single-contact-box">
                      <div className="contact-form">
                        <h3>Send us a message</h3>
                        <form>
                          <div className="row">
                            <div className="col-sm-6 col-xs-12">
                              <div className="form-group">
                                <input type="text" className="form-control" id="firstname" placeholder="First Name" name="sFirstName" onChange={this.handleChange}/>
                              </div>{/*/.form-group*/}
                            </div>{/*/.col*/}
                            <div className="col-sm-6 col-xs-12">
                              <div className="form-group">
                                <input type="text" className="form-control" id="lastname" placeholder="Last Name" name="sLastName" onChange={this.handleChange}/>
                              </div>{/*/.form-group*/}
                            </div>{/*/.col*/}
                          </div>{/*/.row*/}
                          <div className="row">
                            <div className="col-sm-6 col-xs-12">
                              <div className="form-group">
                                <input type="email" className="form-control" id="email" placeholder="Email" name="sEmail" onChange={this.handleChange}/>
                              </div>{/*/.form-group*/}
                            </div>{/*/.col*/}
                            <div className="col-sm-6 col-xs-12">
                              <div className="form-group">
                                <input type="text" className="form-control" id="phone" placeholder="Phone" name="sPhone" onChange={this.handleChange}/>
                              </div>{/*/.form-group*/}
                            </div>{/*/.col*/}
                          </div>{/*/.row*/}
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                <textarea className="form-control" rows={7} id="comment" placeholder="Message..." name="sMessage" defaultValue={""} onChange={this.handleChange}/>
                              </div>{/*/.form-group*/}
                            </div>{/*/.col*/}
                          </div>{/*/.row*/}
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="single-contact-btn pull-right">
                                <button className={this.state.sMessageButtonClass} type="button" onClick={this.sendMessage}>{this.state.sMessageButtonText}</button>
                              </div>{/*/.single-single-contact-btn*/}
                            </div>{/*/.col*/}
                          </div>{/*/.row*/}
                        </form>{/*/form*/}
                      </div>{/*/.contact-form*/}
                    </div>{/*/.single-contact-box*/}
                  </div>{/*/.col*/}
                </div>{/*/.row*/}
              </div>{/*/.contact-content*/}
            </div>{/*/.contact-details*/}
          </div>{/*/.container*/}
        </section>{/*/.contact*/}
        {/* footer-copyright start */}
        <footer className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-sm-7">
                <div className="foot-copyright pull-left">
                  <p>
                    © 2018 All Rights Reserved
                     <a href="https://www.themesine.com" className="white-bold-link">ThemeSINE</a> &amp; React-ified by <a href="https://chrisfrew.in" className="white-bold-link">Chrisfrew.in Productions</a>
                  </p>
                </div>{/*/.foot-copyright*/}
              </div>{/*/.col*/}
              <div className="col-sm-5">
                <div className="foot-menu pull-right white-bold-link">	  
                  <ul>
                    {/* <li><a href="https://sirenapparel.us/legal" class="white-bold-link">legal</a></li>
								<li><a href="https://sirenapparel.us/sitemap" class="white-bold-link">sitemap</a></li>
								<li><a href="https://sirenapparel.us/privacy-policy" class="white-bold-link">privacy policy</a></li> */}
                  </ul>
                </div>{/* /.foot-menu*/}
              </div>{/*/.col*/}
            </div>{/*/.row*/}
            <div id="scroll-Top">
              <i className="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" title data-original-title="Back to Top" aria-hidden="true" />
            </div>{/*/.scroll-Top*/}
          </div>{/* /.container*/}
        </footer>{/* /.footer-copyright*/}
        {/* footer-copyright end */}
      </div>
    );
  }
}

export default App;
