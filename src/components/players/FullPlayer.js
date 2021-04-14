import React, {useContext} from "react";
import moment from 'moment'
import MinimizePlayerButton from './MinimizePlayerButton'
import WidgetPlayerControl from './WidgetPlayerControl'
import WidgetPlayerMoreInfo from './WidgetPlayerMoreInfo'
import applePodcastSrc from './../../assets/img/icons/podcasts/apple_podcast.svg'
import googlePodcastSrc from './../../assets/img/icons/podcasts/google_podcast.svg'
import overcastSrc from './../../assets/img/icons/podcasts/overcast.svg'
import spotifySrc from './../../assets/img/icons/podcasts/spotify.svg'
import pocketCastsSrc from './../../assets/img/icons/podcasts/pocketcast.svg'
import breakerSrc from './../../assets/img/icons/podcasts/breaker.svg'
import castroSrc from './../../assets/img/icons/podcasts/castro.svg'
import radioPublicSrc from './../../assets/img/icons/podcasts/radiopublic.svg'
import castboxSrc from './../../assets/img/icons/podcasts/castbox.svg'
import tuneinSrc from './../../assets/img/icons/podcasts/tunein.svg'
import stitcherSrc from './../../assets/img/icons/podcasts/stitcher.svg'

var momentDurationFormatSetup = require("moment-duration-format");

const FullPlayer = ({
  minimize, audio_date, 
  artwork, name, description, url, duration, 
  playedSeconds, played, playing, handleDuration, 
  handleProgress, handlPlayPauseClick, handleSliderChange, handleSeekMouseDown, 
  handleSeekMouseUp, handlePlayerRef, handleMinimizePlayer, progressBarIdName,
  section, handleSectionChange, embedUrl, shareUrl,shareOnFacebook, shareOnTwitter,
  apple_podcast,
  google_podcast,
  overcast,
  spotify,
  pocket_casts,
  breaker,
  castro,
  radio_public,
  castbox,
  tune_in,
  stitcher,
  rssFeed,
  facebook_page,
  twitter_handle,
  playerControlSquare,
  hideWidgetPubDate,
  volume,
  menuItems,
  volumBinClicked,
  increaseVolumeClicked,
  decreaseVolumeClicked
}) => {
  const date = hideWidgetPubDate === true ? '' : moment(audio_date).format('YYYY-MM-DD');
  const embedCode = `<iframe src='${embedUrl}' width='100%' height='180' frameborder='0' scrolling='no' seamless='true' style='width:100%; height:180px;'></iframe>`
  const podcastApps = [
    apple_podcast ? {label: "Apple Podcasts", iconName: applePodcastSrc, url: apple_podcast, buttonImg: true} : null,
    google_podcast ? {label: "Google Podcasts", iconName: googlePodcastSrc, url: google_podcast, buttonImg: true} : null,
    overcast ? {label: "Overcast", iconName: overcastSrc, url: overcast, buttonImg: true} : null,
    spotify ? {label: "Spotify", iconName: spotifySrc, url: spotify, buttonImg: true} : null,
    pocket_casts ? {label: "Pocket Casts", iconName: pocketCastsSrc, url: pocket_casts, buttonImg: true} : null,
    breaker ? {label: "Breaker", iconName: breakerSrc, url: breaker, buttonImg: true} : null,
    castro ? {label: "Castro", iconName: castroSrc, url: castro, buttonImg: true} : null,
    radio_public ? {label: "Radio Public", iconName: radioPublicSrc, url: radio_public, buttonImg: true} : null,
    castbox ? {label: "Castbo", iconName: castboxSrc, url: castbox, buttonImg: true} : null,
    tune_in ? {label: "Tune In", iconName: tuneinSrc, url: tune_in, buttonImg: true} : null,
    stitcher ? {label: "Stitcher", iconName: stitcherSrc, url: stitcher, buttonImg: true} : null,
  ]

  const playerControlClass = playerControlSquare ? 'widget-player-app' : 'widget-player-app widget-player-app-rounded';
  
  return (
    <div className='widget-player-container dark-html-widget-player'>
      <section className={playerControlClass}>
        <div className="artwork">          
          <div style={{
            width: "120px",
            height: "120px",
            borderRadius: "5px",
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundColor: 'white',
            // opacity: "0.2",
            backgroundImage: `url(${artwork ? encodeURI(artwork) : "https://justcast.herokuapp.com/images/default_thumb_show_image.png"})`
            // backgroundImage: `url(${encodeURI('https://justcast.sfo2.digitaloceanspaces.com/js-production/1613978336079-GPS Logo Podcast_256.png')})`
          }}>                 
          </div>
        </div>
        <div className="main">
          <WidgetPlayerControl
            date={date} name={name} playing={playing} handlPlayPauseClick={handlPlayPauseClick}
            progressBarIdName={progressBarIdName} playedSeconds={playedSeconds} duration={duration}
            handleSeekMouseDown={handleSeekMouseDown} handleSeekMouseUp={handleSeekMouseUp} 
            handleSliderChange={handleSliderChange} section={section}
            handleSectionChange={handleSectionChange}
            menuItems={menuItems}
            volume={volume}
            volumBinClicked={volumBinClicked}
            increaseVolumeClicked={increaseVolumeClicked}
            decreaseVolumeClicked={decreaseVolumeClicked}            
          />
          <WidgetPlayerMoreInfo section={section === 'subscribe'} 
            title='Subscribe' 
            shareInputs={[{'label':"RSS", 'url': rssFeed}]}
            shareIconWithLabels={podcastApps}
          />
          <WidgetPlayerMoreInfo section={section === 'share'} 
            title='Share' 
            shareInputs={[{'label':"Embed", 'url': embedCode}, {'label':"Share", 'url':shareUrl}]}
            shareIconWithLabels={[{'label': "Facebook", url: shareOnFacebook, iconName:"fe fe-facebook"}, {'label': "Twitter", url: shareOnTwitter, iconName:"fe fe-twitter"}]}
            />            
          <WidgetPlayerMoreInfo 
            section={section === 'more_info'} 
            title={name} 
            description={description}
            shareIconWithLabels={[{'label': "Facebook", url: facebook_page, iconName:"fe fe-facebook"}, {'label': "Twitter", url: twitter_handle, iconName:"fe fe-twitter"}]}
          />
        </div>       
        <div className="minimize-button">
          <MinimizePlayerButton handleMinimizePlayer={handleMinimizePlayer} handleSectionChange={handleSectionChange} section={section}/>
        </div>
      </section>
    </div>    
  )
}

export default FullPlayer;