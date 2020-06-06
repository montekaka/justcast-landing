import React from "react";
import macbook from '../../assets/img/devices/macbook.svg'
import iphonex from '../../assets/img/devices/iphonex.svg'
import iphonewaveform from '../../assets/img/iphonewaveform.gif'
import macbookwaveform from '../../assets/img/macbookwaveform.gif'

const LandingPageDashboardDemo = () => {
  return (
    <section className="pt-5 pt-md-7">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h2 className="font-weight-bold">Promote Your Podcast on Social Media in Style</h2>
            <p className="font-size-lg text-muted mb-5">
              Create engaging animated videos to promote your podcast.  Share to Instagram, Facebook, Twitter, YouTube, Linkedin and anywhere video lives.              
            </p>
            <p className="font-size-lg text-muted mb-5">
              Social video generates 1200% more shares than text and image content combined. - <a href="https://learn.g2.com/video-marketing-statistics">G2 Crowd</a>
            </p>
            <a id="justcast_landing_page_learn_more_waveform" 
              href="https://justcast.zendesk.com/hc/en-us/articles/360042714192" className="btn btn-primary-desat mb-6 mb-md-0 lift">
              Learn more <i className="fe fe-arrow-right ml-3"></i>
            </a>
          </div>
          <div className="col-12 col-md-6">
            <div className="w-md-130">
              <div className="device-combo device-combo-iphonex-macbook">
                <div className="device device-iphonex">
                  <img src={iphonewaveform} className="device-screen" alt="iphone audiogram demo"/>
                  <img src={iphonex} className="img-fluid" alt="iphone"/>
                </div>
                <div className="device device-macbook">
                  <img src={macbookwaveform} className="device-screen" alt="macbook audiogram demo"/>
                  <img src={macbook} className="img-fluid" alt="macbook"/>
                </div>                
              </div>
            </div>
          </div>          
        </div> 
      </div>      
    </section>    
  )  
}

export default LandingPageDashboardDemo;