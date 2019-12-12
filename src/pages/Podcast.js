import React, {useEffect, useState, useContext} from "react";
import {Context as PodcastContext} from '../context/PodcastContext'
import justcastApi from '../api/justcast'
import data from './../dumps/result.json'
import JumbotronHero from './../components/JumbotronHero'

const Podcast = (props) => {

  const {state, add} = useContext(PodcastContext)
  const [latestEpisode, setLatestEpisode] = useState({})
  const id = props.match.params.id;

  useEffect(() => {
    justcastApi.get(`/v1/shows/${id}/audioposts`)
    .then((res) => {
      const data = res.data;
      add(data)
      setLatestEpisode(data.audioposts[0]);
    })
    .catch((err) => {
      // development only
      add(data);
      setLatestEpisode(data.audioposts[0]);
      console.log(err);
    })
  }, [])


  return (

    <div>
      <JumbotronHero 
        name={latestEpisode.name} 
        description={latestEpisode.description}
        audio_date={latestEpisode.audio_date}
      />
    </div>    
  )
}

export default Podcast