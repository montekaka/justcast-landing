import React, {useEffect, useState, useContext} from "react";
import ReactGA from 'react-ga';
import {Context as PodcastContext} from '../context/PodcastContext'
import {Context as ThemeContext} from '../context/ThemeContext'
import justcastApi from '../api/justcast'
import data from './../dumps/result.json'
import {PageHeader} from './../components/podcastpages'
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
                <span className="mx-auto">MORE EPISODES</span> <i className="fe fe-arrow-right"/>
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
  const themeContext = useContext(ThemeContext);
  const {cardBackgroundColor} = themeContext.state;
  
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
      // condition on google_analytic_id e.g. UA-52969503-3
      const googleAnalyticsId = data.show.google_analytics_id;
      if(googleAnalyticsId) {
        ReactGA.initialize(googleAnalyticsId);
        ReactGA.pageview(`/shows/${data.show.slug}/audioposts`)
      }

      if(cardBackgroundColor === null) {
        const show = data.show;        
        const { navbarColor, backgroundColorClass, cardBackgroundColor, textColor, linkColor, buttonColor, buttonTextColor, navbarColorTheme } = show;
        themeContext.add({ navbarColor, backgroundColorClass, cardBackgroundColor, textColor, linkColor, buttonColor, buttonTextColor, navbarColorTheme })        
      }

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
    } else if (latestEpisode) {
    return (
      <>
        <PageHeader 
          headerTitle={state.show.name}
          text={state.show.site_intro_text}
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
    )}
  }

  return null;
}

export default Podcast