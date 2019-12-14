import React from "react";
import moment from 'moment'
import { Jumbotron, Button } from 'reactstrap';

const DescriptionHandle = ({description}) => {
  if(description) {
    return (<p className="lead">{description}</p>)
  }
  return null;
}

const JumbotronHero = ({name, id, audio_date, description}) => {
  const date = moment(audio_date).format('YYYY-MM-DD')

  return (
    <section className="pt-12 pt-md-14 pb-12 pb-md-15 bg-gray-900" style={{"marginTop": "-83px"}} >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-9 col-lg-9">
            <p className="font-size-lg text-white-80 mb-6">LATEST EPISODE</p>
            <h1 className="display-3 font-weight-bold text-white">{name}</h1>
            <p className="lead text-white-75 mb-4">{date}</p>
            <div className="btn btn-primary btn-rounded-circle btn">
              <i className="fe fe-play"></i>
            </div>            
          </div>
        </div>
      </div>
    </section>
  )
} 

export default JumbotronHero;