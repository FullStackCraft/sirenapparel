// imports
import React from 'react'
import { FormattedHTMLMessage } from 'react-intl'
import { connect } from 'react-redux';
import store from '../store';

// custom imports
import { getFullLanguageText } from '../utils';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.onClickLanguage = this.onClickLanguage.bind(this);
  }
  onClickLanguage(oEvent) { // sets the language 
    console.log(oEvent.nativeEvent.target.name);
    const sFullLanguage = getFullLanguageText(oEvent.nativeEvent.target.name);
    store.dispatch({type: 'LANGUAGE_CHANGED', payload: {sLanguage: oEvent.nativeEvent.target.name, sFullLanguage: sFullLanguage}});
  }
  render () {
    return (
      <div>
        {/* footer-copyright start */}
        <footer className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-sm-7">
                <div className="foot-copyright pull-left">
                  <p>
                    <FormattedHTMLMessage id="Footer.main"/>
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
              <i className="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" data-original-title="Back to Top" aria-hidden="true" />
            </div>{/*/.scroll-Top*/}
          </div>{/* /.container*/}
        </footer>{/* /.footer-copyright*/}
        {/* footer-copyright end */}
      </div>
    );
  }
}

export default connect((state) => state)(Footer);