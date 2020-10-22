import React, {useEffect, useState, useContext} from "react";
import ReactGA from 'react-ga';
import {Context as PublicPodcastContext} from '../context/PublicPodcastContext'
import { useShowQuery, useAudiopostQuery } from '../hooks'
import {Layout, SimplePageHeader, EpisodeArtwork, EpisodeImages} from '../components/podcastpages'
import PrivateShow from './../components/PrivateShow';

const Episode = (props) => {
  const { state } = useContext(PublicPodcastContext);
  const {textColor, buttonColor, buttonTextColor} = state;
  
  const id = props.match.params.show_id;
  const audiopost_id = props.match.params.id;
  const _ = useShowQuery(id);
  const audiopost = useAudiopostQuery(id, audiopost_id)

  if(!state) {
    return null;
  }

  if(state.is_private) {
    return <PrivateShow/>;
  }
  
  return (
    <>
      <SimplePageHeader
        title={audiopost.name}
        text={audiopost.audio_date}  
      />
      <Layout>      
        <div className="container">
          <div className="row justify-content-center" style={{color: textColor}}>
            <div className="col-12 col-md-10 col-lg-9 col-xl-8" 
              dangerouslySetInnerHTML={{__html: audiopost.description}}/>
            <EpisodeArtwork artwork={audiopost.artwork_url} name={audiopost.name}/>
            <EpisodeImages images={audiopost.images}/>
          </div>
        </div>
      </Layout>
    </>
  )  
}

export default Episode;