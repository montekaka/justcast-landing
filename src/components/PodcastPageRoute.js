import React, {useContext} from "react";
import { Route } from 'react-router-dom'
import TopNavbars from './TopNavbars'
import FooterPlayer from './FooterPlayer'

const PodcastPageRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      <>
        <TopNavbars/>
        <div className="main-content">
          <Component {...props} />
          <FooterPlayer/>
        </div>
      </>
    )} />
  )
}

export default PodcastPageRoute