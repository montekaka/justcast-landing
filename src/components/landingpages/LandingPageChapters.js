import React from "react";
import macbook from '../../assets/img/devices/macbook.svg'
import iphonex from '../../assets/img/devices/iphonex.svg'
import iphonewaveform from '../../assets/img/chapters-player-demo.png'
import macbookwaveform from '../../assets/img/chapters-editor.png'

const LandingPageChapters = () => {
  return (
    <section className="py-8 py-md-12 bg-gray-300">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-12 col-lg-6" data-aos="fade-right">
            <h2 className="font-weight-bold">Create chapter markers inside of JustCast</h2>
            <p className="font-size-lg text-gray-700 mb-5">
              Chapter markers make it easy for your listeners to navigate to their favorite segments, see what's coming up, or skip spoilers they don't want to hear.
            </p> 
            <a id="justcast_landing_page_learn_more_waveform"
              target="_blank"
              href="https://justcast.zendesk.com/hc/en-us/articles/4407906495892-Chapter-Markers" className="btn btn-primary-desat mb-6 mb-md-0 lift">
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

export default LandingPageChapters;