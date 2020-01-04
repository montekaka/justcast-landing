import React from "react";
import PodcastSvg from "../../assets/img/illustrations/podcast.svg"

const LandingPageHero = () => {

  return (   
    <section className="pt-4 pt-md-11">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 col-lg-6 order-md-2">
            <img src={PodcastSvg} className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="..." data-aos="fade-up" data-aos-delay="100" />          
          </div>
          <div className="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up">
            <h1 className="display-3 text-center text-md-left">
              Turns your Dropbox into Podcast Hosting
            </h1>
            <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
              Record your audio and upload it to Dropbox.  We'll help you distribute your podcast to Apple Podcasts, Spotify, and Google Podcasts.
            </p>
            <div className="text-center text-md-left">
              <a href={`${process.env.REACT_APP_DASHBOARD_BASE_PATH}/signup`} className="btn btn-primary shadow lift mr-1">
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