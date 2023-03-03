import React, {useEffect, useState} from "react";
import { Spinner } from 'reactstrap';
import ReactGA from 'react-ga';
import {NinjaPlayer} from 'react-podcast-ninja'
import {redirectPageShowId} from '../libs'
import { useFetch} from '../hooks'

const MobilePlayer = (props) => {
  const id = props.match.params.id;
  const params = new URLSearchParams(props.location.search);
  const widget_code = params.get('widget_code');
  const {data, isPending, error} = useFetch(`/v3/shows/${redirectPageShowId(id)}/audioposts.json?referer_url=${widget_code}`)

  useEffect(() => {
    if(data?.show?.slug && data?.show?.google_analytics_id) {
      const googleAnalyticsId = data?.show?.google_analytics_id;
      ReactGA.initialize(googleAnalyticsId);
      ReactGA.pageview(`/widget/${data?.show?.slug}/audioposts`)
    }
  }, [data?.show?.slug])  

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
      playerId={`${id}-playlist`}
      episodes={data?.audioposts.map((item) => {
        return {
          title: item?.episode_title,
          description: item?.description,
          podcastTitle: data?.show?.podcast_title,
          artworkUrl: item?.artwork_url,
          pubDate: item?.audio_date,
          link: item?.single_page_url,
          audioUrl: item?.audio_url,
          chaptersUrl: item?.chapters_url,
        }
      })}
      // themeName="retro"
    /> 
  )
}

export default MobilePlayer