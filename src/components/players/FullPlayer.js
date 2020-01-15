import React, {useContext} from "react";
import moment from 'moment'
import MinimizePlayerButton from './MinimizePlayerButton'
import WidgetPlayerControl from './WidgetPlayerControl'
import WidgetPlayerMoreInfo from './WidgetPlayerMoreInfo'


var momentDurationFormatSetup = require("moment-duration-format");

const FullPlayer = ({
  minimize, audio_date, 
  artwork, name, description, url, duration, 
  playedSeconds, played, playing, handleDuration, 
  handleProgress, handlPlayPauseClick, handleSliderChange, handleSeekMouseDown, 
  handleSeekMouseUp, handlePlayerRef, handleMinimizePlayer, progressBarIdName,
  section, handleSectionChange, embedUrl, shareUrl,shareOnFacebook, shareOnTwitter
}) => {
  
  const date = moment(audio_date).format('YYYY-MM-DD');
  const embedCode = `<iframe src='${embedUrl}' width='100%' height='180' frameborder='0' scrolling='no' seamless='true' style='width:100%; height:180px;'></iframe>`
  
  return (
    <div className="widget-player-container dark-html-widget-player">
      <section className="widget-player-app">
        <div className="artwork">
          <img src={artwork ? artwork : "http://download.randgad.com/images/RandGadArt.jpg"} />
        </div>
        <div className="main">
          <WidgetPlayerControl
            date={date} name={name} playing={playing} handlPlayPauseClick={handlPlayPauseClick}
            progressBarIdName={progressBarIdName} playedSeconds={playedSeconds} duration={duration}
            handleSeekMouseDown={handleSeekMouseDown} handleSeekMouseUp={handleSeekMouseUp} 
            handleSliderChange={handleSliderChange} section={section}
            handleSectionChange={handleSectionChange}            
          />
          <WidgetPlayerMoreInfo section={section === 'subscribe'} title='Subscribe' />
          <WidgetPlayerMoreInfo section={section === 'share'} 
            title='Share' 
            shareInputs={[{'label':"Embed", 'url': embedCode}, {'label':"Share", 'url':shareUrl}]}
            shareIconWithLabels={[{'label': "Facebook", url: shareOnFacebook, iconName:"fe fe-facebook"}, {'label': "Twitter", url: shareOnTwitter, iconName:"fe fe-twitter"}]}
            />            
          <WidgetPlayerMoreInfo section={section === 'more_info'} title={name} description={description}/>
        </div>       
        <div className="minimize-button">
          <MinimizePlayerButton handleMinimizePlayer={handleMinimizePlayer} handleSectionChange={handleSectionChange} section={section}/>
        </div>
      </section>
    </div>    
  )
}

export default FullPlayer;