import React from "react";

const PrivatePodcastHowItWorks = () => {
  return (
    <section className="section bg-black pt-12 pt-md-15 pb-8 pb-md-11">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            
            <h1 className="font-weight-bold text-white">
              How does a private podcast work?
            </h1>

            <p className="font-size-lg text-muted mb-7 mb-md-9">
              A private podcast isn't publicly accessible or discoverable. Instead, each subscriber gets an individual invitation to the private podcast in their email inbox. This allows employees to:
            </p>

          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4">
            <div className="row">
              <div className="col-auto col-md-12">
                <div className="row no-gutters align-items-center mb-md-5">
                  <div className="col-auto">
                    <span className="btn btn-sm btn-rounded-circle btn-gray-400-10 disabled opacity-1">
                      <span>1</span>
                    </span>
                  </div>
                  <div className="col">
                    <hr className="d-none d-md-block border-gray-900-50 mr-n7"/>
                  </div>
                </div>
              </div>
              <div className="col col-md-12 ml-n5 ml-md-0">
                <h4 className="text-white">
                  Subscribe to the podcast in their podcast player (Apple Podcasts, Overcast, Pocket Casts)
                </h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="row">
              <div className="col-auto col-md-12">
                <div className="row no-gutters align-items-center mb-md-5">
                  <div className="col-auto">
                    <span className="btn btn-sm btn-rounded-circle btn-gray-400-10 disabled opacity-1">
                      <span>2</span>
                    </span>
                  </div>
                  <div className="col">
                    <hr className="d-none d-md-block border-gray-900-50 mr-n7"/>
                  </div>
                </div>
              </div>
              <div className="col col-md-12 ml-n5 ml-md-0">
                <h4 className="text-white">
                Receive new episodes on their phone
                </h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="row">
              <div className="col-auto col-md-12">
                <div className="row no-gutters align-items-center mb-md-5">
                  <div className="col-auto">
                    <span className="btn btn-sm btn-rounded-circle btn-gray-400-10 disabled opacity-1">
                      <span>3</span>
                    </span>
                  </div>
                  <div className="col">
                    <hr className="d-none d-md-block border-gray-900-50 mr-n7"/>
                  </div>
                </div>
              </div>
              <div className="col col-md-12 ml-n5 ml-md-0">
                <h4 className="text-white">
                  Download episodes on their phone for offline listening.
                </h4>
              </div>
            </div>
          </div>
        </div>

      </div> 
    </section>
  )
}

export default PrivatePodcastHowItWorks;