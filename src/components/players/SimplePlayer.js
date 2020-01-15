import React, {useContext} from "react";
import {Context as PlayerContext} from '../../context/PlayerContext'
import ReactPlayer from 'react-player'
import MinimizePlayer from './MinimizePlayer'
import FullPlayer from './FullPlayer'

const SimplePlayer = ({minimize, audio_date, artwork, name, description, url, duration, playedSeconds, played, playing, handleDuration, handleProgress, handlPlayPauseClick, handleSliderChange, handleSeekMouseDown, handleSeekMouseUp, handlePlayerRef, handleMinimizePlayer, section, updateSection, embedUrl, shareUrl}) => {

  const {state} = useContext(PlayerContext);

  if(url) {    
    return (    
      <>
        {
          minimize ? <MinimizePlayer handleMinimizePlayer ={handleMinimizePlayer} valuenow={playedSeconds} maxvalue={duration}/> : 
          <FullPlayer progressBarIdName="footer-player-progressbar" minimize={minimize} audio_date={audio_date} 
            artwork={artwork} description={description} name={name} url={url} duration={duration} 
            playedSeconds={playedSeconds} played={played} playing={playing} handleDuration={handleDuration} 
            handleProgress={handleProgress} handlPlayPauseClick={handlPlayPauseClick} handleSliderChange={handleSliderChange} 
            handleSeekMouseDown={handleSeekMouseDown} handleSeekMouseUp={handleSeekMouseUp} 
            handlePlayerRef={handlePlayerRef} handleMinimizePlayer={handleMinimizePlayer} 
            section={section} handleSectionChange={updateSection}
            embedUrl={embedUrl} shareUrl={shareUrl}
            shareOnFacebook={state.shareOnFacebook}
            shareOnTwitter={state.shareOnTwitter}
          />
        }      
        <ReactPlayer url={url}
          className='react-player'
          width='0%'
          height='0%'
          ref={handlePlayerRef}
          onDuration={handleDuration}
          onProgress={handleProgress}
          playing={playing}
        />
      </>
    )
  }
  return null;
}

export default SimplePlayer;