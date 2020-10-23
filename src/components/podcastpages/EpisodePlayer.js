import React, {useContext, useState} from "react";
import {Context as PlayerContext} from '../../context/PlayerContext'
import {Context as PublicPodcastContext} from '../../context/PublicPodcastContext'
import WidgetPlayerControl from '../../widgets/WidgetPlayerControl';

const EpisodePlayer = (props) => {
  
  const { audiopostId, audiopost} = props;
  const { state } = useContext(PublicPodcastContext);
  const {id, hide_widget_subscribe, hide_widget_share} = state;

  const menus = [];
  if(hide_widget_subscribe !== true) {
    menus.push({key: 'subscribe', label: 'subscribe'})
  }
  if(hide_widget_share !== true) {
    menus.push({key: 'share', label: 'share'})
  }
  // menus.push({key: 'more_info', label: 'more info'})
  // setMenuItems(menus)

  return (
    <WidgetPlayerControl
      id={audiopostId}
      showId={id}
      show={state}
      playerControlSquare={true}
      audiopostData={audiopost}
      menuItems={menus}
    />
  )
}


export default EpisodePlayer