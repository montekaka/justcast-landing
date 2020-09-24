import React from "react";
import backgroundImg from './../assets/img/covers/cover-16.jpg';

const divStyle = {
  backgroundImage: `url(${backgroundImg})`
}

export default ({message}) => {
  return (
    <section>
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center no-gutters min-vh-100">
          <div className="col-12 col-md-6 col-lg-4 py-8 py-md-11">
            <h1 className="display-3 font-weight-bold">
              Uh Oh.
            </h1>
            <p className="mb-5 text-muted">
              {message ? message : "Sorry, this page does not exist"}
            </p>
          </div>
          <div className="col-lg-7 offset-lg-1 align-self-stretch d-none d-lg-block">
            <div className="h-100 w-cover bg-cover" style={divStyle}></div>
            <div className="shape shape-left shape-fluid-y svg-shim text-white">
              <svg viewBox="0 0 100 1544" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H100V386L50 1158V1544H0V0Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>    
  )
}