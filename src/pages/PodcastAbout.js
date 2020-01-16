import React, {useEffect, useState, useContext} from "react";
import {Context as PodcastContext} from '../context/PodcastContext'
import justcastApi from '../api/justcast'
import data from './../dumps/result.json'
import SimplePageHeader from './../components/SimplePageHeader'
import SimplePageBody from './../components/SimplePageBody'
import SocialNetwork from './../components/SocialNetwork'
import PodcastApps from './../components/PodcastApps'

const PodcastAbout = (props) => {
  const id = props.match.params.id;
  const {state, add} = useContext(PodcastContext);

  useEffect(() => {
    justcastApi.get(`/v1/shows/${id}/audioposts`)
    .then((res) => {
      const data = res.data;
      add(data)
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
    return (
      <>
        <SimplePageHeader title="About our podcast" bodyText={state.show.name}/>        
        <SocialNetwork facebook_page={state.show.facebook_page} twitter_handle={state.show.twitter_handle}/>
        <SimplePageBody bodyText={state.show.description}/>
      </>
    )
  }

  return null;
}

export default PodcastAbout;