import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class Contact extends React.Component {
  constructor() {
    console.log(process.env.REACT_APP_NEW_MESSAGE_ROOT_URL);
    super();
    this.state = {
      sFirstName: '',
      sLastName: '',
      sEmail: '',
      sPhone: '',
      sMessage: '',
      sMessageButtonText: 'send message',
      sMessageButtonClass: 'contact-btn',
      bButtonDisabled: false
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  sendMessage() {
    axios.post(process.env.REACT_APP_NEW_MESSAGE_ROOT_URL + "/new-message", this.state)
    .then((response) => {
      // response.data
      this.setState({sMessageButtonText: 'Thank you!', sMessageButtonClass: 'contact-btn success', bButtonDisabled: true});
      })
      .catch((error) => {
        this.setState({sMessageButtonText: 'Woops! Not Sent :(', sMessageButtonClass: 'contact-btn error'});
    });
  }
  handleChange(i, event) {
     this.setState({ [i.target.name]: i.target.value });
  }
  render () {
    return (
      <div>
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
                                <li><a href="https://www.facebook.com/sirenapparel/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true" /></a></li>{/*/li*/}
                                <li><a href="https://twitter.com/siren_apparel"><i className="fa fa-twitter" aria-hidden="true" /></a></li>{/*/li*/}
                                <li><a href="https://www.instagram.com/sirenapparel.us"><i className="fa fa-instagram" aria-hidden="true" /></a></li>{/*/li*/}  
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
                                <button className={this.state.sMessageButtonClass} type="button" onClick={this.sendMessage} disabled={this.state.bButtonDisabled}>{this.state.sMessageButtonText}</button>
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
      </div>
    );
  }
}

export default Contact;