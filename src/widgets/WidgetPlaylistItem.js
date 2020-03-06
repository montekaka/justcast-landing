import React from "react";

const WidgetPlaylistItem = ({name, id, duration,audioDate, selectedId, handleClicked}) => {
  return (
    <div className="widget-playlist-item" onClick={() => {
      handleClicked(id)
    }}>
      {name}
    </div>
  )
}

export default WidgetPlaylistItem;