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
    <div>
      <Jumbotron>
        <div className="container">
          <DescriptionHandle description={`LATEST EPISODE ${date}`}/>
          <h1 className="display-3">{name}</h1>
          <button className="btn btn-info text-center rounded">
            <svg className="bi bi-play" width="2em" height="2em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12.804 10L7 6.633v6.734L12.804 10zm.792-.696a.802.802 0 010 1.392l-6.363 3.692C6.713 14.69 6 14.345 6 13.692V6.308c0-.653.713-.998 1.233-.696l6.363 3.692z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </Jumbotron>
    </div>
  )
} 

export default JumbotronHero;