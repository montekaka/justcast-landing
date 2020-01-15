import React, {useEffect, useState, useContext} from "react";
import {Context as PodcastContext} from '../context/PodcastContext'
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
      if(process.env.ENV === 'DEVELOPMENT') {
        if(getAudiopostById(data.audioposts, id)) {
          setAudiopost(getAudiopostById(data.audioposts, id))
        }      
        add(data);
      }
      console.log(err);
    })
  }, [showId, id])

  if(audiopost.id) {
    return (
      <>
        <PageHeader 
          name={audiopost.name}
          id={audiopost.id}
          url={audiopost.url}
          artwork={state.show.artwork_url}
          audio_date={audiopost.audio_date}
          description={audiopost.description}
          embedUrl={`${process.env.REACT_APP_BASE_PATH}/widget/${id}/audioposts/${audiopost.id}`}
          shareUrl={`${process.env.REACT_APP_BASE_PATH}/shows/${id}/audioposts/${audiopost.id}`}          
          shareOnFacebook={audiopost.share_on_facebook}
          shareOnTwitter={audiopost.share_on_twitter}
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

  return null;
}

export default Episode;