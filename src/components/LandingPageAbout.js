import React from "react";

const LandingPageAbout = () => {
  return (
    <section className="pt-8 pt-md-11 bg-gradient-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 col-lg-6" data-aos="fade-right">
            <h2> We have lots of experience building Bootstrap themes</h2>
            <p className="font-size-lg text-muted mb-6">We've built well over a dozen Bootstrap themes and sold tens of thousands of copies.</p>

            <div className="d-flex">
              <div className="ml-5">
                <h4 className="mb-1">Bootstrap users since the beginning</h4>
                <p className="text-muted mb-6">We've been developing with Bootstrap since it was publicly released in 2011.</p>
              </div>
            </div>

            <div className="d-flex">
              <div className="ml-5">
                <h4 className="mb-1">Bootstrap users since the beginning</h4>
                <p className="text-muted mb-6">We've been developing with Bootstrap since it was publicly released in 2011.</p>
              </div>
            </div>            

          </div>
          <div className="col-12 col-md-5 col-lg-6">            
            <div className="w-md-150 w-lg-130 position-relative" data-aos="fade-left">
              <div className="img-skewed img-skewed-left">
                <img src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" className="screenshot img-fluid img-skewed-item" alt="..."/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPageAbout;