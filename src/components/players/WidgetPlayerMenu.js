import React from "react";

const WidgetPlayerMenu = ({handleSectionChange}) => {
  if(handleSectionChange) {
    return (
      <>
        <nav>
          <div className="nav-item" onClick={
            () => {
              handleSectionChange('subscribe')
            }
          }>Subscribe</div>
          <div className="nav-item" onClick={
            () => {
              handleSectionChange('share')
            }
          }>SHARE</div>
          <div className="nav-item" onClick={
            () => {
              handleSectionChange('more_info')
            }
          }>MORE INFO</div>
        </nav>
        <div className="power-by"></div>
      </>    
    )
  }

  return null;
}

export default WidgetPlayerMenu;