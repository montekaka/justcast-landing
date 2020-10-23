import React, {useContext, useEffect, useRef} from "react";
import {Context as PlayerContext} from '../../context/PlayerContext'
import {Context as PodcastContext} from '../../context/PodcastContext'
import ReactPlayer from 'react-player'
import MinimizePlayer from './MinimizePlayer'
import FullPlayer from './FullPlayer'
// menuItems={[{key: 'subscribe', label:'subscribe'},{key: 'share', label: 'share'},{key: 'more_info', label: 'more info'}]}
const SimplePlayer = ({minimize, audio_date, artwork, name, description, url, duration, playedSeconds, played, playing, handleDuration, handleProgress, handlPlayPauseClick, handleSliderChange, handleSeekMouseDown, handleSeekMouseUp, handlePlayerRef, handleMinimizePlayer, section, updateSection, embedUrl, shareUrl, menuItems}) => {

  const {state, updateReactPlayerRef} = useContext(PlayerContext);
  const podcastConext = useContext(PodcastContext);
  const reactPlayerRef = useRef(null);

  useEffect(() => {
    if(reactPlayerRef) {
      updateReactPlayerRef(reactPlayerRef)
    }    
  }, [reactPlayerRef])

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
            facebook_page={podcastConext.state.show.facebook_page}
            twitter_handle={podcastConext.state.show.twitter_handle}
            apple_podcast={podcastConext.state.show.apple_podcast}
            google_podcast={podcastConext.state.show.google_podcast}
            overcast={podcastConext.state.show.overcast}
            spotify={podcastConext.state.show.spotify}
            pocket_casts={podcastConext.state.show.pocket_casts}
            breaker={podcastConext.state.show.breaker}
            castro={podcastConext.state.show.castro}
            radio_public={podcastConext.state.show.radio_public}
            castbox={podcastConext.state.show.castbox}
            tune_in={podcastConext.state.show.tune_in}
            stitcher={podcastConext.state.show.stitcher}
            rssFeed={podcastConext.state.show.rss_feed}
            menuItems={menuItems}
          />
        }      
        <ReactPlayer url={url}
          className='react-player'
          width='0%'
          height='0%'
          volume={0.2}
          ref={reactPlayerRef}
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