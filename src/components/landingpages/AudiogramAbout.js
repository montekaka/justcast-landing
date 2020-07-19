import React from "react";
import {Row} from 'reactstrap'
import screen from './../../assets/img/marketing/privatepodcast.png'

const AudiogramAbout = () => {
  return (
    <section className="pt-8 pt-md-11" id="howItWork">
      <div className="container">
        <Row className="justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">            
            <h1>
              Why Audiogram?
            </h1>
            <p className="lead text-gray-700 mb-7 mb-md-9">
              Social video generates <span className="text-primary">1200% more</span> shares than text and image content combined.
            </p>
          </div>
        </Row>
        <Row className="align-items-center pt-8 pt-md-11">
          <div className="col-12 col-md-6 col-lg-7">
          <div className="embed-responsive embed-responsive-16by9">
              <iframe loading="lazy" className="embed-responsive-item" src="https://www.loom.com/embed/616b550d3f8c43ab806fffe6775017d5" allowFullScreen></iframe>              
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <h2>How it works</h2>
            <div className="d-flex">
              <div className="badge badge-lg badge-rounded-circle badge-primary-soft mt-1">
                <span>1</span>
              </div>
              <div className="ml-5">
                <h3>Choose an audio</h3>
                <p className="text-gray-700 mb-6">
                  Choose an audio from your uploaded episodes.
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="badge badge-lg badge-rounded-circle badge-primary-soft mt-1">
                <span>2</span>
              </div>              
              <div className="ml-5">
                <h3>Choose a design</h3>
                <p className="text-gray-700 mb-6">
                  Create an optimized video in our editor.
                </p>
              </div>
            </div>            
            <div className="d-flex">
              <div className="badge badge-lg badge-rounded-circle badge-primary-soft mt-1">
                <span>3</span>
              </div>
              <div className="ml-5">
                <h3>Download and share</h3>
                <p className="text-gray-700 mb-6">
                  Download your engaging video and share it on social media.
                </p>
              </div>
            </div>            
          </div>
        </Row>
      </div>
    </section>
  )
}

export default AudiogramAbout;