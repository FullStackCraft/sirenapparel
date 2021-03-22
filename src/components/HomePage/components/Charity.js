import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

class Charity extends React.Component {
  render () {
    return (
      <div>
        {/*charity start*/}
        <section id="charity" className="charity">
          <div className="container">
            <div className="charity-details">
              <div className="section-header light-text charity-head text-center">
                <h2><FormattedMessage className="light-text" id="Charity.title"/></h2>
                <p>
                  <FormattedMessage id="Charity.description"/>
                </p>
                <p>
                  <FormattedHTMLMessage id="Charity.donation1"/>
                </p>
                <p>
                  <FormattedHTMLMessage id="Charity.donation2"/>
                </p>
                <p>
                  <FormattedHTMLMessage id="Charity.donation3"/>
                </p>
                <p>
                  <FormattedHTMLMessage id="Charity.donation4"/>
                </p>
                <p>
                  <FormattedHTMLMessage id="Charity.donation5"/>
                </p>
              </div>{/*/.section-header*/}
            </div>{/*/.contact-details*/}
          </div>{/*/.container*/}
        </section>{/*/.charity*/}
      </div>
    )
  }
}

export default Charity;