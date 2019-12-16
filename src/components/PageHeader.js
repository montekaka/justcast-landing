import React from "react";
import moment from 'moment';
import PlayPauseButton from './PlayPauseButton';

const sectionCSS = {
  backgroundImage: `url("https://source.unsplash.com/c1ZN57GfDB0/1600x900")`
}

const PageHeader = ({headerTitle, artwork, name, id, url, description, audio_date, handlePlay}) => {
  const date = moment(audio_date).format('YYYY-MM-DD');

  const handlePlayClick = () => {
    handlePlay(id);
  }  

  return (
    <section data-jarallax
      className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover jarallax"
      data-speed=".8"
      style={sectionCSS}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h1 className="text-center text-md-left display-2 text-white">
              {headerTitle}
            </h1>

            <p className="text-center text-md-left text-white-75 mb-6">
              {name}
            </p>            

            <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
              {date}
            </p>
            <PlayPauseButton audio_date={audio_date} id={id} url={url} name={name} artwork={artwork} description={description}/>
          </div>
        </div>        
      </div>
    </section>    
  )
}

export default PageHeader;