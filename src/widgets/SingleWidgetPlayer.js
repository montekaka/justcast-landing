import React, {useEffect, useState} from "react";
import axios from 'axios'
import ReactGA from 'react-ga';
import justcastApi from '../api/justcast'
import WidgetPlayerControl from './WidgetPlayerControl';

const SingleWidgetPlayer = (props) => {
  const id = props.match.params.id;
  const showId = props.match.params.show_id;  
  const [audiopost, setAudiopost] = useState({});
  const [show, setShow] = useState({});
  const [menuItems, setMenuItems] = useState([])
  const [chaptersUrl, setChaptersUrl] = useState('');
  const [chapters, setChapters] = useState([]);

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

      if(data.chapters_url && data.chapters_url.length > 10) {
        setChaptersUrl(data.chapters_url)
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }, [showId, id])  

  useEffect(() => {
    if(chaptersUrl && chaptersUrl.length > 10) {
      axios.get(chaptersUrl)
      .then((res) => {
        if(res.data && res.data.chapters && res.data.chapters.length > 0) {
          setChapters(res.data.chapters);                      
        }
      })
      .catch((err) => {

      })
    }
  }, [chaptersUrl])

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
          chapters={chapters}
        />
      </>
    )
  }
  return null;
}

export default SingleWidgetPlayer