import React from "react";

const Footer = ({textColor, brand_link_back}) => {
  if(brand_link_back !== true) {
    return (
      <div style={{
          display: 'flex', padding: "10px", justifyContent: 'center'}}>
        <a href={process.env.REACT_APP_BASE_PATH} style={{color: textColor}}>Power by JustCast</a>
      </div>        
    )
  }

  return null;
}

export default Footer;