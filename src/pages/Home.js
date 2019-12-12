import React, {useEffect, useState, useContext} from "react";
import {Context as PodcastContext} from '../context/PodcastContext'



const Home = (props) => {

  const {add} = useContext(PodcastContext)
  const id = props.match.params.id;

  useEffect(() => {

  }, [])


  return (
    <div>Hello world</div>
  )
}

export default Home