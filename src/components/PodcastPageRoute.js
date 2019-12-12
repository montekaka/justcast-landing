import React from "react";
import { Route } from 'react-router-dom'

const PodcastPageRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      <div className="main-content">
        <Component {...props} />
      </div>
    )} />
  )
}

export default PodcastPageRoute