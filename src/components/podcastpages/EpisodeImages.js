import React  from "react";

const EpisodeImages = ({images}) => {
  if(images && images.length > 0) {
    return (
      <div className="card-columns">
        {
          images.map((image) => 
            <div className="card" key={image.id.toString()}>
              {
                image.subtitle || image.description ? 
                <>
                  <img className="card-img-top" src={image.image_url}/>
                  <div className="card-body">
                    <h5 className="card-title">{image.subtitle}</h5>
                    <p className="card-text">{image.description}</p>
                  </div>                  
                </> : <img className="card-img" src={image.image_url}/>
              }            
            </div>
          )
        }
      </div>
    )
  } else {
    return (
      <></>
    )
  }
  
}

export default EpisodeImages;