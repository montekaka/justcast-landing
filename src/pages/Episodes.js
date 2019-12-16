import React, {useEffect, useState, useContext} from "react";
import {Context as PodcastContext} from '../context/PodcastContext'
import justcastApi from '../api/justcast'
import data from './../dumps/result.json'
import SimplePageHeader from './../components/SimplePageHeader'
import EpisodeList from './../components/EpisodeList';

const Episodes = (props) => {
  const id = props.match.params.id;
  const {state, add} = useContext(PodcastContext);

  useEffect(() => {
    justcastApi.get(`/v1/shows/${id}/audioposts`)
    .then((res) => {
      const data = res.data;
      add(data)
    })
    .catch((err) => {
      // development only
      add(data);
      console.log(err);
    })
  }, [id])


  return (
    <>
      <SimplePageHeader title={state.show.name} bodyText="All Episodes"/>
      <div className="container player-container">
        <EpisodeList
          showId={id}
          items={state.audioposts} 
          artwork_url={state.show.artwork_url}
        />
      </div>
    </>
  )
}

export default Episodes;