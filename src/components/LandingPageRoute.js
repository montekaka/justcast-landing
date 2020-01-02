import React from "react";
import { Route } from 'react-router-dom'
import LandingPageNavbars from './LandingPageNavbars'

const navItems = [
  {label:'Home', url: "/"},
  {label:'About us', url: "/about_us"}
]
const LandingPageRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      <>
        <LandingPageNavbars navItems={navItems}/>
        <div className="main-content">
          <Component {...props} />
        </div>
      </>
    )} />
  )
}

export default LandingPageRoute