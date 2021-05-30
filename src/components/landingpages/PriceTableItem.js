import React, {useState, useContext} from "react";
import {Mixpanel} from '../../api/mixpanel'
// import {Context as LocalStorageContext} from '../../context/LocalStorageContext'
import {localStorageManagement} from '../../libs'

const PriceTableItem = ({title, periodLabel, price, features, buttonLabel, buttonClassName}) => {

  const mixpanelClickTrack = (name, props) => {
    Mixpanel.track(`${name} clicked`, props);
  }
  
  const signUpURL = () => {  
    const keys = ['via','utm_term'];  
    const url = `${process.env.REACT_APP_DASHBOARD_BASE_PATH}/signup`        
    return localStorageManagement.getURLwithParams(url, keys);
  }

  return (
    <div className="card shadow-lg mb-6 mb-xl-0">
      <div className="card-body">
        <div className="text-center mb-3">
          <span className="badge badge-pill badge-primary-soft">
            <span className="h6 text-uppercase">{title}</span>
          </span>
        </div>

        <div className="d-flex justify-content-center">
          <span className="h2 mb-0 mt-2">$</span>
          <span className="price display-2 mb-0" data-annual="0" data-monthly="0">{price}</span>
        </div>
        <p className="text-center text-muted mb-5">
          {periodLabel}
        </p>        
        <Features features={features}/>        
      </div>
      <a 
        href={signUpURL()} 
        className={`card-btn btn btn-block btn-lg ${buttonClassName}`}
          onClick={() => {
            mixpanelClickTrack(`Sign up`, {Price: price})
          }}
        >          
          {buttonLabel} <i className="fe fe-arrow-right ml-3"></i>
      </a>      
    </div>    
  )
}
// "fe fe-check"
const Features = ({features}) => {
  const listFeatures = features.map((feature, idx) => 
    <div className="d-flex" key={idx.toString()}>
      <div className={`badge badge-rounded-circle badge-${feature.check ? "success": "danger"}-soft mt-1 mr-4`}>
        <i className={feature.check ? "fe fe-check" : "fe fe-x"}></i>
      </div>
      <p>
        {feature.title}
      </p>      
    </div>  
  );

  return (
    <>{listFeatures}</>
  );
}

export default PriceTableItem;