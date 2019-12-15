import React, {useEffect, useState, useContext} from "react";
import {Link} from 'react-router-dom'
import {Context as PodcastContext} from '../context/PodcastContext'
import {Context as PlayerContext} from '../context/PlayerContext'
import justcastApi from '../api/justcast'
import data from './../dumps/result.json'
import JumbotronHero from './../components/JumbotronHero'
import EpisodeList from './../components/EpisodeList';

const Podcast = (props) => {

  const {state, add} = useContext(PodcastContext);
  const playerContext = useContext(PlayerContext);
  
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

  const handlePlay = (id) => {
    const _ = state.audioposts.filter(audiopost => audiopost.id === id);
    if(_.length > 0) {
      const audiopost = _[0];
      const artwork = state.show.artwork_url;
      
      playerContext.add({
        audio_date: audiopost.audio_date,
        id: audiopost.id,
        url: audiopost.audio_url,
        name: audiopost.name,
        description: audiopost.description,
        artwork
      })
    }    
  }

  return (
    <>
      <JumbotronHero 
        name={latestEpisode.name}
        id={latestEpisode.id}
        description={latestEpisode.description}
        audio_date={latestEpisode.audio_date}
        handlePlay={handlePlay}
      />    
      <div className="container player-container">
        <EpisodeList 
          items={state.audioposts.slice(0, 5)} 
          artwork_url={state.show.artwork_url}
          handlePlay={handlePlay}
        />
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-9 col-lg-8 col-xl-7">            
                <Link to={`shows/${id}/audioposts`} className="btn btn-block btn-outline-gray-300 d-flex align-items-center">
                  <span className="mx-auto">More</span> <i className="fe fe-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>         
      </div>     
    </>    
  )
}

export default Podcast