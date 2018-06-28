import React from 'react'
import PropTypes from 'prop-types'

class Charity extends React.Component {
  render () {
    return (
      <div>
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
                  <a href="http://www.fire.ca.gov/" target="_blank" rel="noopener noreferrer" className="white-bold-link">Cal Fire, California</a>,
                  $120
                </p>
                <p>
                  <a href="http://normanfire.normanok.gov/" target="_blank" rel="noopener noreferrer" className="white-bold-link">City of Norman Fire Department, Oklahoma</a>,
                  $120
                </p>
                <p>
                  <a href="https://www.baltimorepolice.org/" target="_blank" rel="noopener noreferrer" className="white-bold-link">Baltimore City Police Department, Maryland</a>,
                  $120
                </p>
                <p>
                  <a href="http://txwildfirerelief.org/" target="_blank" rel="noopener noreferrer" className="white-bold-link">The Texas Wildfire Fund</a>,
                  $120
                </p>
                <p>
                  <a href="http://www.utahcountyfire.org/" target="_blank" rel="noopener noreferrer" className="white-bold-link">Utah County Fire Department, Utah</a>,
                  $120
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