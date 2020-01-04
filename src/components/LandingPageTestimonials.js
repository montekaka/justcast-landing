import React from "react";
import logo1 from './../assets/img/brands/thesweetsetup.png'

const Testimonial = () => {
  const divstyle = {
    backgroundImage: `url(${logo1})`,
  }

  return (
    <div className="col-12 d-flex">    
      <div className="card shadow-light-lg">
        <a className="card-body my-auto" href="https://thesweetsetup.com/quick-tip-create-a-personal-podcast-feed-from-dropbox-with-justcast/">
          <h3 className="mt-auto">
            JustCast is one of those services that once you realize it exists, it’s life changing from a technology perspective.
          </h3>
        </a>
        <a className="card-meta" href="https://thesweetsetup.com/quick-tip-create-a-personal-podcast-feed-from-dropbox-with-justcast/">
          <hr className="card-meta-divider"/>
          <div className="avatar avatar-sm mr-2">
            <img src={logo1} alt="the-sweet-setup-logo" class="avatar-img rounded-circle"/>
          </div>        
          <h6 className="text-uppercase text-muted mr-2 mb-0">
            The Sweet Setup
          </h6>
        </a>
      </div>
    </div> 
  
  )  
}

const LandingPageTestimonials = () => {
  return (
    <section className="pt-10 pt-md-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h2>Our customers are our biggest fans.</h2>
          </div>
        </div>
        <div className="row">
          <Testimonial/>
        </div>  
      </div>
    </section>
  )
}

export default LandingPageTestimonials;