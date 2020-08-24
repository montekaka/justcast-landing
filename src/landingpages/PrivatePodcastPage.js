import React from "react";
import {Mixpanel} from '../api/mixpanel'
import PrivatePodcastWelcome from './../components/landingpages/PrivatePodcastWelcome'
import PrivatePodcastHowItWorks from './../components/landingpages/PrivatePodcastHowItWorks'
import TryPodcastingForFree from './../components/TryPodcastingForFree'

const PrivatePodcastPage = () => {

  Mixpanel.track('Private Podcast landing page loaded', {"First Time": "TRUE"}, () => {
    setTimeout(Mixpanel.register({"First Time": "FALSE"}), 500);
  });

  return (
    <>
      <PrivatePodcastWelcome 
        title={"Create private podcasts"} 
        imageUrl={"https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"}        
      />
      <PrivatePodcastHowItWorks/>
      <TryPodcastingForFree/>
    </>
  )
}

export default PrivatePodcastPage