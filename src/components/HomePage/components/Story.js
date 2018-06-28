import React from 'react'
import PropTypes from 'prop-types'

class Story extends React.Component {
  render () {
    return (
      <div>
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
      </div>
    );
  }
}

export default Story;