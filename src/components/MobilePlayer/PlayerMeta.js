import React from "react";
import { useAtom } from 'jotai';
import { 
    podcastAtom,
    playerAtom,
    toggleModal
} from '../../jotai'

const PlayerMeta = () => {
  const [podcast] = useAtom(podcastAtom);
  const [player] = useAtom(playerAtom);

  if(podcast && player && podcast.name && player.name) {
    return (
      <div className="player-meta-data">
        <div className="music-album-photo">
          <img src={podcast.artwork_url} name="podcast artwork"/>
        </div>
        <div className="music-detail">
          <div className="title">{player.name}</div>
          <div className="subtitle">{podcast.name}</div>
        </div>
        {/* <div className="menu">
          <div className="btn btn-primary btn-sm" onClick={toggleModalSet}>
            <i className="fe fe-menu"></i>  Episodes
          </div>
        </div> */}
      </div>
    )
  }
  
  return null;
}

export default PlayerMeta;