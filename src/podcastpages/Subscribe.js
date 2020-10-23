import React, {useEffect, useState, useContext} from "react";
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom'
import {Context as PublicPodcastContext} from '../context/PublicPodcastContext'
import { useShowQuery } from '../hooks'
import {Layout, SimplePageHeader, PodcastApps } from '../components/podcastpages'
import PrivateShow from './../components/PrivateShow';

const Subscribe = (props) => {
  const { state } = useContext(PublicPodcastContext);  
  const {name, apple_podcast, google_podcast, overcast, spotify, pocket_casts, breaker, castro, radio_public, castbox, tune_in, stitcher, slug} = state;
  
  const id = props.match.params.id;
  const _ = useShowQuery(id);

  if(state.is_private) {
    return <PrivateShow/>;
  }
  return (
    <>
      <SimplePageHeader
        title={name}
        text={"Listen in your favorite apps"}
      />
      <Layout>      
        <PodcastApps 
          apple_podcast={apple_podcast}
          google_podcast={google_podcast}
          overcast={overcast}
          spotify={spotify}
          pocket_casts={pocket_casts}
          breaker={breaker}
          castro={castro}
          radio_public={radio_public}
          castbox={castbox}
          tune_in={tune_in}
          stitcher={stitcher}
          slug={slug}
        />
      </Layout>
    </>
  )
}

export default Subscribe;