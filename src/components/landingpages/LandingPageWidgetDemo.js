import React from "react";


const WidgetDemo = () => {

  return (
    <div className="col-12 d-flex">
      <div className="card light-lg">
        <div dangerouslySetInnerHTML={{__html: `<iframe src='https://justcast.com/widget/something-good-for-ya/audioposts/1000866' width='100%' height='180' frameborder='0' scrolling='no' seamless='true' style='width:100%; height:180px;'></iframe>`}}></div>
      </div>      
    </div> 
  )  
}

const LandingPageWidgetDemos = () => {
  return (
    <section className="pt-10 pt-md-12 pricing-testimonials">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h2>How does this sound?</h2>
            <p className="font-size-lg">Embed the podcast player on your website.</p>
          </div>
        </div>
        <div className="row">
          <WidgetDemo/>
        </div>
      </div>
    </section>
  )
}

export default LandingPageWidgetDemos;