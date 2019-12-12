import React, {useEffect, useState, useContext} from "react";
import {Context as PodcastContext} from '../context/PodcastContext'
import justcastApi from '../api/justcast'

const Podcast = (props) => {

  const {add} = useContext(PodcastContext)
  const id = props.match.params.id;

  useEffect(() => {
    justcastApi.get('/v1/shows/${id}/audioposts')
    .then((res) => {
      const data = res.data;
      const show = data.show;
      const audioposts = data.audioposts;
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])


  return (
    <div>Hello world</div>
  )
}

export default Podcast