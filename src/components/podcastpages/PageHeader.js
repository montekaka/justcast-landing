import React from "react";

const sectionCSS = (imgURL) => {
  const backgroundImg = imgURL ? imgURL : "https://source.unsplash.com/c1ZN57GfDB0/1600x900";
  return {
    backgroundImage: `url(${backgroundImg})`
  }
}

const PageHeader = ({
  headerTitle, 
  text,
  imgURL
}) => {
  
  return (
    <section data-jarallax
      className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover jarallax"
      data-speed=".8"
      style={sectionCSS(imgURL)}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h1 className="text-center text-md-left display-2 text-white">
              {headerTitle}
            </h1>
            <p className="lead text-center text-md-left mb-6 mb-lg-8 text-white">
              {text}
            </p>         
          </div>
        </div>        
      </div>
    </section>    
  )
}

export default PageHeader;