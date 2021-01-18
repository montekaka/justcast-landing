import React, {useState} from "react";
import moment from 'moment'
import { CustomInput, Progress } from 'reactstrap';
import { useAtom } from 'jotai';
import { playerAtom } from '../../jotai'

const PlayerProgress = () => {
  const [player] = useAtom(playerAtom);
  // const [, playerStatusSet] = useAtom(updatePlayerStatus);
  const [seekTo, setSeekTo] = useState(0);

  const {durationSeconds, playedSeconds} = player;

  const playedString = playedSeconds > 1 ? moment.duration(Math.floor(playedSeconds), "seconds").format() : "0:00"
  const durationString = durationSeconds > 1 ? moment.duration(Math.floor(durationSeconds), "seconds").format() : "0:00"
  
  // slider change
  // mouse down, then stop update played time from the player
  // change then update the played time
  // moues up update the seconds 

  const handleSliderChange = (event) => {
    setSeekTo(event.target.value);
  }

  const handleSeekMouseUp = () => {
    player.playerRef.seekTo(seekTo, 'seconds');
  }

  return (
    <>
      <div className="play-timeline">
        <div className="time">
          <span>{playedString}</span>
          <span>{durationString}</span>
        </div>
        <input 
          id="player-progressbar"
          className="timeline-bar" 
          type="range" 
          value={playedSeconds}
          min={0} 
          max={durationSeconds}
          step='any'
          onMouseUp={handleSeekMouseUp}
          onChange={handleSliderChange}
        />
      </div>
      {/* <div className="miscellaneous">
        <div className="player-progress-bar">
          <CustomInput
            id="player-progressbar" //"footer-player-progressbar"
            className="input-progress" 
            type="range" 
            value={playedSeconds}
            min={0}
            max={durationSeconds}
            step='any'
            // onMouseDown={handleSeekMouseDown}
            onMouseUp={handleSeekMouseUp}
            onChange={handleSliderChange}
          />
          <Progress max={durationSeconds} value={playedSeconds} />      
        </div>
      </div>       */}
    </>

  )
}

export default PlayerProgress;