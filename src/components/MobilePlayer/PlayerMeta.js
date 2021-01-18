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
  const [, toggleModalSet] = useAtom(toggleModal);

  if(podcast && player && podcast.name && player.name) {
    return (
      <div className="player-meta">
        <div className="player-meta-title">{podcast.name}</div>
        <div className="player-meta-artwork">
          <img src={podcast.artwork_url} name="podcast artwork" style={{width: 200, height: 200}}/>
        </div>        
        <div className="player-meta-subtitle">{player.name}</div>
        <div className="menu">
          <div className="btn btn-primary btn-sm" onClick={toggleModalSet}>
            <i className="fe fe-menu"></i>  Episodes
          </div>
        </div>
      </div>
    )
  }
  
  return null;
}

export default PlayerMeta;