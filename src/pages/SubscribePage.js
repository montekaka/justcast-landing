import React, {useEffect, useState, useContext} from "react";
import {Context as PodcastContext} from '../context/PodcastContext'
import justcastApi from '../api/justcast'
import data from './../dumps/result.json'
import SimplePageHeader from './../components/SimplePageHeader'
import PodcastApps from './../components/PodcastApps'
import PrivateShow from './../components/PrivateShow';

const SubscribePage = (props) => {
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
    if(state.show.is_private) {
      return <PrivateShow/>;
    }       
    return (
      <>
        <SimplePageHeader title={`${state.show.name}`} bodyText="Listen in your favorite apps"/>
        <PodcastApps show={state.show}/>
      </>
    )
  }

  return null;
}

export default SubscribePage;