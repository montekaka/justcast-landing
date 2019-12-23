import React, {useContext} from "react";
import {Context as PlayerContext} from '../context/PlayerContext'

const ButtonIcon = ({playing, playingId, id}) => {
  if(playing && playingId === id) {
    return <i className="fe fe-pause"></i>
  }
  return <i className="fe fe-play"></i>
}

const PlayPauseButton = ({
  audio_date,
  id, // currently playing
  url,
  name,
  description,
  artwork,
  embedUrl,
  shareUrl  
}) => {
  return (
    <SimplePlayerPlayPauseButton audio_date={audio_date} id={id} url={url} name={name} 
    description={description} artwork={artwork} embedUrl={embedUrl} shareUrl={shareUrl}/>
  )
}

const SimplePlayerPlayPauseButton = ({
  audio_date,
  id,
  url,
  name,
  description,
  artwork,
  embedUrl,
  shareUrl
}) => {
  const {state, add, playPause} = useContext(PlayerContext);

  const handlePlayClick = () => {
    if(!state.id) {
      // new
      add({audio_date,id,url,name,description,artwork, embedUrl, shareUrl})
    } else {
      if(state.id !== id) {
        add({audio_date,id,url,name,description,artwork, embedUrl, shareUrl});
      } else {
        playPause();
      }
    }
  }

  return (
    <div className="btn btn-primary btn-rounded-circle btn" onClick={handlePlayClick}>
      <ButtonIcon playing={state.playing} playingId={state.id} id={id}/>
    </div>    
  )
}
export default PlayPauseButton;