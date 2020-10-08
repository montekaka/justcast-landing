import React from "react";
import illustration from '../../assets/img/illustrations/illustration-3.png'

const LandingTwitterIntegration = () => {
  return (
    <>
      <section className="py-8 py-md-12">
        <div className="container">
          <div className="row align-items-center">    
            <div className="col-12 col-md-6">
              <img src={illustration} alt="twitter integration" className="img-fluid mw-md-100"/>
            </div>          
            <div className="col-12 col-md-6">
              <h2>
                <span className="text-primary">Twitter Integration</span> <br/>
                Auto-tweet new podcast episodes when you publish
              </h2>
              <p className="font-size-lg text-gray-700 mb-6">
                You can also connect your Twitter account to JustCast. This will automatically tweet new episodes as soon as they’re published.
              </p>
              <p className="font-size-lg text-gray-700 mb-6">
                JustCast also has an embedded player that integrates directly with Twitter. Now folks can listen to your show within the <a href="https://twitter.com/thejustcast/status/1313956304038187008?s=20" target="_blank">tweet</a>.
              </p> 
              <a id="justcast_landing_page_learn_more_twitter_integration" 
              href="/social_networks_integration" className="btn btn-success mb-6 mb-md-0 lift">
                Learn more <i className="fe fe-arrow-right ml-3"></i>
              </a>                         
            </div>              
          </div>
        </div>
      </section>
    </>  
  )
}

export default LandingTwitterIntegration;