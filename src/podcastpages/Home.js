import React, {useEffect, useState, useContext} from "react";
import ReactGA from 'react-ga';
import {Context as PublicPodcastContext} from '../context/PublicPodcastContext'
import { useShowQuery } from '../hooks'
import {PageHeader} from '../components/podcastpages'
import PrivateShow from './../components/PrivateShow';

const Home = (props) => {
  const { state } = useContext(PublicPodcastContext);
  const id = props.match.params.id;
  const _ = useShowQuery(id);

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
      <div className="container">

      </div>
    </>
  )
}

export default Home;