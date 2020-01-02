import React from "react";

const WidgetPlayerPlayPauseButton = ({playing, handlPlayPauseClick, loading}) => {
  if(loading) {
    return (
      <div className="play-control-button"> 
        <div className="spinner-border" role="loading">
          <span className="sr-only">Loading...</span>
        </div>  
      </div> 
    )
  } else {
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
}

export default WidgetPlayerPlayPauseButton;