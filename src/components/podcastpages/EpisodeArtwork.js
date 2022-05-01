import React from "react";

const EpisodeArtwork = ({artwork, name}) => {
  if(artwork) {
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <img className="figure-img img-fluid rounded lift lift-lg" src={artwork} alt={`${name} artwork`}/>
        </div>
      </div>      
    )     
  }
  return null
}

export default EpisodeArtwork;