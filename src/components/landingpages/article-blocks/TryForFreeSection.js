import React from "react";
import {localStorageManagement} from '../../../libs'

const TryForFreeSection = ({title}) => {

  const signUpURL = () => {
    const keys = ['via','utm_term'];
    const url = `${process.env.REACT_APP_DASHBOARD_BASE_PATH}/signup`    
    return localStorageManagement.getURLwithParams(url, keys);    
  }

  return (
    <div className="row align-items-center" style={{marginTop: '20px', marginBottom: '20px'}}>
      <div className="col-12 col-md">
        <h3 className="mb-1 font-weight-bold">{title ? title : "Try podcasting on JustCast for free"}</h3>
      </div>
      <div className="col-12 col-md-4">
        <div className="col-auto ml-n5">
          <a className="btn btn-primary" href={signUpURL()}>Sign up now</a>
        </div>
      </div>
    </div>
  )
}

export default TryForFreeSection;