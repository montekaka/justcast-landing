import React from "react";
import {localStorageManagement} from './../libs'

const Affiliate = () => {
  const signUpURL = () => {
    const keys = ['via'];
    const url = `${process.env.REACT_APP_DASHBOARD_BASE_PATH}/signup`
    return localStorageManagement.getURLwithParams(url, keys);    
  }
  
  return (
    <>
      <section className="pt-8 pt-md-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h1 className="display-4 text-center">JustCast podcast affiliate program</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <p>You can earn a 20% commission on the first payment for each podcast customer you refer to JustCast.</p>
              <p>Sign up below and you'll get a unique referral link you can share on your blog, podcast, Twitter, or to your email newsletter list.</p>
              <a className="btn btn-primary" href={signUpURL()}>Sign up here</a>
            </div>
          </div>
        </div>
      </section>         
      <section className="pt-7 pt-md-10 bg-light">
        <div className="container py-6 py-md-8 border-top border-bottom border-gray-300">
          <div className="row align-items-center">
            <div className="col-12 col-md">
              <h3 className="mb-1 font-weight-bold">Already a JustCast affiliate?</h3>
            </div>
            <div className="col-12 col-md-3">
              <div className="col-auto ml-n5">
                <a className="btn btn-primary" href={`${process.env.REACT_APP_DASHBOARD_BASE_PATH}/signin`}>Log in</a>
              </div>
            </div>
          </div>
        </div>
      </section>            
    </>
  )  
}

export default Affiliate