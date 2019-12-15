import React, {useEffect, useState, useContext} from "react";
import {Context as PodcastContext} from '../context/PodcastContext'
import {Context as PlayerContext} from '../context/PlayerContext'

const Episode = (props) => {
  const id = props.match.params.id;
  const [episode, setEpisode] = useState({});
  
  const {state, add} = useContext(PodcastContext);
  const playerContext = useContext(PlayerContext);

  useEffect(() => {
    const _ = state.audioposts.filter(audiopost => audiopost.id === id);
    if(_.length > 0) {
      const audiopost = _[0];
      setEpisode(audiopost)
    }
  }, [id])

  return (
    <></>
  )
}

export default Episode;