import React, {useEffect, useState, useContext} from "react";
import justcastApi from '../api/justcast'
import ReactGA from 'react-ga';
import {Context as PublicPodcastContext} from '../context/PublicPodcastContext'
import {Layout, SimplePageHeader, EpisodeArtwork, EpisodeImages, EpisodePlayer} from '../components/podcastpages'
import PrivateShow from './../components/PrivateShow';

const getAudiopostById = (audioposts, id) => {
  const _ = audioposts.filter(audiopost => audiopost.id.toString() === id.toString());
  if(_.length > 0) {
    return _[0];
  }
  return null;
}

const Episode = (props) => {
  
  const { state, add } = useContext(PublicPodcastContext);
  const {textColor, buttonColor, buttonTextColor} = state;
  const [audiopost, setAudiopost] = useState({})

  const id = props.match.params.show_id;
  const audiopost_id = props.match.params.id;

  useEffect(() => {
    if(!state.name) {
      justcastApi.get(`/v1/shows/${id}/audioposts`)
      .then((res) => {
        const data = res.data;
        const {show, audioposts} = data;
        const _ = getAudiopostById(audioposts, audiopost_id);
        setAudiopost(_);        
        add({show, audioposts});
        // setShow(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    } else {
      const _ = getAudiopostById(state.audioposts, audiopost_id)
      setAudiopost(_);
    }
  }, [id, audiopost_id])

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
          <div className="row justify-content-center">
            <div className="col-12">
              <EpisodePlayer 
                audiopost={audiopost}
                audiopostId={audiopost_id}
              />
            </div>
          </div>  
          <br/>        
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