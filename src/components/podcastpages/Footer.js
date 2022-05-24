import React from "react";

const Footer = ({textColor, textLabel}) => {
  // if(brand_link_back !== true) {
  //   return (
  //     <div style={{
  //         display: 'flex', padding: "10px", justifyContent: 'center'}}>
  //       <a href={process.env.REACT_APP_BASE_PATH} style={{color: textColor}}>Power by JustCast</a>
  //     </div>        
  //   )
  // }

  return (
    <div style={{
        display: 'flex', padding: "10px", justifyContent: 'center'}}>
        <div style={{color: textColor}}>{textLabel}</div>
    </div> 
  );
}

export default Footer;