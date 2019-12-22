import React from "react";

const MinimizePlayerButton = ({handleMinimizePlayer}) => {
  if(handleMinimizePlayer) {
    return (
      <div onClick={handleMinimizePlayer}>
        <svg className="bi bi-dash" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M5.5 10a.5.5 0 01.5-.5h8a.5.5 0 010 1H6a.5.5 0 01-.5-.5z" clipRule="evenodd"></path>
        </svg>
      </div>
    )
  }
  return null;
}

export default MinimizePlayerButton;