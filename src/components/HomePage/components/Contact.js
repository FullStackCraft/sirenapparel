import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

// component constants
const SEND = "SEND";
const THANKS = "THANKS";
const ERROR = "ERROR";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      sFirstName: '',
      sLastName: '',
      sEmail: '',
      sPhone: '',
      sMessage: '',
      sMessageButtonText: SEND,
      sMessageButtonClass: 'contact-btn',
      bButtonDisabled: false
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.determineMessageButton = this.determineMessageButton.bind(this);
  }
  sendMessage() {
    axios.post(process.env.REACT_APP_ROOT_URL + "/new-message", this.state)
    .then((response) => {
      // response.data
      this.setState({sMessageButtonText: THANKS, sMessageButtonClass: 'contact-btn success', bButtonDisabled: true});
      })
      .catch((error) => {
        this.setState({sMessageButtonText: ERROR, sMessageButtonClass: 'contact-btn error'});
    });
  }
  handleChange(i, event) {
     this.setState({ [i.target.name]: i.target.value });
  }
  determineMessageButton() {
    console.log(this.state.sMessageButtonText)
    if (this.state.sMessageButtonText === SEND) {
      return (
        <FormattedMessage id='Contact.sendMessageSend'>
          { sendMessageSend => <button className={this.state.sMessageButtonClass} type="button" onClick={this.sendMessage} disabled={this.state.bButtonDisabled}>{sendMessageSend}</button> }
        </FormattedMessage>
      );
    } else if (this.state.sMessageButtonText === THANKS) {
      return (
        <FormattedMessage id='Contact.sendMessageThanks'>
          { sendMessageThanks => <button className={this.state.sMessageButtonClass} type="button" onClick={this.sendMessage} disabled={this.state.bButtonDisabled}>{sendMessageThanks}</button> }
        </FormattedMessage>
      );
    } else {
      return (
        <FormattedMessage id='Contact.sendMessageError'>
          { sendMessageError => <button className={this.state.sMessageButtonClass} type="button" onClick={this.sendMessage} disabled={this.state.bButtonDisabled}>{sendMessageError}</button> }
        </FormattedMessage>
      );
    }
  }
  render () {
    // <input type="text" className="form-control" id="firstname" placeholder="First Name" name="sFirstName" onChange={this.handleChange}/>
    const oFirstNameInput = <FormattedMessage id='Contact.firstNamePlaceholder'>
      { firstNamePlaceholder => <input type="text" className="form-control" id="firstname" placeholder={firstNamePlaceholder} name="sFirstName" onChange={this.handleChange}/> }
    </FormattedMessage>
    const oLastNameInput = <FormattedMessage id='Contact.lastNamePlaceholder'>
      { lastNamePlaceholder => <input type="text" className="form-control" id="lastname" placeholder={lastNamePlaceholder} name="sLastName" onChange={this.handleChange}/> }
    </FormattedMessage>
    const oEmailInput = <FormattedMessage id='Contact.emailPlaceholder'>
      { emailPlaceholder => <input type="email" className="form-control" id="email" placeholder={emailPlaceholder} name="sEmail" onChange={this.handleChange}/> }
    </FormattedMessage>
    const oPhoneInput = <FormattedMessage id='Contact.phonePlaceholder'>
      { phonePlaceholder => <input type="text" className="form-control" id="phone" placeholder={phonePlaceholder} name="sPhone" onChange={this.handleChange}/> }
    </FormattedMessage>
    const oMessageInput = <FormattedMessage id='Contact.messagePlaceholder'>
      { messagePlaceholder => <textarea className="form-control" rows={7} id="comment" placeholder={messagePlaceholder} name="sMessage" defaultValue={""} onChange={this.handleChange}/> }
    </FormattedMessage>
    const oSendMessageButton = this.determineMessageButton();
    return (
      <div>
        {/*contact start*/}
        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-details">
              <div className="section-header contact-head  text-center">
                <h2><FormattedMessage id="Contact.title"/></h2>
                <p>
                  <FormattedMessage id="Contact.description"/>
                </p>
              </div>{/*/.section-header*/}
              <div className="contact-content">
                <div className="row">
                  <div className="col-sm-offset-1 col-sm-5">
                    <div className="single-contact-box">
                      <div className="contact-right">
                        <div className="contact-adress">
                          <div className="contact-office-address">
                            <h3><FormattedMessage id="Contact.subtitle"/></h3>
                            <p>
                              Siren Apparel<br/>
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
                            <h3><FormattedMessage id="Contact.socials"/></h3>
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
                        <h3><FormattedMessage id="Contact.sendAMessage"/></h3>
                        <form>
                          <div className="row">
                            <div className="col-sm-6 col-xs-12">
                              <div className="form-group">
                                {oFirstNameInput}
                              </div>{/*/.form-group*/}
                            </div>{/*/.col*/}
                            <div className="col-sm-6 col-xs-12">
                              <div className="form-group">
                                {oLastNameInput}
                              </div>{/*/.form-group*/}
                            </div>{/*/.col*/}
                          </div>{/*/.row*/}
                          <div className="row">
                            <div className="col-sm-6 col-xs-12">
                              <div className="form-group">
                                {oEmailInput}
                              </div>{/*/.form-group*/}
                            </div>{/*/.col*/}
                            <div className="col-sm-6 col-xs-12">
                              <div className="form-group">
                                {oPhoneInput}
                              </div>{/*/.form-group*/}
                            </div>{/*/.col*/}
                          </div>{/*/.row*/}
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                {oMessageInput}
                              </div>{/*/.form-group*/}
                            </div>{/*/.col*/}
                          </div>{/*/.row*/}
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="single-contact-btn pull-right">
                                {oSendMessageButton}
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