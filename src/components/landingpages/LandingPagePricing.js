import React from "react";
import {Mixpanel} from '../../api/mixpanel'

const LandingPagePricing = ({sectionClassName, titleColor}) => {
  return (
    <section className={sectionClassName ? sectionClassName : "pt-9 pt-md-12 bg-gray-200"}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h1 className={titleColor}>Fair, simple pricing for all.</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 col-md-6 col-lg-4">
            <PriceCard title="TESTER PLAN" periodLabel="per month" price={0} buttonLabel="Start for free" buttonClassName="btn-primary-soft" features={['3 Items in RSS feed', '3 Episodes stats', 'Free cancelation']}/>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <PriceCard title="PRO PLAN" periodLabel="per month" price={5} buttonLabel="Start for premium" buttonClassName="btn-primary" features={['Unlimited* Items in RSS feed', 'All Episodes stats', 'Free cancelation']}/>
          </div>
          <div className="col-12 col-lg-4">
            <PriceCard title="PRO PLAN ANNUAL" periodLabel="per year" price={50} buttonLabel="Start for premium" buttonClassName="btn-primary" features={['Unlimited* Items in RSS feed', 'All Episodes stats', 'Free cancelation']}/>
          </div>          
        </div>
        <div className="row">
          <p>Basic dropbox accounts are limited to 10 GB/day of bandwidth. Paid dropbox accounts have up to 250 GB/day of bandwidth.</p>
        </div>
      </div>
    </section>
  )
}

const PriceCard = ({title, periodLabel, price, features, buttonLabel, buttonClassName}) => {

  const mixpanelClickTrack = (name) => {
    Mixpanel.track(`${name} clicked`);
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
        <a 
        href={`${process.env.REACT_APP_DASHBOARD_BASE_PATH}/signup?${title}`} 
        className={`btn btn-block ${buttonClassName}`}
          onClick={() => {
            mixpanelClickTrack(`Sign up with ${title}`)
          }}
        >          
          {buttonLabel} <i className="fe fe-arrow-right ml-3"></i>
        </a>        
      </div>
    </div>    
  )
}


const Features = ({features}) => {
  const listFeatures = features.map((feature, idx) => 
    <div className="d-flex" key={idx.toString()}>
      <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
        <i className="fe fe-check"></i>
      </div>
      <p>
        {feature}
      </p>      
    </div>  
  );

  return (
    <>{listFeatures}</>
  );
}

export default LandingPagePricing;