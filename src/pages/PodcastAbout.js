import React, {useEffect, useState, useContext} from "react";
import ReactGA from 'react-ga';
import {Context as PodcastContext} from '../context/PodcastContext'
import justcastApi from '../api/justcast'
import data from './../dumps/result.json'
import SimplePageHeader from './../components/SimplePageHeader'
import SimplePageBody from './../components/SimplePageBody'
import SocialNetwork from './../components/SocialNetwork'
import PrivateShow from './../components/PrivateShow';

const PodcastAbout = (props) => {
  const id = props.match.params.id;
  const {state, add} = useContext(PodcastContext);

  useEffect(() => {
    justcastApi.get(`/v1/shows/${id}/audioposts`)
    .then((res) => {
      const data = res.data;
      add(data)

      ReactGA.initialize('UA-52969503-3');
      ReactGA.pageview(`/shows/${data.show.slug}/about_us`)            
    })
    .catch((err) => {
      if(process.env.ENV === 'DEVELOPMENT') {
      // development only
        add(data);
      }
      console.log(err);
    })
  }, [id])

  if(state.show.id) {
    if(state.show.is_private) {
      return <PrivateShow/>;
    }        
    return (
      <>
        <SimplePageHeader title="About our podcast" bodyText={state.show.name}/>        
        <SocialNetwork 
          instagram_profile={state.show.instagram_profile}
          facebook_page={state.show.facebook_page} 
          twitter_handle={state.show.twitter_handle}
          slack={state.show.slack}
        />
        <SimplePageBody bodyText={state.show.description}/>
      </>
    )
  }

  return null;
}

export default PodcastAbout;