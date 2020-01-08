import React, {useEffect} from 'react';
import Plyr from 'plyr';

const VideoPlayer = ({src, provider}) => {

  useEffect(() => {
    const player = new Plyr("#player");
    player.source = {
      type: 'video',
      sources: [
        {
          src,
          provider,
        }
      ],
      youtube: {
        noCookie: false, rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1
      }
    }
  }, [])

  return (
    <video id="player"></video>
  )
}

export default VideoPlayer;