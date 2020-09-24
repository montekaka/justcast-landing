import React, {useContext} from "react";
import { Route } from 'react-router-dom'
import TopNavbars from './TopNavbars'
import FooterPlayer from './FooterPlayer'
import {Context as ThemeContext} from '../context/ThemeContext'

const PodcastPageRoute = ({ component: Component, ...rest }) => {

  const {state} = useContext(ThemeContext);
  
  return (
    <Route {...rest} render={(props) => (
      
      state.cardBackgroundColor ? <><TopNavbars/>
        <div className="main-content">
          <Component {...props} />
          <FooterPlayer/>
        </div>
      </> : <Component {...props} />
    )} />
  )
}

export default PodcastPageRoute