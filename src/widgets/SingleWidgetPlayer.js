import React, {useEffect, useState} from "react";
import ReactGA from 'react-ga';
import justcastApi from '../api/justcast'
import WidgetPlayerControl from './WidgetPlayerControl';

const SingleWidgetPlayer = (props) => {
  const id = props.match.params.id;
  const showId = props.match.params.show_id;
  const [audiopost, setAudiopost] = useState({});
  const [episodes, setEpisodes] = useState([])
  const [playerConfigs, setPlayerConfigs] = useState({});
  const [show, setShow] = useState({});
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    const referer_url = document.referrer;
    justcastApi.get(`/v1/shows/${showId}/audioposts/${id}?referer_url=${referer_url}`)
    .then((res) => {
      const data = res.data;
      setAudiopost(data)
      setShow(data.show);
      const menus = [];
      if(data.show.hide_widget_subscribe !== true) {
        menus.push({key: 'subscribe', label: 'subscribe'})
      }
      if(data.show.hide_widget_share !== true) {
        menus.push({key: 'share', label: 'share'})
      }
      menus.push({key: 'more_info', label: 'more info'})
      setMenuItems(menus)

      const googleAnalyticsId = res.data.show.google_analytics_id;

      if(googleAnalyticsId) {
        ReactGA.initialize(googleAnalyticsId);
        ReactGA.pageview(`/widget/${res.data.show.slug}/audioposts/${id}`)
      }

      // ninja player variables
      const items = [];
      const feedArtwork = data.show.artwork_url;
      const podcastTitle = data.show.name;

      let artworkUrl = feedArtwork;
      if(data.artwork_url) {
        artworkUrl = data.artwork_url;
      }

      const chaptersUrl = data.chapters_url
      // console.log(artworkUrl)
      const item = {
        id: data.id,
        title: data.name,
        description: data.description,
        podcastTitle: podcastTitle,
        artworkUrl: artworkUrl,
        pubDate: data.audio_date,
        link: data.single_page_url,
        audioUrl: data.url,
        chaptersUrl: chaptersUrl,
      }


      setEpisodes([item]);

      const configs = {
        hidePubDate: res.data.show.hide_widget_pub_date,
        primaryBackgroundColor: res.data.show.widget_primary_background_color ?  res.data.show.widget_primary_background_color : "#0c1824",
        primaryButtonColor: res.data.show.widget_primary_button_color ?  res.data.show.widget_primary_button_color : "#f7f8f9",
        primaryTextColor: res.data.show.widget_primary_text_color ?  res.data.show.widget_primary_text_color : "#f7f8f9",
        progressBarFilledColor: res.data.show.widget_progress_bar_filled_color ?  res.data.show.widget_progress_bar_filled_color : "#f7f8f9",
        progressBarBackgroundColor: res.data.show.widget_progress_bar_background_color ?  res.data.show.widget_progress_bar_background_color : "#8A8175",
        playlistBackgroundColor: res.data.show.widget_playlist_background_color ?  res.data.show.widget_playlist_background_color : "#30343c",
        playlistTextColor: res.data.show.widget_playlist_text_color ?  res.data.show.widget_playlist_text_color : "#f7f8f9",
        chapterBackgroundColor: res.data.show.widget_chapter_background_color ?  res.data.show.widget_chapter_background_color : "#30343c",
        chapterTextColor:  res.data.show.widget_chapter_text_color ?  res.data.show.widget_chapter_text_color : "#f7f8f9"
      }
      setPlayerConfigs(configs)

    })
    .catch((err) => {
      console.log(err);
    })
  }, [showId, id])

  if(audiopost.id) {
    return (
      <>
        <WidgetPlayerControl
          id={id}
          showId={showId}
          show={show}
          playerControlSquare={true}
          audiopostData={audiopost}
          menuItems={menuItems}
        />
      </>
    )
  }
  return null;
}

export default SingleWidgetPlayer