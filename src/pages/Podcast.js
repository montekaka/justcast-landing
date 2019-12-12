import React, {useEffect, useState, useContext} from "react";
import {Context as PodcastContext} from '../context/PodcastContext'
import justcastApi from '../api/justcast'

const Podcast = (props) => {

  const {state, add} = useContext(PodcastContext)
  const id = props.match.params.id;

  useEffect(() => {
    justcastApi.get(`/v1/shows/${id}/audioposts`)
    .then((res) => {
      const data = res.data;
      add(data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])


  return (

    <div>
      <h1>{state.show.name}</h1>
      <p>{state.audioposts.length}</p>
    </div>    
  )
}

export default Podcast