import React, {useEffect, useState, useContext} from "react";
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom'
import {Context as PublicPodcastContext} from '../context/PublicPodcastContext'
import { useShowQuery } from '../hooks'
import {Layout, SimplePageHeader, SocialNetworks, SimplePageBody } from '../components/podcastpages'
import PrivateShow from './../components/PrivateShow';

const Tipjar = (props) => {
  const { state } = useContext(PublicPodcastContext);  
  const id = props.match.params.id;
  const _ = useShowQuery(id);
  
  if(state.is_private) {
    return <PrivateShow/>;
  }
  
  return (
    <>
      <SimplePageHeader
        title={"Support Us"}
        text="Donating to your favorite podcasts helps them grow and improve."
      />
      <Layout>      
        <div className="container">
					
        </div>
      </Layout>
    </>
  )
}

export default Tipjar;