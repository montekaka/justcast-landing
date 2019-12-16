import React, {useEffect, useState, useContext} from "react";
import {Context as PodcastContext} from '../context/PodcastContext'
import justcastApi from '../api/justcast'
import data from './../dumps/result.json'
import SimplePageHeader from './../components/SimplePageHeader'
import SimplePageBody from './../components/SimplePageBody'

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
      // development only
      add(data);
      console.log(err);
    })
  }, [id])

  return (
    <>
      <SimplePageHeader title="About our podcast" bodyText={state.show.name}/>
      <SimplePageBody bodyText="Hello world...."/>
    </>
  )

}

export default PodcastAbout;