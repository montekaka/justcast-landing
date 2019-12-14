import React, {useEffect, useState, useContext} from "react";
import {Context as PodcastContext} from '../context/PodcastContext'
import justcastApi from '../api/justcast'
import data from './../dumps/result.json'
import JumbotronHero from './../components/JumbotronHero'
import EpisodeList from './../components/EpisodeList';

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

    <>
      <JumbotronHero 
        name={latestEpisode.name} 
        description={latestEpisode.description}
        audio_date={latestEpisode.audio_date}
      />
      <div className="container">
        <EpisodeList items={state.audioposts.slice(0, 5)} artwork_url={state.show.artwork_url}/>
      </div>
      <footer className="footer mt-auto py-3 fixed-bottom bg-dark">
        <div className="container">
          <span className="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>      
    </>    
  )
}

export default Podcast