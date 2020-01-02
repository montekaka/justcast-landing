import React from "react";

const LandingPageHero = () => {

  return (   
    <section class="pt-4 pt-md-11">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-5 col-lg-6 order-md-2">
            <img src="assets/img/illustrations/illustration-2.png" class="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="..." data-aos="fade-up" data-aos-delay="100" />
          </div>
          <div class="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up">
            <h1 class="display-3 text-center text-md-left">
              Welcome to <span class="text-primary">Landkit</span>. <br/>
              Develop anything.
            </h1>
            <p class="lead text-center text-md-left text-muted mb-6 mb-lg-8">
              Build a beautiful, modern website with flexible Bootstrap components built from scratch.
            </p>
            <div class="text-center text-md-left">
              <a href="overview.html" class="btn btn-primary shadow lift mr-1">
                View all pages <i class="fe fe-arrow-right d-none d-md-inline ml-3"></i>
              </a>
              <a href="docs/index.html" class="btn btn-primary-soft lift">
                Documentation
              </a>
            </div>
          </div>
        </div> 
      </div>
    </section>       
  )
} 

export default LandingPageHero;