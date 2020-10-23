import React, {useEffect, useState, useContext} from "react";
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom'
import {Context as PublicPodcastContext} from '../context/PublicPodcastContext'
import { useShowQuery } from '../hooks'
import {Layout, SimplePageHeader, SocialNetworks, SimplePageBody } from '../components/podcastpages'
import PrivateShow from './../components/PrivateShow';

const Subscribe = (props) => {
  const { state } = useContext(PublicPodcastContext);  
  const {name, textColor, buttonColor, buttonTextColor, about_page_content, instagram_profile, facebook_page, twitter_handle, slack} = state;

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
        
      </Layout>
    </>
  )
}

export default Subscribe;