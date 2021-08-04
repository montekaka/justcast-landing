import React, {useRef, useEffect} from "react";
import { useAtom } from 'jotai';
import ReactPlayer from 'react-player'
import { 
  playerAtom, 
  // addPlayerRefAtom, 
  updatePlayerStatus, 
  podcastAtom, 
  changeEpisodeAtom, 
  episodesAtom,
  updatePlayingEpisodeAtom
} from '../../jotai'
import PlayerControls from './PlayerControls'

const MediaPlayer = () => {
  const [player] = useAtom(playerAtom);
  // const [, playerRefSet] = useAtom(addPlayerRefAtom);
  const [, playerStatusSet] = useAtom(updatePlayerStatus);
  const { seeking } = player;

  const [podcast] = useAtom(podcastAtom);
  const [episodes] = useAtom(episodesAtom)
  const [, changeEpisodeSet] = useAtom(changeEpisodeAtom);
  const [, updatePlayingEpisode] = useAtom(updatePlayingEpisodeAtom)
  const {total_episodes, current_episode_idx} = podcast

  const playNext = () => {        
    if(current_episode_idx + 1 < total_episodes) {
      const nextId = current_episode_idx + 1;
      const {id, name, audio_date, artwork_url, audio_url} = episodes[nextId];
      changeEpisodeSet({
        id, 
        name, 
        audio_date, 
        artwork_url, 
        audio_url, 
        durationSeconds: 0,
        playedSeconds: 0,
        playing: true,
        openModal: false
      })   
      updatePlayingEpisode(nextId)
    } else {
      // reach the end
      // stop the player
      playerStatusSet({playing: false})
    }
  }
  // const playerRef = useRef(null);

  // useEffect(() => {
  //   if(playerRef && playerRef.current === null) {
  //     // console.log(playerRef.current)
  //     playerRefSet({playerRef})
  //   }
  // }, [playerRef])
  
  //if(player && player.audio_url) {
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
            if(!seeking) {
              const playedSeconds = res.playedSeconds;            
              playerStatusSet({playedSeconds})
            }
          }}
          onReady={(res) => {
            if(res) {
              playerStatusSet({onReady: true, playerRef: res})
            }
          }}
          playing={player.playing}
          onEnded={(res) => {
            playNext()
          }}
          onError={(res) =>{
            playNext()
          }}
        />
      </>
    )

  //}

  // return null;
}

export default MediaPlayer;