import React from "react";
import moment from 'moment';

const sectionCSS = {
  backgroundImage: `url("https://source.unsplash.com/c1ZN57GfDB0/1600x900")`
}

const PageHeader = ({headerTitle, name, id, audio_date, handlePlay}) => {
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
            <h1 className="display-2 text-white">
              {headerTitle}
            </h1>

            <p className="lead text-white-75 mb-6">
              {name}
            </p>            

            <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
              {date}
            </p>

            <div className="text-center text-md-left">
              <div className="btn btn-primary btn-rounded-circle btn" onClick={handlePlayClick}>
                <i className="fe fe-play"></i>
              </div>  
            </div>
          </div>
        </div>        
      </div>
    </section>    
  )
}

export default PageHeader;