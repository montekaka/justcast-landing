import React, {useEffect, useState} from "react";
import { Spinner } from 'reactstrap';
import ReactGA from 'react-ga';
import {NinjaPlayer} from 'react-podcast-ninja'
import {redirectPageShowId} from '../libs'
import { useFetch} from '../hooks'

const SingleWidget = (props) => {
  const id = props.match.params.id;
  const showId = props.match.params.show_id;  
  const params = new URLSearchParams(props.location.search);
  const widget_code = params.get('widget_code');
  const {data, isPending, error} = useFetch(`/v3/shows/${redirectPageShowId(showId)}/audioposts/${id}.json?referer_url=${widget_code}`)

  useEffect(() => {
    if(data?.show?.slug && data?.show?.google_analytics_id) {
      const googleAnalyticsId = data?.show?.google_analytics_id;
      ReactGA.initialize(googleAnalyticsId);
      ReactGA.pageview(`/widget/${data?.show?.slug}/audioposts/${id}`)
    }
  }, [data?.show?.slug]);

  if(error) return null;
  if(isPending) return <Spinner color="primary" /> 
  if(!data?.show) return null;

  return (
    <NinjaPlayer
      configs={{
        hidePubDate: data?.show?.hide_widget_pub_date,
        hideMoreInfo: data?.show?.hide_more_info_from_widget,
        playlistFullHeight: data?.show?.playlist_full_height,
        primaryBackgroundColor: data?.show?.widget_primary_background_color || "#0c1824",
        primaryButtonColor: data?.show?.widget_primary_button_color || "#f7f8f9",
        primaryTextColor: data?.show?.widget_primary_text_color || "#f7f8f9",
        progressBarFilledColor: data?.show?.widget_progress_bar_filled_color || "#f7f8f9",
        progressBarBackgroundColor: data?.show?.widget_progress_bar_background_color || "#8A8175",
        playlistBackgroundColor: data?.show?.widget_playlist_background_color || "#30343c",
        playlistTextColor: data?.show?.widget_playlist_text_color || "#f7f8f9",
        chapterBackgroundColor: data?.show?.widget_chapter_background_color || "#30343c",
        chapterTextColor:  data?.show?.widget_chapter_text_color || "#f7f8f9"        
      }}
      playerId={`${id}-single`}
      episodes={[{
        title: data?.episode_title,
        description: data?.description,
        podcastTitle: data?.show?.podcast_title,
        artworkUrl: data?.artwork_url,
        pubDate: data?.audio_date,
        link: data?.single_page_url,
        audioUrl: data?.audio_url,
        chaptersUrl: data?.chapters_url,
      }]}
      singleEpisode={true}
      themeName="retro"
    />  
  )
}

export default SingleWidget