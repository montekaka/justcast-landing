import React, {useContext} from "react";
import { Route } from 'react-router-dom'
// import TopNavbars from '../TopNavbars'
import {TopNavbars} from '../podcastpages'
import FooterPlayer from '../FooterPlayer'
import {Context as PublicPodcastContext} from '../../context/PublicPodcastContext'

const PodcastPageRoute = ({ component: Component, ...rest }) => {  

  const {state} = useContext(PublicPodcastContext);
  const {is_private, name, slug, navbarColorTheme, buttonTextColor, buttonColor, textColor, bodyColor} = state;  
  // const {cardBackgroundColor} = state.show;
  
  return (    
    <Route {...rest} render={(props) => (      
      state.name ? <>
      <TopNavbars
        is_private={is_private}
        name={name} 
        slug={slug} 
        navbarColorTheme={navbarColorTheme}
        buttonTextColor={buttonTextColor}
        buttonColor={buttonColor} 
        textColor={textColor}
      />
        <div className="main-content" style={{backgroundColor: bodyColor}}>
          <Component {...props} />
          <FooterPlayer/>
        </div>
      </> : <Component {...props} />
    )} />
  )
}

export default PodcastPageRoute