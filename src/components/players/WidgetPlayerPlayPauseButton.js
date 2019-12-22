import React from "react";

const WidgetPlayerPlayPauseButton = ({playing, handlPlayPauseClick}) => {
  if(playing === true) {
    return (
      <div className="play-control-button btn btn-primary btn-rounded-circle btn-sm"
        onClick={handlPlayPauseClick}
      >
        <i className="fe fe-pause"></i>
      </div> 
    )
  }

  return (
    <div className="play-control-button btn btn-primary btn-rounded-circle btn-sm" 
      onClick={handlPlayPauseClick}
    >
      <i className="fe fe-play"></i>
    </div>
  )
}

export default WidgetPlayerPlayPauseButton;