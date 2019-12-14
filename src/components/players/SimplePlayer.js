import React from "react";
import ReactPlayer from 'react-player'

const SimplePlayer = ({name, url}) => {
  if(url) {
    return (
      <>
        <span className="text-muted">{name}</span>
        <ReactPlayer url={url} 
          width='0%'
          height='0%'
        />
      </>
    )
  }
  return null;
}

export default SimplePlayer;