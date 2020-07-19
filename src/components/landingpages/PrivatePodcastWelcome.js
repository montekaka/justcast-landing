import React from "react";

const PrivatePodcastWelcome = ({imageUrl, title, subtitle, videoUrl}) => {
  return (
    <section data-jarallax className="pt-10 pt-md-14 pb-12 pb-md-15 overlay overlay-primary overlay-80 jarallax" style={{"backgroundImage": `url("${imageUrl}")`}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <h1 className="display-1 font-weight-bold text-white mb-6 mt-n3">
              {title}
            </h1>
            {
              subtitle ? <p className="lead text-white mb-7 mb-md-9">{subtitle}</p> : null
            }
            {
              videoUrl ? <>
                <a href={videoUrl} className="btn btn-pill btn-white shadow lift" target="_blank">
                  Watch video example
                </a>
              </> : null
            }
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