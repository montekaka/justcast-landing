import React from "react";
const menuItems = [
  {key: 'subscribe', label: 'Subscribe'},
  {key: 'share', label: 'share'},
  {key: 'more_info', label: 'More info'}
]

const WidgetPlayerMenu = ({handleSectionChange}) => {
  if(handleSectionChange) {
    return (
      <>
        <nav>
          {
            menuItems.map((menuItem) => 
              <div key={menuItem.key} className="nav-item" onClick={
                () => {
                  handleSectionChange(menuItem.key)
                }
              }>{menuItem.label}</div>
            )
          }
        </nav>
        <div className="power-by"></div>
      </>    
    )
  }

  return null;
}

export default WidgetPlayerMenu;