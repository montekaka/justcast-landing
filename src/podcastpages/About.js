import React, {useEffect, useState, useContext} from "react";
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom'
import {Context as PublicPodcastContext} from '../context/PublicPodcastContext'
import { useShowQuery, useFetch } from '../hooks'
import {Layout, SimplePageHeader, SocialNetworks, SimplePageBody, MeetTheHosts } from '../components/podcastpages'
import PrivateShow from './../components/PrivateShow';
import {redirectPageShowId} from '../libs'

const About = (props) => {
  const { state } = useContext(PublicPodcastContext);  
  const {textColor, meet_hosts_title, about_page_content, 
    instagram_profile, facebook_page, twitter_handle, slack, mastodon, matrix, about_page_title,
    header_img_url, about_page_header_image
  } = state;

  const id = props.match.params.id;
  const _ = useShowQuery(id);
  const {data, isPending, error} = useFetch(`/v3/shows/${redirectPageShowId(id)}/people`)

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
        title={about_page_title ? about_page_title : "About the Show"}
        imgURL={about_page_header_image ? about_page_header_image : header_img_url}
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
            items={data?.people}
            textColor={textColor}
          />
        </div>
      </Layout>
    </>
  )
}

export default About;