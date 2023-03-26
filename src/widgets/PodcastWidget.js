import React, {useEffect, useState} from "react";
import { Spinner } from 'reactstrap';
import ReactGA from 'react-ga';
import {NinjaPlayer} from 'react-podcast-ninja'
import {redirectPageShowId} from '../libs'
import { useFetch} from '../hooks'

const appendWidgetCode = (url, widgetCode) => {
  if(widgetCode) {
    return `${url}?referer_url=${widgetCode}`
  } else {
    return url
  }
}

const PodcastWidget = (props) => {
  const id = props.match.params.id;
  const params = new URLSearchParams(props.location.search);
  const widget_code = params.get('widget_code');
  const endpointUrl = appendWidgetCode(`/v3/shows/${redirectPageShowId(id)}/audioposts`, widget_code);
  const showUrl = appendWidgetCode(`/v3/shows/${redirectPageShowId(id)}`, widget_code);
  const {data, isPending, error} = useFetch(showUrl)

  useEffect(() => {
    if(data?.slug && data?.google_analytics_id) {
      const googleAnalyticsId = data?.google_analytics_id;
      ReactGA.initialize(googleAnalyticsId);
      ReactGA.pageview(`/widget/${data?.slug}/audioposts`)
    }
  }, [id])  

  if(error) return null;
  if(isPending) return <Spinner color="primary" /> 
  // if(!data?.show) return null;
  if(!data) return null;
  if(!data.allow_request_referer_url) return null;

  return (
    <NinjaPlayer
      configs={{
        hidePubDate: data?.hide_widget_pub_date,
        hideMoreInfo: data?.hide_more_info_from_widget,
        playlistFullHeight: data?.playlist_full_height,
        primaryBackgroundColor: data?.widget_primary_background_color || "#0c1824",
        primaryButtonColor: data?.widget_primary_button_color || "#f7f8f9",
        primaryTextColor: data?.widget_primary_text_color || "#f7f8f9",
        progressBarFilledColor: data?.widget_progress_bar_filled_color || "#f7f8f9",
        progressBarBackgroundColor: data?.widget_progress_bar_background_color || "#8A8175",
        playlistBackgroundColor: data?.widget_playlist_background_color || "#30343c",
        playlistTextColor: data?.widget_playlist_text_color || "#f7f8f9",
        chapterBackgroundColor: data?.widget_chapter_background_color || "#30343c",
        chapterTextColor:  data?.widget_chapter_text_color || "#f7f8f9"
      }}
      playerId={`${id}-playlist`}
      jcPodcastApi={`${process.env.REACT_APP_API_PROXY_SERVER_BASE_PATH}${endpointUrl}`}
      themeName="retro"
    /> 
  )
}

export default PodcastWidget