import React from "react";

const LandingPageAbout = () => {
  return (
    <section className="pt-8 pt-md-11 bg-gradient-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 col-lg-6" data-aos="fade-right">
            <h2>The easiest way to start podcasting</h2>          
            <div className="d-flex">
              <div className="ml-5">
                <h4 className="mb-1">1. Create a Dropbox folder for your show</h4>
                <p className="text-muted mb-6">Create a new show is as easy as create a new folder inside your dropbox.</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="ml-5">
                <h4 className="mb-1">2. Save your audio files in that folder</h4>
                <p className="text-muted mb-6">To add a new epsiode, just drag the mp3 file to your Dropbox folder.</p>
              </div>
            </div>            
          </div>

          <div className="col-12 col-md-4 col-lg-5">            
            <div className="w-md-150 w-lg-130 position-relative" data-aos="fade-left">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/76843050?title=0&byline=0&portrait=0&api=1&player_id=pPlayer" allowfullscreen></iframe>
              </div>
            </div>
          </div>                    
        </div>
      </div>
    </section>
  )
}

export default LandingPageAbout;