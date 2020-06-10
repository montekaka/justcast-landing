import React from "react";
import {localStorageManagement} from './../libs'

const TryPodcastingForFree = () => {

  const signUpURL = () => {
    const keys = ['via'];
    const url = `${process.env.REACT_APP_DASHBOARD_BASE_PATH}/signup`    
    return localStorageManagement.getURLwithParams(url, keys);    
  }

  return (
    <>
      <section className="pt-7 pt-md-10 bg-light">
        <div className="container py-6 py-md-8 border-top border-bottom border-gray-300">
          <div className="row align-items-center">
            <div className="col-12 col-md">
              <h3 className="mb-1 font-weight-bold">Try podcasting on JustCast for free</h3>
            </div>
            <div className="col-12 col-md-3">
              <div className="col-auto ml-n5">
                <a className="btn btn-primary" href={signUpURL()}>Sign up now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TryPodcastingForFree;