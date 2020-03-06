import React from "react";

const WidgetPlaylistItem = ({name, id, duration,audioDate, selectedId, handleClicked}) => {
  const divClassName = 'widget-playlist-item '  + (selectedId === id ? 'selected-item' : "")
  return (
    <div className={divClassName} onClick={() => {
      handleClicked(id)
    }}>
      <div className="title">{name}</div>
      <div className="duration">{duration}</div>
    </div>
  )
}

export default WidgetPlaylistItem;