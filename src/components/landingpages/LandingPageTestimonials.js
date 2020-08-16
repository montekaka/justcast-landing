import React from "react";
import logo1 from '../../assets/img/brands/thesweetsetup.png'
import msftsvg from '../../assets/img/brands/logotype/microsoft.svg'

const Quote = () => {
  return (
    <div className="card shadow-light-lg lift">
      <a className="card-body my-auto" href="https://about.ads.microsoft.com">
        <blockquote className="blockquote text-center mb-0">
          <div className="row justify-content-center mb-5 mb-md-7">
            <div className="col-6 col-sm-4 col-md-7 col-lg-5">
              <div className="img-fluid svg-shim" style={{height: 48}}>
                <img src={msftsvg} alt="logo"/>                  
              </div>
            </div>
          </div>
          <p className="mb-5 mb-md-7">
            “We have found JustCast to be the simple solution that does big things for our brand podcast Insights with Microsoft Advertising. We simply drop our finished episodes into the Dropbox folder and use the excellent user friendly interface to schedule and distribute in real time. We started using JustCast back in 2018 when we were building Alexa/Google/Cortana voice skills and have found it to be excellent solution for anything original audio related that needs to be distributed everywhere. A must tool for all creative practices looking for simple yet effective podcast solutions.”
          </p>
          <footer className="blockquote-footer">
            <a className="card-meta justify-content-center" href="https://twitter.com/djgeoffe">
              <div className="avatar avatar-lg mr-2">
                <img src="https://pbs.twimg.com/profile_images/1281455155460714498/iY9l_Q6i_400x400.jpg" alt="profile" className="avatar-img rounded-circle"/>
              </div>
              <span className="h6 text-uppercase">Geoffrey Colon, Head of Brand Studio, Microsoft Advertising</span>                
            </a>
          </footer>
        </blockquote>
      </a>        
    </div>    
  )
}

const Testimonial = () => {
  return (
    <div className="col-12 d-flex">    
      <Quote/>
    </div> 
  )
}

// const Testimonial = () => {

//   return (
//     <div className="col-12 d-flex">    
//       <div className="card shadow-light-lg">
//         <a className="card-body my-auto" href="https://thesweetsetup.com/quick-tip-create-a-personal-podcast-feed-from-dropbox-with-justcast/">
//           <h3 className="mt-auto">
//             JustCast is one of those services that once you realize it exists, it’s life changing from a technology perspective.
//           </h3>
//         </a>
//         <a className="card-meta" href="https://thesweetsetup.com/quick-tip-create-a-personal-podcast-feed-from-dropbox-with-justcast/">
//           <hr className="card-meta-divider"/>
//           <div className="avatar avatar-sm mr-2">
//             <img src={logo1} alt="the-sweet-setup-logo" className="avatar-img rounded-circle"/>
//           </div>        
//           <h6 className="text-uppercase text-muted mr-2 mb-0">
//             The Sweet Setup
//           </h6>
//         </a>
//       </div>
//     </div> 
//   )  
// }

const LandingPageTestimonials = () => {
  return (
    <section className="pt-10 pt-md-12 pricing-testimonials">
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