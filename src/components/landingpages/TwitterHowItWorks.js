import React from "react";
import {Row} from 'reactstrap'
import screen from './../../assets/img/marketing/twitter_integration.png'

const PrivatePodcastHowItWorks = () => {
  return (
    <section className="pt-8 pt-md-11" id="howItWork">
      <div className="container">
        <Row className="justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <span className="badge badge-pill badge-primary-soft mb-3">
              <span className="h6 text-uppercase">how it works</span>
            </span>
            <h1>
            Auto-tweet new podcast episodes when you publish
            </h1>
            <p className="lead text-gray-700 mb-7 mb-md-9">
              Hands-free, Twitter auto posting on your schedule. Auto schedule new tweets.
            </p>            
          </div>
        </Row>
        <Row className="align-items-center">
          <div className="col-12 col-md-6 col-lg-7">
            <div className="mb-8 mb-md-0">
              <img loading="lazy" src={screen} alt="how to add subscriber" className="screenshot img-fluid mw-md-110 float-right mr-md-6 mb-6 mb-md-0"/>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <div className="d-flex">
              <div className="badge badge-lg badge-rounded-circle badge-primary-soft mt-1">
                <span>1</span>
              </div>
              <div className="ml-5">
                <h3>Connect</h3>
                <p className="text-gray-700 mb-6">
                  Connect your Twitter account to JustCast.
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="badge badge-lg badge-rounded-circle badge-primary-soft mt-1">
                <span>2</span>
              </div>
              <div className="ml-5">
                <h3>Upload</h3>
                <p className="text-gray-700 mb-6">
                  Add new episode to JustCast.
                </p>
              </div>
            </div>            
            <div className="d-flex">
              <div className="badge badge-lg badge-rounded-circle badge-primary-soft mt-1">
                <span>3</span>
              </div>
              <div className="ml-5">
                <h3>Tweet</h3>
                <p className="text-gray-700 mb-6">
                  Automatically tweet new episodes as soon as they’re published.
                </p>
              </div>
            </div>            
          </div>
        </Row>
      </div>
    </section>
  )
}

export default PrivatePodcastHowItWorks;