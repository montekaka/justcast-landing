import React, {useEffect, useState} from "react";
import { Spinner } from 'reactstrap';
import ReactGA from 'react-ga';
import {NinjaPlayer} from 'react-podcast-ninja'
import justcastApi from '../api/justcast'
import WidgetPlayerControl from './WidgetPlayerControl';
import WidgetPlaylistItem from './WidgetPlaylistItem'

const WidgetPlaylist = (props) => {
  const id = props.match.params.id;
  const [show, setShow] = useState({});
  const [audioposts, setAudioposts] = useState([]);
  const [selectedAudiopost, setSelectedAudiopost] = useState({});
  const [autoplay, setAutoplay] = useState(false);
  const [menuItems, setMenuItems] = useState([])
  const [playerConfigs, setPlayerConfigs] = useState({});
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    const referer_url = document.referrer;
    justcastApi.get(`/v1/shows/${id}/audioposts?referer_url=${referer_url}`)
    .then((res) => {
      const showdata = res.data;
      setShow(showdata.show);
      setAudioposts(showdata.audioposts);
      setSelectedAudiopost(showdata.audioposts[0]);
      // setMenuItems([{key: 'subscribe', label: 'Subscribe'}, {key: 'share', label: 'share'}, {key: 'more_info', label: 'more info'}])
      const menus = [];
      if(showdata.show.hide_widget_subscribe !== true) {
        menus.push({key: 'subscribe', label: 'subscribe'})
      }
      if(showdata.show.hide_widget_share !== true) {
        menus.push({key: 'share', label: 'share'})
      }
      menus.push({key: 'more_info', label: 'more info'})
      setMenuItems(menus)  
      
      const googleAnalyticsId = res.data.show.google_analytics_id;
      
      if(googleAnalyticsId) {
        ReactGA.initialize(googleAnalyticsId);
        ReactGA.pageview(`/widget/${res.data.show.slug}/audioposts`)
      }   
      

      // ninja player variables
      const items = [];
      const feedArtwork = res.data.show.artwork_url;
      const podcastTitle = res.data.show.name;
      
      res.data.audioposts.forEach((item) => {
        let artworkUrl = feedArtwork;
        if(item.artwork_url) {
          artworkUrl = item.artwork_url;
        }

        const chaptersUrl = item.chapters_url
        // console.log(artworkUrl)
        items.push({
          title: item.name,
          description: item.description,
          podcastTitle: podcastTitle,
          artworkUrl: artworkUrl,
          pubDate: item.audio_date,
          link: item.single_page_url,
          audioUrl: item.url,
          chaptersUrl: chaptersUrl,
        })
      })
      
      setEpisodes(items);    
      
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
      console.log('this is not available')
    })
  }, [id])

  const handleAudiopostClicked = (selectedId) => {
    const audiopost = audioposts.filter(audiopost => audiopost.id === selectedId);
    if(audiopost.length > 0) {
      setSelectedAudiopost(audiopost[0]);
      setAutoplay(true);
    }
  }

  if(show.id) {
    return (
      <NinjaPlayer
        configs={playerConfigs}
        playerId={`${id}-playlist`}
        episodes={episodes}
      />  
    )  
  }

  // if(show.id) {
  //   return (
  //     <>
  //       <WidgetPlayerControl
  //         playerControlSquare={true}
  //         id={selectedAudiopost.id}
  //         showId={id}
  //         show={show}
  //         audiopostData={selectedAudiopost}
  //         autoplay={autoplay}
  //         menuItems={menuItems}
  //       />    
  //       <div className="widget-playlist">
  //         <div className="playlist-header">
  //           <div>{audioposts.length} LATEST EPISODES</div>
  //         </div>
  //         <div className="playlist-items">
  //           {
  //             audioposts.map((audiopost) => 
  //               <WidgetPlaylistItem 
  //                 key={audiopost.id.toString()} 
  //                 name={audiopost.name} 
  //                 id={audiopost.id} 
  //                 audioDate={audiopost.audio_date}
  //                 duration={audiopost.duration}
  //                 selectedId={selectedAudiopost.id}
  //                 handleClicked={handleAudiopostClicked}
  //               />            
  //             )
  //           }
  //         </div>
  //       </div>
  //     </>
  //   )
  // }
  return <Spinner color="primary" />
}

export default WidgetPlaylist