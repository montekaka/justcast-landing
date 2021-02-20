import React from "react";

const LandingPageAbout = () => {
  return (
    <section className="pt-8 pt-md-11 bg-gradient-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-12 col-lg-6" data-aos="fade-right">
            <h2>Integrate with Dropbox</h2>          
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

          <div className="col-12 col-md-12 col-lg-6">            
            <div data-aos="fade-left">
              <div className="embed-responsive embed-responsive-16by9">	              
                <iframe loading="lazy" className="embed-responsive-item" src="https://www.loom.com/embed/a205de6c584d433a8423b07770ebc566" allowFullScreen></iframe>	
              </div>
            </div>
          </div>                    
        </div>
      </div>
    </section>
  )
}

export default LandingPageAbout;