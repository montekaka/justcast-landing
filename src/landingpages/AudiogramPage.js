import React, {useEffect, useContext} from "react";
import queryString from 'query-string'
import {Mixpanel} from '../api/mixpanel'
import {Context as LocalStorageContext} from '../context/LocalStorageContext'
import PrivatePodcastWelcome from '../components/landingpages/PrivatePodcastWelcome'
import AudiogramAbout from '../components/landingpages/AudiogramAbout'
import TryPodcastingForFree from '../components/TryPodcastingForFree'

const AudiogramPage = (props) => {
  const {initLocalStorageState} = useContext(LocalStorageContext);

  Mixpanel.track('Audiogram landing page loaded', {"First Time": "TRUE"}, () => {
    setTimeout(Mixpanel.register({"First Time": "FALSE"}), 500);
  });

  useEffect(() => {
    const values = queryString.parse(props.location.search);
    if(values && values["via"]) {
      const via = values['via'];
      initLocalStorageState({via})
    } else if (values && values["utm_term"]) {
      const utm_term = values['utm_term'];
      initLocalStorageState({utm_term})      
    }
    else {
      initLocalStorageState({})
    }
  }, []);

  return (
    <>
      <PrivatePodcastWelcome 
        title={"Video is the best way to promote your podcast"} 
        subtitle={"We've created tools for you to make podcast audiogram to share on social media, blog, and even messaging services like iMessage and Slack."}
        videoUrl={"https://vimeo.com/415396793"}
        imageUrl={"https://images.unsplash.com/photo-1590320779846-49d127b212c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"}/>        
      <AudiogramAbout/>
      <TryPodcastingForFree/>
    </>
  )
}

export default AudiogramPage