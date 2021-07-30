import React from "react";
import {getHHMMSSFromSeconds} from '../libs'

const PlayerChapters = ({chapters, handleChapterClick}) => {
  if(chapters && chapters.length > 0) {
    return (
      <div className="widget-playlist"> 
        <div className="playlist-header">
          <div>Chapters</div>
        </div>       
        <div className="playlist-items">          
          {
            chapters.map((chapter, idx) => {
              return (
                <div 
                  key={(idx+1).toString()}
                  className="widget-playlist-item" 
                  onClick={() => {
                    handleChapterClick(chapter.startTime)
                  }}
                >
                  <div className="title">{chapter.title}</div>
                  <div className="duration">{getHHMMSSFromSeconds(chapter.startTime)}</div>
                </div>
              )
            })
          }

        </div>
      </div>
      
    )
  }

  return null;
}

export default PlayerChapters;