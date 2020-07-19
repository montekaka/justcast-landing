import React from "react";
import {localStorageManagement} from '../libs'
import PrivatePodcastWelcome from './../components/landingpages/PrivatePodcastWelcome'
import PrivatePodcastHowItWorks from './../components/landingpages/PrivatePodcastHowItWorks'
import TryPodcastingForFree from './../components/TryPodcastingForFree'

const PrivatePodcastPage = () => {
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