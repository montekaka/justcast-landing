import React, {useEffect, useState, useContext} from "react";
import {Link} from 'react-router-dom'
import {Context as PodcastContext} from '../context/PodcastContext'
import justcastApi from '../api/justcast'
import data from './../dumps/result.json'
import PageHeader from './../components/PageHeader'
import EpisodeList from './../components/EpisodeList';
import PrivateShow from './../components/PrivateShow';

const MoreEpisodes = ({handleMoreEpisodesClicked, totalNumberOfEpisodes, showingNumberOfEpisodes}) => {
  if(totalNumberOfEpisodes > showingNumberOfEpisodes) {
    return (
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-8 col-xl-7">            
              <div className="btn btn-block btn-outline-gray-300 d-flex align-items-center" onClick={handleMoreEpisodesClicked}>
                <span className="mx-auto">MORE EPISODES</span> <i className="fe fe-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>       
    )
  }
  return null;
}


const Podcast = (props) => {

  const {state, add} = useContext(PodcastContext);
  
  const [latestEpisode, setLatestEpisode] = useState({})
  const [numberOfEpisodes, setNumberOfEpisodes] = useState(5)
  //const [showingNumberOfEpisodes, setShowingNumberOfEpisodes] = useState(0)
  const id = props.match.params.id;
  
  useEffect(() => {
    justcastApi.get(`/v1/shows/${id}/audioposts`)
    .then((res) => {
      const data = res.data;      
      add(data)      
      setLatestEpisode(data.audioposts[0]);
    })
    .catch((err) => {
      if(process.env.ENV === 'DEVELOPMENT') {
        // development only
        add(data);
        setLatestEpisode(data.audioposts[0]);
      }
      console.log(err);
    })
  }, [id])

  const handleMoreEpisodesClicked = () => {
    setNumberOfEpisodes(numberOfEpisodes + 5);
  }

  if(state.show.id) {   
    if(state.show.is_private) {
      return <PrivateShow/>;
    }
    return (
      <>
        <PageHeader 
          headerTitle={"LATEST EPISODE"}
          name={latestEpisode.name}
          id={latestEpisode.id}
          url={latestEpisode.url}
          artwork={state.show.artwork_url}
          description={latestEpisode.description}
          audio_date={latestEpisode.audio_date}
          embedUrl={`${process.env.REACT_APP_BASE_PATH}/widget/${id}/audioposts/${latestEpisode.id}`}
          shareUrl={`${process.env.REACT_APP_BASE_PATH}/shows/${id}/audioposts/${latestEpisode.id}`}
          shareOnFacebook={latestEpisode.share_on_facebook}
          shareOnTwitter={latestEpisode.share_on_twitter} 
          imgURL={state.show.header_img_url}         
        />    
        <div className="container player-container">
          <EpisodeList
            showId={id}
            items={state.audioposts.slice(0, numberOfEpisodes)} 
            artwork_url={state.show.artwork_url}
          />
          <MoreEpisodes
            handleMoreEpisodesClicked={handleMoreEpisodesClicked}
            totalNumberOfEpisodes={state.audioposts.length}
            showingNumberOfEpisodes={numberOfEpisodes}
          />
        </div>     
      </>    
    )
  }

  return null;
}

export default Podcast