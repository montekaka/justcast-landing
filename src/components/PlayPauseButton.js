import React, {useContext} from "react";
import {Context as PlayerContext} from '../context/PlayerContext'
import {Context as ThemeContext} from '../context/ThemeContext'

const ButtonIcon = ({playing, playingId, id, iconColor}) => {
  if(playing && playingId === id) {
    return <i className="fe fe-pause" style={{color: iconColor}}></i>
  }
  return <i className="fe fe-play" style={{color: iconColor}}></i>
}

const PlayPauseButton = ({
  audio_date,
  id, // currently playing
  url,
  name,
  description,
  artwork,
  embedUrl,
  shareUrl,
  shareOnFacebook,
  shareOnTwitter,
  buttonBackgroundColor
}) => {
  return (
    <SimplePlayerPlayPauseButton audio_date={audio_date} 
    buttonBackgroundColor={buttonBackgroundColor}
    id={id} 
    url={url} 
    name={name} 
    description={description} 
    artwork={artwork} 
    embedUrl={embedUrl} 
    shareUrl={shareUrl} 
    shareOnFacebook={shareOnFacebook} 
    shareOnTwitter={shareOnTwitter}/>
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
  shareUrl,
  shareOnFacebook,
  shareOnTwitter
}) => {
  const {state, add, playPause} = useContext(PlayerContext);
  const themeState = useContext(ThemeContext);
  const { buttonTextColor, buttonColor} = themeState.state;

  const handlePlayClick = () => {
    if(!state.id) {
      // new
      add({audio_date,id,url,name,description,artwork, embedUrl, shareUrl, shareOnFacebook, shareOnTwitter})
    } else {
      if(state.id !== id) {
        add({audio_date,id,url,name,description,artwork, embedUrl, shareUrl, shareOnFacebook, shareOnTwitter});
      } else {
        playPause();
      }
    }
  }

  return (
    <div className="btn btn-rounded-circle btn" onClick={handlePlayClick} style={{backgroundColor: buttonColor}}>
      <ButtonIcon playing={state.playing} playingId={state.id} id={id} iconColor={buttonTextColor}/>
    </div>    
  )
}
export default PlayPauseButton;