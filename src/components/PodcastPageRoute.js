import React from "react";
import { Route } from 'react-router-dom'
import TopNavbars from './TopNavbars'

const PodcastPageRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      <>
        <TopNavbars/>
        <div className="main-content">
          <Component {...props} />
        </div>
      </>
    )} />
  )
}

export default PodcastPageRoute