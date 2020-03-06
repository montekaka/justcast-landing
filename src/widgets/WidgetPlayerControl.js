import React, {useEffect, useState} from "react";
import WidgetPlayer from './../components/players/WidgetPlayer'

const initState = {
  id: "",
  name: "",
  audio_date: "",
  url: "",
  description: "",
  artwork: "",
  hide: true,
  playing: false,
  duration: 0,
  loaded: 0, // in percentage
  loadedSeconds: 0,
  played: 0, // in percentage
  playedSeconds: 0,
  seeking: false,
  minimize: false,  
  shareOnFacebook: "",
  shareOnTwitter: ""  
}

const WidgetPlayerControl = ({playerControlSquare, id, showId, show, audiopostData, autoplay}) => {
  let reactPlayer = null;
  const embedUrl = `${process.env.REACT_APP_BASE_PATH}/widget/${showId}/audioposts/${id}`
  const shareUrl = `${process.env.REACT_APP_BASE_PATH}/shows/${showId}/audioposts/${id}`    
  const [audiopost, setAudiopost] = useState(initState);
  const [section, setSection] = useState('control') //[control, subscribe, share, more_info]

  const toggleSeeking = () => {
    setAudiopost({...audiopost, seeking: !audiopost.seeking});
  }

  const playPause = () => {
    setAudiopost({...audiopost, playing: !audiopost.playing})
  }

  const handleDuration = (duration) => {
    setAudiopost({...audiopost, duration: duration})
  }

  const handleProgress = (progress) => {  
    if(audiopost.duration) {
      setAudiopost({...audiopost, ...progress})
    }    
  }

  const handleSliderChange = (event) => {
    setAudiopost({...audiopost, playedSeconds: parseFloat(event.target.value)});
  }

  const handleSeekMouseUp = (e) => {
    toggleSeeking()
    reactPlayer.seekTo(audiopost.playedSeconds);
  }

  const handleSeekMouseDown = (event) => {    
    toggleSeeking()
  }  

  const handlePlayerRef = (player) => {
    if(reactPlayer === null) {
      reactPlayer = player;
    }
  }

  useEffect(() => {
    if(audiopostData.id && show.id) {
      setAudiopost({
        ...audiopost, 
        id: audiopostData.id,
        name: audiopostData.name,
        description: audiopostData.description,
        audio_date: audiopostData.audio_date,
        url: audiopostData.url,
        artwork: show.artwork_url_256,
        shareOnFacebook: audiopostData.share_on_facebook,
        shareOnTwitter: audiopostData.share_on_twitter,
        playing: autoplay ? autoplay : false
      })      
    }
  }, [show.id, audiopostData.id])  

  if(audiopost.id && show) {
    return (
      <>
        <WidgetPlayer
          playerControlSquare={playerControlSquare}
          progressBarIdName={id}
          audio_date={audiopost.audio_date}
          artwork={audiopost.artwork}
          url={audiopost.url}
          embedUrl={embedUrl}
          shareUrl={shareUrl}
          name={audiopost.name}
          description={audiopost.description}
          playing={audiopost.playing}
          played={audiopost.played}
          playedSeconds={audiopost.playedSeconds}
          duration={audiopost.duration}
          handleDuration={handleDuration} 
          handleProgress={handleProgress}
          handlPlayPauseClick={playPause}
          handleSeekMouseUp={handleSeekMouseUp}
          handleSeekMouseDown={handleSeekMouseDown}
          handleSliderChange={handleSliderChange}
          handlePlayerRef={handlePlayerRef}
          minimize={audiopost.minimize}
          section={section}
          handleSectionChange={setSection}
          shareOnFacebook={audiopost.shareOnFacebook}
          shareOnTwitter={audiopost.shareOnTwitter}
          apple_podcast={show.apple_podcast}
          google_podcast={show.google_podcast}
          overcast={show.overcast}
          spotify={show.spotify}
          pocket_casts={show.pocket_casts}
          breaker={show.breaker}
          castro={show.castro}
          radio_public={show.radio_public}
          castbox={show.castbox}
          tune_in={show.tune_in}
          stitcher={show.stitcher}
          rssFeed={show.rss_feed}
          facebook_page={show.facebook_page}
          twitter_handle={show.twitter_handle}      
        />
      </>
    )
  }
  return null;
}

export default WidgetPlayerControl