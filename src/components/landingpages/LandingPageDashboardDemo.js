import React from "react";
import macbook from '../../assets/img/devices/macbook.svg'
import dashboarddemo from '../../assets/img/dashboardemo.png'

const LandingPageDashboardDemo = () => {
  return (
    <section className="pt-9 pt-md-8">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-6 col-lg-5 order-md-2">
        
            <span className="badge badge-pill badge-primary-soft mb-3">
              <span className="h6 text-uppercase">dashboard</span>
            </span>

            <h2>
              Podcast analytics
            </h2>

            <p className="font-size-lg text-gray-700 mb-8 mb-md-0">
              See your average downloads per episode, popular podcast apps, number of subscribers, trends.
            </p>

          </div>
          <div className="col-12 col-md-6 order-md-1" data-aos="fade-up">


            <div className="w-100 w-md-130 float-right mb-6 mb-md-0">
              <div className="device device-macbook">
                <img src={dashboarddemo} className="device-screen" alt="dashboard demo"/>
                <img src={macbook} className="img-fluid" alt="..."/>
              </div>

            </div>
            
          </div>
        </div> 
      </div> 
    </section>    
  )  
}

export default LandingPageDashboardDemo;