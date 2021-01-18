import React from "react";
import { useAtom } from 'jotai';
import { 
    playerAtom,
    updatePlayerStatus
} from '../../jotai'
import PlayerProgress from './PlayerProgress'
// import add30s from '../../assets/img/waveform/add-30s.svg'
// import minus30s from '../../assets/img/waveform/minus-30s.svg'
// import playIcon from '../../assets/img/waveform/play-circle-regular.svg'
// import pauseIcon from '../../assets/img/waveform/pause-circle-regular.svg'

const PlayerControls = () => {
  const [player] = useAtom(playerAtom);
  const [, playerStatusSet] = useAtom(updatePlayerStatus);
  const {durationSeconds, playing} = player;

  const toggle = () => {
    // player.playerRef.
    const {playing} = player;
    playerStatusSet({playing: !playing})
  }

  const handleSeekTo = (delta) => {
    if(player && player.playerRef) {
      const currentTime = player.playerRef.getCurrentTime();
      const seekToTime = currentTime + delta;
      const sec = seekToTime > 0 ? Math.min(seekToTime, durationSeconds) : 0;
      player.playerRef.seekTo(sec, 'seconds');
    }
  }

  if(player && player.playerRef) {
    return (
      <>
        <PlayerProgress/>

        <div className="music-changer">
          <div className="prev" onClick={() => {
            handleSeekTo(-30)
          }}>
            <p>-30s</p>
          </div>
          <div className="pause" onClick={toggle}>
            {playing ? <i className="fe fe-pause"/> : <i className="fe fe-play"/>}
          </div>
          <div className="next" onClick={() => {
            handleSeekTo(30)
          }}>
            <p>+30s</p>
          </div>
        </div> 

        {/* <div className="mobile-player-buttons">
          <div onClick={() => {
            handleSeekTo(-30)
          }} className="">
            <img src={minus30s} width="40"/>
          </div>
          <div onClick={toggle} className="">
            {playing ? <img src={pauseIcon} width="80"/> : <img src={playIcon} width="80"/>}
          </div>
          <div onClick={() => {
            handleSeekTo(30)
          }} className="">
            <img src={add30s} width="40"/>
          </div>
        </div> */}
      </>
    )
  }
  return null;
}

export default PlayerControls;