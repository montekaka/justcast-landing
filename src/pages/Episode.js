import React, {useEffect, useState, useContext} from "react";
import {Context as PodcastContext} from '../context/PodcastContext'
import {Context as PlayerContext} from '../context/PlayerContext'
import justcastApi from '../api/justcast'
import data from './../dumps/result.json'

import PageHeader from './../components/PageHeader'
import EpisodeMeta from './../components/EpisodeMeta'

const getAudiopostById = (audioposts, id) => {
  const _ = audioposts.filter(audiopost => audiopost.id.toString() === id.toString());
  if(_.length > 0) {
    return _[0];
  }
  return null;
}


const Episode = (props) => {
  const id = props.match.params.id;
  const showId = props.match.params.show_id;
  const [audiopost, setAudiopost] = useState({});
  
  const {state, add} = useContext(PodcastContext);
  const playerContext = useContext(PlayerContext);

  useEffect(() => {
    justcastApi.get(`/v1/shows/${showId}/audioposts`)
    .then((res) => {
      const data = res.data;      
      
      if(getAudiopostById(data.audioposts, id)) {        
        setAudiopost(getAudiopostById(data.audioposts, id))
      }
      add(data)
    })
    .catch((err) => {
      // development only
      if(getAudiopostById(data.audioposts, id)) {
        setAudiopost(getAudiopostById(data.audioposts, id))
      }      
      add(data);
      console.log(err);
    })
  }, [id])

  const handlePlay = () => {            
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

  return (
    <>
      <PageHeader 
        name={audiopost.name}
        id={audiopost.id}
        audio_date={audiopost.audio_date}
        handlePlay={handlePlay}
      />
      <section className="pt-8 pt-md-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h1 className="display-4 text-center">{audiopost.name}</h1>
              <EpisodeMeta artwork={state.show.artwork_url ? state.show.artwork_url :  "http://download.randgad.com/images/RandGadArt.jpg"}
                showName={state.show.name}
                audio_date={audiopost.audio_date}
              />                
            </div>          
          </div>          
        </div>
      </section>
      <section className="pt-6 pt-md-8 last-piece">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8" 
              dangerouslySetInnerHTML={{__html: audiopost.description}}>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Episode;