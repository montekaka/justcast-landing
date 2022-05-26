import React, {useEffect, useState, useContext} from "react";
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom'
import {Context as PublicPodcastContext} from '../context/PublicPodcastContext'
import { useShowQuery } from '../hooks'
import {Layout, SimplePageHeader, PodcastApps, EmailSubscribeInput } from '../components/podcastpages'
import PrivateShow from './../components/PrivateShow';

const Subscribe = (props) => {
  const { state } = useContext(PublicPodcastContext);  
  const {textColor, buttonColor, buttonTextColor, name, podcast_title, 
    amazon_podcast_link, apple_podcast, google_podcast, 
    overcast, spotify, pocket_casts, breaker, castro, radio_public, 
    castbox, tune_in, stitcher, slug, mailchimp_button_title_message, 
    podverse, fountain, mailchimp_show_form, mailchimp_button_text} = state;
  
  const id = props.match.params.id;
  const _ = useShowQuery(id);

  useEffect(() => {
    if(state.id && state.google_analytics_id) {
      const googleAnalyticsId = state.google_analytics_id;
      ReactGA.initialize(googleAnalyticsId);
      ReactGA.pageview(`/shows/${state.slug}/subscribe`)
    }
  }, [id])

  if(state.is_private) {
    return <PrivateShow/>;
  }
  return (
    <>
      <SimplePageHeader
        title={podcast_title}
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
          amazon_podcast_link={amazon_podcast_link}
          podverse={podverse}
          fountain={fountain}          
          slug={slug}
        />
        <EmailSubscribeInput
          show_id={state.id}
          textColor={textColor}
          buttonColor={buttonColor}
          buttonTextColor={buttonTextColor}
          show_form={mailchimp_show_form}
          button_text={mailchimp_button_text}
          button_title_message={mailchimp_button_title_message}
        />
      </Layout>
    </>
  )
}

export default Subscribe;