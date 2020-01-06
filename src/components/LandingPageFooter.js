import React from "react";
import {Link} from 'react-router-dom'
import fbicon from './../assets/img/icons/social/facebook.svg'
import twtricon from './../assets/img/icons/social/twitter.svg'

const LandingPageFooter = () => {
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
                <a href="#!" className="text-decoration-none">
                  <img src={fbicon} className="list-social-icon" alt="..."/>
                </a>
              </li>

              <li className="list-inline-item list-social-item mr-3">
                <a href="#!" className="text-decoration-none">
                  <img src={twtricon} className="list-social-icon" alt="..."/>
                </a>
              </li>
            </ul>

          </div>
          <div className="col-6 col-md-4 col-lg-2">

            <h6 className="font-weight-bold text-uppercase text-gray-700">
              Products
            </h6>

            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <Link to="/features-pricing" className="text-reset">
                  Features &#38; Pricing
                </Link>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Blog
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Support
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Sign in
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  Get Started
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
                <a href="#!" className="text-reset">
                  Terms
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Privacy
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  DMCA
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  DPA
                </a>
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