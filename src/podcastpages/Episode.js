import React, {useEffect, useState, useContext} from "react";
import moment from 'moment'
import justcastApi from '../api/justcast'
import ReactGA from 'react-ga';
import {Context as PublicPodcastContext} from '../context/PublicPodcastContext'
import {Context as PlayerContext} from '../context/PlayerContext'
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
  const playerContext = useContext(PlayerContext);

  const {textColor, buttonColor, buttonTextColor} = state;
  const [audiopost, setAudiopost] = useState({})
  const [audioDate, setAudioDate] = useState('');

  const id = props.match.params.show_id;
  const audiopost_id = props.match.params.id;

  useEffect(() => {
    if(state.id && state.google_analytics_id) {
      const googleAnalyticsId = state.google_analytics_id;
      ReactGA.initialize(googleAnalyticsId);
      ReactGA.pageview(`/shows/${state.slug}/audioposts/${audiopost_id}`)
    }
  }, [id, audiopost_id])  

  const setupPlayer = (data) => {
    if(!playerContext.state.id ) {
      playerContext.preLoad({
        audio_date: data.audio_date,
        id: data.id,
        url: data.url,
        name: data.name,
        description: data.description,
        artwork: state.artwork_url, 
        embedUrl: `${process.env.REACT_APP_BASE_PATH}/widget/${state.slug}/audioposts/${data.id}`, 
        shareUrl: `${process.env.REACT_APP_BASE_PATH}/shows/${state.slug}/audioposts/${data.id}`, 
        shareOnFacebook: data.share_on_facebook, 
        shareOnTwitter: data.share_on_twitter
      })
    }
  }

  useEffect(() => {
    if(!state.name) {
      justcastApi.get(`/v1/shows/${id}/audioposts`)
      .then((res) => {
        const data = res.data;
        const {show, audioposts} = data;
        const _audiopost = getAudiopostById(audioposts, audiopost_id);
        setAudiopost(_audiopost);
        setupPlayer(_audiopost)
        add({show, audioposts});
      })
      .catch((err) => {
        console.log(err);
      })
    } else {
      const _audiopost = getAudiopostById(state.audioposts, audiopost_id)
      // console.log(_audiopost)
      setupPlayer(_audiopost)
      setAudiopost(_audiopost);
      const _audioDate = moment(_audiopost.audio_date).format('YYYY-MM-DD');
      setAudioDate(_audioDate)
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
        text={audioDate}  
      >
        <a className="btn btn-primary lift" href={audiopost.audio_url} download={audiopost.name} alt={`Download ${audiopost.name}`}>
          <i className="fe fe-download"/> Download
        </a>
      </SimplePageHeader>
      <Layout>      
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <EpisodePlayer 
                audiopost={audiopost}
                audiopostId={audiopost.id}
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