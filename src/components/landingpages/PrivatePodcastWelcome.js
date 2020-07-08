import React from "react";
import iphoneXsvg from './../../assets/img/devices/iphonex.svg'
import screen1 from './../../assets/img/marketing/private_podcast_screen_1.png'
import screen2 from './../../assets/img/marketing/private_podcast_screen_2.png'

const PrivatePodcastWelcome = () => {
  return (
    <section className="pt-6 pt-md-8">
      <div className="container">
        <div className="row align-items-center justify-content-center justify-content-md-between">
          <div className="col-10 col-sm-8 col-md-6 order-md-2">
                        
            <div className="device-combo device-combo-iphonex-iphonex mb-6 mb-md-0">
              
              
              <div className="device device-iphonex" data-aos="fade-left">
                <img src={screen1} className="device-screen" alt="..."/>
                <img src={iphoneXsvg} className="img-fluid" alt="..."/>
              </div>

              
              <div className="device device-iphonex" data-aos="fade-left" data-aos-delay="150">
                <img src={screen2} className="device-screen" alt="..."/>
                <img src={iphoneXsvg} className="img-fluid" alt="..."/>
              </div>
              
            </div>

          </div>
          <div className="col-12 col-md-6 col-lg-5" data-aos="fade-right">
            
            
            <h1 className="font-weight-bold">
              Publish a podcast for your <span className="text-primary">remote employees.</span> <br/>
              Anywhere in the world.
            </h1>
            
            
            <p className="font-size-lg text-muted mb-6">
              With more people working from home these days, keeping your team up-to-date is more important than ever. Many CEOs and managers are turning to private podcasts to communicate with their employees.
            </p>

            
            <form className="mb-6 mb-md-8 mb-md-0 order-md-1">
              <div className="form-row">
                <div className="col">
                  
                  
                  <input type="url" className="form-control bg-light border-0"/>

                </div>
                <div className="col-auto">
                  
                  
                  <button type="submit" className="btn btn-primary">
                    Text link
                  </button>

                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivatePodcastWelcome;