import React, {useEffect, useState, useContext} from "react";
import ReactGA from 'react-ga';
import {Context as PublicPodcastContext} from '../context/PublicPodcastContext'
import { useShowQuery } from '../hooks'
import {Layout, SimplePageHeader, EpisodeList} from '../components/podcastpages'
import PrivateShow from './../components/PrivateShow';

const Episodes = (props) => {
  const { state } = useContext(PublicPodcastContext);
  const {textColor, buttonColor, buttonTextColor} = state;

  const id = props.match.params.id;
  const _ = useShowQuery(id);

  if(state.is_private) {
    return <PrivateShow/>;
  }
  
  return (
    <>
      <SimplePageHeader
        title={state.name}
        text={`Total episodes: ${state.audioposts.length}`}  
      />
      <Layout>      
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 text-center">
              <h2 className="font-weight-bold" style={{color: textColor}}>Episodes</h2>
            </div>
          </div>
          <div className="form-row">
            <EpisodeList items={state.audioposts}/>                          
          </div>          
        </div>
      </Layout>
    </>
  )  
}

export default Episodes;