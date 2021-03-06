import React, {useEffect, useState, useContext} from "react";
import ReactGA from 'react-ga';
import {Context as PodcastContext} from '../context/PodcastContext'
import {Context as ThemeContext} from '../context/ThemeContext'
import justcastApi from '../api/justcast'
import data from './../dumps/result.json'
import SimplePageHeader from './../components/SimplePageHeader'
import EpisodeList from './../components/EpisodeList';
import PrivateShow from './../components/PrivateShow';

const Episodes = (props) => {
  const id = props.match.params.id;
  const {state, add} = useContext(PodcastContext);
  const themeContext = useContext(ThemeContext);
  const {cardBackgroundColor} = themeContext.state;

  useEffect(() => {
    justcastApi.get(`/v1/shows/${id}/audioposts`)
    .then((res) => {
      const data = res.data;
      add(data)

      // condition on google_analytic_id e.g. UA-52969503-3      
      const googleAnalyticsId = data.show.google_analytics_id;
      if(googleAnalyticsId) {
        ReactGA.initialize(googleAnalyticsId);
        ReactGA.pageview(`/shows/${data.show.slug}/episodes`)
      }

      if(cardBackgroundColor === null) {
        const show = data.show;
        const { navbarColor, backgroundColorClass, cardBackgroundColor, textColor, linkColor, buttonColor, buttonTextColor, navbarColorTheme } = show;
        themeContext.add({ navbarColor, backgroundColorClass, cardBackgroundColor, textColor, linkColor, buttonColor, buttonTextColor, navbarColorTheme })        
      }
    })
    .catch((err) => {
      // development only
      if(process.env.ENV === 'DEVELOPMENT') {
        add(data);
      }      
      console.log(err);
    })
  }, [id])

  if(state.show.id) {
    if(state.show.is_private) {
      return <PrivateShow/>;
    }    
    return (
      <>
        <SimplePageHeader title={state.show.name} bodyText={`Total episodes: ${state.audioposts.length}`}/>        
        <div className="container player-container">
          <EpisodeList
            showId={id}
            items={state.audioposts}
            artwork_url={state.show.artwork_url}
          />
        </div>
      </>
    )
  }

  return null;
}

export default Episodes;