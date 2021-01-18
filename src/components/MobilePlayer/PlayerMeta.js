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
      <>
        <div className="music-top-icon">
        <p>Playing Now</p>
          <div className="music-bar">
            <i className="fe fe-menu"/>
          </div>
        </div>
        <div className="music-album-photo">
          <img src={podcast.artwork_url} name="podcast artwork"/>
        </div>
        <div className="music-detail">
          <h2>{player.name}</h2>
          <p>{podcast.name}</p>
        </div>
        {/* <div className="menu">
          <div className="btn btn-primary btn-sm" onClick={toggleModalSet}>
            <i className="fe fe-menu"></i>  Episodes
          </div>
        </div> */}
      </>
    )
  }
  
  return null;
}

export default PlayerMeta;