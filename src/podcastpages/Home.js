import React, {useEffect, useState, useContext} from "react";
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom'
import {Context as PublicPodcastContext} from '../context/PublicPodcastContext'
import { useShowQuery } from '../hooks'
import {Layout, PageHeader, EpisodeList, FeaturedEpisode} from '../components/podcastpages'
import PrivateShow from './../components/PrivateShow';

const Home = (props) => {
  const { state } = useContext(PublicPodcastContext);
  const audioposts = state.audioposts.slice(0, 6);
  const {textColor, buttonColor, buttonTextColor} = state;

  const id = props.match.params.id;
  const _ = useShowQuery(id);

  useEffect(() => {
    if(state.id && state.google_analytics_id) {
      const googleAnalyticsId = state.google_analytics_id;
      ReactGA.initialize(googleAnalyticsId);
      ReactGA.pageview(`/shows/${state.slug}/audioposts`)
    }
  }, [id])

  if(state.is_private) {
    return <PrivateShow/>;
  }
  return (
    <>
      <PageHeader
        headerTitle={state.name}
        text={state.site_intro_text}
        imgURL={state.header_img_url}    
      />
      <Layout>      
        <div className="container">
          <div className="form-row">
            <FeaturedEpisode/>
          </div>          
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 text-center">
              <h2 className="font-weight-bold" style={{color: textColor}}>Recent Episodes</h2>
            </div>
          </div>
          <div className="form-row">
            <EpisodeList slug={state.slug} items={audioposts}/>
          </div>
          <div className="row justify-content-center">
            <Link className="btn lift" to={`/shows/${state.slug}/episodes`} style={{backgroundColor: buttonColor, color: buttonTextColor}}>
              All Episodes
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home;