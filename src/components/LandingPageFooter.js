import React, {useContext} from "react";
import {Mixpanel} from '../api/mixpanel'
import {Context as LocalStorageContext} from '../context/LocalStorageContext'
import {Link} from 'react-router-dom'
import fbicon from './../assets/img/icons/social/facebook.svg'
import twtricon from './../assets/img/icons/social/twitter.svg'
import discordicon from './../assets/img/icons/social/discord.svg'

const LandingPageFooter = () => {
  const {state, getURL} = useContext(LocalStorageContext);

  const mixpanelClickTrack = (name) => {    
    Mixpanel.track(`${name} clicked`);
  }

  const signInURL = () => {
    const url = `${process.env.REACT_APP_DASHBOARD_BASE_PATH}/signin`    
    return getURL(state, url);
  }

  const signUpURL = () => {
    const url = `${process.env.REACT_APP_DASHBOARD_BASE_PATH}/signup`    
    return getURL(state, url);    
  }

  return (
    <footer className="py-8 py-md-11 bg-gray-200">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <h3 className="footer-brand img-fluid mb-2">JustCast</h3>
            <p className="text-gray-700 mb-2">
              A better way to podcast.
            </p>

            <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
              <li className="list-inline-item list-social-item mr-3">
                <a href="https://www.facebook.com/thejustcast/" className="text-decoration-none">
                  <img src={fbicon} className="list-social-icon" alt="justcast facebook page"/>
                </a>
              </li>

              <li className="list-inline-item list-social-item mr-3">
                <a href="https://twitter.com/thejustcast" className="text-decoration-none">
                  <img src={twtricon} className="list-social-icon" alt="justcast twitter page"/>
                </a>
              </li>
              <li className="list-inline-item list-social-item mr-3">
                <a href="https://discord.gg/hYTEdGUXsN" className="text-decoration-none">
                  <img src={discordicon} className="list-social-icon" alt="justcast discord page"/>
                </a>
              </li>
              
            </ul>

          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="font-weight-bold text-uppercase text-gray-700">
              JustCast
            </h6>
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a href="/private-podcast" className="text-reset">Private podcast</a>
              </li>
              <li className="mb-3">
                <a href="/church-podcasting" className="text-reset">Podcast Hosting for Churches</a>
              </li>
              <li className="mb-3">
                <a href="/affiliates" className="text-reset">
                  Affiliates Program
                </a>
              </li>              
              <li className="mb-3">
                <a href={signUpURL()} 
                onClick={() => {
                  mixpanelClickTrack("Sign up")
                }}                
                className="text-reset" target="_blank">
                  Sign Up
                </a>
              </li>              
              <li className="mb-3">
                <a href={signInURL()} 
                onClick={() => {
                  mixpanelClickTrack("Sign in")
                }}
                className="text-reset" 
                target="_blank">
                  Log in
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="font-weight-bold text-uppercase text-gray-700">
              Resources
            </h6>
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a href="/mailerlite-podcast-integration" className="text-reset">MailerLite Integration</a>
              </li>              
              <li className="mb-3">
                <a href="/integration-twitter" className="text-reset">Twitter Integration</a>
              </li>
              <li className="mb-3">
                <a href="https://medium.com/@justcastapp" target="_blank" className="text-reset">
                  Blog
                </a>
              </li>
              <li className="mb-3">
                <a href="https://justcast.zendesk.com/hc/en-us" target="_blank" className="text-reset">
                  Help
                </a>
              </li>
            </ul>

          </div>
          <div className="col-6 col-md-4 col-lg-2">        
            <h6 className="font-weight-bold text-uppercase text-gray-700">
              COMPANY
            </h6>
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a href="/about_us" className="text-reset">
                  About us
                </a>
              </li>
              <li className="mb-3">
                <a href="/terms" className="text-reset">
                  Terms
                </a>
              </li>
              <li className="mb-3">
                <a href="/privacy" className="text-reset">
                  Privacy
                </a>
              </li>                     
              <li className="mb-3">
                <a href="mailto:justcastapp@gmail.com" className="text-reset">Contact us</a>
              </li>       
            </ul>
          </div>       
        </div>
        <div className="row">
          <div className="col-12">
            <br/>
            <p>© {(new Date()).getFullYear()} JustCast All rights reserved.</p>
          </div>          
        </div>
      </div> 
    </footer>
  )
}

export default LandingPageFooter;