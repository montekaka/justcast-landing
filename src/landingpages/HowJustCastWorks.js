import React from "react";
import {Mixpanel} from '../api/mixpanel'
import TryPodcastingForFree from './../components/TryPodcastingForFree'

const HowJustCastWorks = () => {
  Mixpanel.track('How justcast works page loaded');

  return (
    <>
      <section className="pt-8 pt-md-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h1 className="display-4 text-center">How JustCast works</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <p>Here are a simple instructions on how to host your podcast with JustCast</p>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/590140243" allowFullScreen></iframe>	
              </div>              
            </div>
          </div>
        </div>
      </section>      
      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <p>Here are a simple instructions on how to host your podcast from Dropbox with JustCast</p>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/414646004" allowFullScreen></iframe>	
              </div>              
            </div>
          </div>
        </div>
      </section>
      <TryPodcastingForFree/>
    </>
  )
}

export default HowJustCastWorks