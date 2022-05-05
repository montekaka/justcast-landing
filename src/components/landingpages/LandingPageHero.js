import React, {useContext} from "react";
import PodcastSvg from "../../assets/img/illustrations/podcast.svg"
import {Context as LocalStorageContext} from '../../context/LocalStorageContext'

const LandingPageHero = () => {
  const {state, getURL} = useContext(LocalStorageContext);

  const signUpURL = () => {
    const url = `${process.env.REACT_APP_DASHBOARD_BASE_PATH}/signup`    
    return getURL(state, url);
  }

  return (   
    <section className="pt-4 pt-md-11">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 col-lg-6 order-md-2">
            <img src={PodcastSvg} className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="..." data-aos="fade-up" data-aos-delay="100" />          
          </div>
          <div className="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up">
            <h1 className="display-3 text-center text-md-left">
              The easiest way to start podcasting
            </h1>
            <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
              {/* Record your audio and upload it to Dropbox.  We'll help you distribute your podcast to Apple Podcasts, Spotify, and Google Podcasts. */}
              JustCast is podcast hosting that saves your time.
            </p>
            <div className="text-center text-md-left">
              <a id="justcast_landing_page_signup" 
                href={signUpURL()} className="btn btn-primary shadow lift mr-1">
                Sign up <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
              </a>
            </div>
          </div>
        </div> 
      </div>
    </section>       
  )
} 

export default LandingPageHero;