import React from "react";

const PrivatePodcastWelcome = () => {
  return (
    <section data-jarallax className="pt-10 pt-md-14 pb-12 pb-md-15 overlay overlay-primary overlay-80 jarallax" style={{"backgroundImage": `url("https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9")`}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <h1 className="display-1 font-weight-bold text-white mb-6 mt-n3">
              Create private podcasts
            </h1>
          </div>
        </div>
      </div>
      <div className="position-absolute right-0 bottom-0 left-0">
        <div className="position-relative shape shape-bottom shape-fluid-x svg-shim text-white">
          <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M720 125L2160 0h720v250H0V125h720z" fill="currentColor"/></svg>
        </div>
      </div>
    </section>
  )
}

export default PrivatePodcastWelcome;