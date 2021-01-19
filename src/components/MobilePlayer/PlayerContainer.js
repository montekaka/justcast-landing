import React from "react";
import PlayerMeta from './PlayerMeta';
import MediaPlayer from './MediaPlayer';
import PlaylistModal from './PlaylistModal';
import PlaylistTable from './PlaylistTable';
import Header from './Header';

const PlayerContainer = () => {

  return (
    <>
      <PlaylistModal/>
      <div className="mobile-music-player">  
        <Header/>    
        <PlayerMeta/>
        <MediaPlayer/>
        <PlaylistTable/>
      </div>     
    </>
  )
}

export default PlayerContainer;