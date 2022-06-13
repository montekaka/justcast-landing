import React from "react";

const SimplePageHeader = (props) => {
  const {title, text, imgURL, hideOverlay} = props;
  if(imgURL) {    
    return (
      <section data-jarallax
        className={`py-8 py-md-11 bg-cover jarallax ${!hideOverlay && "overlay overlay-black overlay-60"}`}
        data-speed=".8"
        style={{
          backgroundImage: `url(${imgURL})`
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h1 className="display-2 text-gray-100">
              {title}
              </h1>
              <div className="lead text-gray-300 mb-7 mb-md-9">{text}</div>
              {props.children}
            </div>
          </div>
        </div>        
      </section>        
    )    
  } else {
    return (
      <section className="py-8 py-md-11 border-bottom bg-gray-800">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h1 className="display-2 text-gray-100">
                {title}
              </h1>
              <div className="lead text-gray-300 mb-7 mb-md-9">{text}</div>
              {props.children}
            </div>
          </div>
        </div>
      </section>    
    )
  }

}

export default SimplePageHeader;