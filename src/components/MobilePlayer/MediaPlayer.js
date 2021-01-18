import React, {useRef, useEffect} from "react";
import { useAtom } from 'jotai';
import ReactPlayer from 'react-player'
import { playerAtom, addPlayerRefAtom, updatePlayerStatus } from '../../jotai'
import PlayerControls from './PlayerControls'

const MediaPlayer = () => {
  const [player] = useAtom(playerAtom);
  const [, playerRefSet] = useAtom(addPlayerRefAtom);
  const [, playerStatusSet] = useAtom(updatePlayerStatus);
  
  // const playerRef = useRef(null);

  // useEffect(() => {
  //   if(playerRef && playerRef.current === null) {
  //     // console.log(playerRef.current)
  //     playerRefSet({playerRef})
  //   }
  // }, [playerRef])
  
  if(player && player.audio_url) {
    // console.log(player)
    return (
      <>
        <PlayerControls/>
        <ReactPlayer url={player.audio_url}
          // ref={playerRef}
          className='justcast-mobile-player'
          // controls={true}
          width='0%'
          height='0%'
          // ref={handlePlayerRef}
          onDuration={(res) => {
            const durationSeconds = res;
            playerStatusSet({durationSeconds})
          }}
          onProgress={(res) => {
            const playedSeconds = res.playedSeconds;
            playerStatusSet({playedSeconds})
          }}
          onReady={(res) => {
            if(res) {
              playerStatusSet({onReady: true, playerRef: res})
            }
          }}
          playing={player.playing}
        />
      </>
    )

  }

  return null;
}

export default MediaPlayer;