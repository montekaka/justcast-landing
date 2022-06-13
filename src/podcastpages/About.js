import React, {useEffect, useState, useContext} from "react";
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom'
import {Context as PublicPodcastContext} from '../context/PublicPodcastContext'
import { useShowQuery } from '../hooks'
import {Layout, SimplePageHeader, SocialNetworks, SimplePageBody, MeetTheHosts } from '../components/podcastpages'
import PrivateShow from './../components/PrivateShow';

const About = (props) => {
  const { state } = useContext(PublicPodcastContext);  
  const {textColor, people, meet_hosts_title, buttonColor, buttonTextColor, about_page_content, 
    instagram_profile, facebook_page, twitter_handle, slack, mastodon, matrix
  } = state;

  const id = props.match.params.id;
  const _ = useShowQuery(id);

  useEffect(() => {
    if(state.id && state.google_analytics_id) {
      const googleAnalyticsId = state.google_analytics_id;
      ReactGA.initialize(googleAnalyticsId);
      ReactGA.pageview(`/shows/${state.slug}/about`)
    }
  }, [id])  

  if(state.is_private) {
    return <PrivateShow/>;
  }
  return (
    <>
      <SimplePageHeader
        title={"About the Show"}
        imgURL={state.header_img_url}  
        hideOverlay={state.hide_header_image_overlay}          
      />
      <Layout>      
        <div className="container">
					<SocialNetworks
						textColor={textColor}
						instagram_profile={instagram_profile}
						facebook_page={facebook_page}
						twitter_handle={twitter_handle}
						slack={slack}
            mastodon={mastodon}
            matrix={matrix}
					/>
					<SimplePageBody
						bodyText={about_page_content}
						textColor={textColor}
					/>
          <MeetTheHosts
            title={meet_hosts_title}
            items={people}
            textColor={textColor}
          />
        </div>
      </Layout>
    </>
  )
}

export default About;