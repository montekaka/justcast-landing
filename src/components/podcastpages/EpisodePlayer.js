import React, {useContext, useEffect} from "react";
import {Context as PlayerContext} from '../../context/PlayerContext'
import {Context as PublicPodcastContext} from '../../context/PublicPodcastContext'
import FullPlayer from '../players/FullPlayer'


// minimize, audio_date, 
// artwork, name, description, 
// url, duration, playedSeconds, 
// played, playing, handleDuration, 
// handleProgress, handlPlayPauseClick, 
// handleSliderChange, handleSeekMouseDown, 
// handleSeekMouseUp, handlePlayerRef, 
// handleMinimizePlayer, section, updateSection, 
// embedUrl, shareUrl, menuItems

const EpisodePlayer = (props) => {
  const {state, playPause, updateDuration, updateProgress, updateSection,
    toggleSeeking, handleSeekChange, toggleMinimizePlayer} = useContext(PlayerContext);
  
  const { audiopostId, audiopost} = props;
  // console.log(audiopost)
  // console.log(audiopost.url)

  const publicPodcastContext = useContext(PublicPodcastContext);
  const {hide_widget_subscribe, hide_widget_share, artwork_url} = publicPodcastContext.state;

  const menus = [];
  if(hide_widget_subscribe !== true) {
    menus.push({key: 'subscribe', label: 'subscribe'})
  }
  if(hide_widget_share !== true) {
    menus.push({key: 'share', label: 'share'})
  }
  // menus.push({key: 'more_info', label: 'more info'})
  // setMenuItems(menus)

  const {section, duration, playedSeconds, played, playing, reactPlayer} = state;

  const handleDuration = (duration) => {
    updateDuration(duration)
  }

  const handleProgress = (progress) => {
    updateProgress(progress)
  }

  const handleSliderChange = (event) => {
    handleSeekChange(parseFloat(event.target.value)); 
  }

  const handleSeekMouseUp = (e) => {
    toggleSeeking()    
    reactPlayer.seekTo(state.playedSeconds);
  }

  const handleSeekMouseDown = (event) => {    
    toggleSeeking()
  }  

  return (
    <FullPlayer 
      progressBarIdName="episode-player" 
      audio_date={audiopost.audio_date} 
      artwork={artwork_url} 
      description={audiopost.description} 
      name={audiopost.name} 
      url={audiopost.url} 
      duration={duration} 
      playedSeconds={playedSeconds} 
      played={played} 
      playing={playing} 
      handleDuration={handleDuration} 
      handleProgress={handleProgress} 
      handlPlayPauseClick={playPause} 
      handleSliderChange={handleSliderChange} 
      handleSeekMouseDown={handleSeekMouseDown} 
      handleSeekMouseUp={handleSeekMouseUp}       
      handleMinimizePlayer={toggleMinimizePlayer} 
      section={section} 
      handleSectionChange={updateSection}
      embedUrl={`${process.env.REACT_APP_BASE_PATH}/widget/${audiopost.show_id}/audioposts/${audiopost.id}`}
      shareUrl={`${process.env.REACT_APP_BASE_PATH}/shows/${audiopost.show_id}/audioposts/${audiopost.id}`}          
      shareOnFacebook={audiopost.share_on_facebook}
      shareOnTwitter={audiopost.share_on_twitter}
      facebook_page={publicPodcastContext.state.facebook_page}
      twitter_handle={publicPodcastContext.state.twitter_handle}
      apple_podcast={publicPodcastContext.state.apple_podcast}
      google_podcast={publicPodcastContext.state.google_podcast}
      overcast={publicPodcastContext.state.overcast}
      spotify={publicPodcastContext.state.spotify}
      pocket_casts={publicPodcastContext.state.pocket_casts}
      breaker={publicPodcastContext.state.breaker}
      castro={publicPodcastContext.state.castro}
      radio_public={publicPodcastContext.state.radio_public}
      castbox={publicPodcastContext.state.castbox}
      tune_in={publicPodcastContext.state.tune_in}
      stitcher={publicPodcastContext.state.stitcher}
      rssFeed={publicPodcastContext.state.rss_feed}
      menuItems={menus}
    />
  )
}


export default EpisodePlayer