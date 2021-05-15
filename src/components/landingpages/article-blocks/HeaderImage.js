import React from "react";

const HeaderImage = ({backgroundImage}) => {
  if(backgroundImage) {
    return (
      <section className="py-12 py-md-15 bg-cover jarallax" 
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}></section>
    )
  }

  return null;
}

export default HeaderImage;