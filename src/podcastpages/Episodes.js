import React, {useEffect, useState, useContext} from "react";
import ReactGA from 'react-ga';
import {Context as PublicPodcastContext} from '../context/PublicPodcastContext'
import { useShowQuery, useFetch} from '../hooks'
import {Layout, SimplePageHeader, EpisodeList} from '../components/podcastpages'
import PrivateShow from './../components/PrivateShow';
import {redirectPageShowId} from '../libs'

const Episodes = (props) => {
  const id = props.match.params.id;
  const { state } = useContext(PublicPodcastContext);
  const {textColor, buttonColor, buttonTextColor} = state;
  const {data, isPending, error} = useFetch(`/v3/shows/${redirectPageShowId(id)}/audioposts.json`)

  const _ = useShowQuery(id);

  useEffect(() => {
    if(state.id && state.google_analytics_id) {
      const googleAnalyticsId = state.google_analytics_id;
      ReactGA.initialize(googleAnalyticsId);
      ReactGA.pageview(`/shows/${state.slug}/episodes`)
    }
  }, [id])  

  if(state.is_private) {
    return <PrivateShow/>;
  }
  
  return (
    <>
      <SimplePageHeader
        title={state?.podcast_title}
        text={`Total episodes: ${data?.audioposts?.length}`}  
      />
      <Layout>      
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 text-center">
              <h2 className="font-weight-bold" style={{color: textColor}}>Episodes</h2>
            </div>
          </div>
          <div className="form-row">
            <EpisodeList slug={state?.slug} items={data?.audioposts}/>
          </div>          
        </div>
      </Layout>
    </>
  )  
}

export default Episodes;