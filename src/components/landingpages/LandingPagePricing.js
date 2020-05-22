import React, {useState} from "react";
import {Mixpanel} from '../../api/mixpanel'
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';
import FAQs from './../FAQs'

const LandingPagePricing = ({sectionClassName, titleColor}) => {
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);

  const handleSwitchChange = () => {
    setIsMonthlyPlan(!isMonthlyPlan)
  }

  return (   
    <> 
      <section className={sectionClassName ? sectionClassName : "pt-9 pt-md-12 bg-gray-200"}>   
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h1 className={titleColor}>Fair, simple pricing for all.</h1>
              <p className={`lead mb-6 mb-md-8 ${titleColor}`}>A plan customized to meet your needs. JustCast provides you powerful tools to manage, distribute, share, and grow your podcast — from your first listener to your first million.</p>
              <SwitchPayment handleSwitchChange={handleSwitchChange}/>
              <p className="lead mb-6 mb-md-8">12 months for the price of 10 when you pay yearly.</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 col-md-6 col-lg-4">
              <PriceCard title="TESTER" periodLabel="Forever" price={0} buttonLabel="Try for Free" buttonClassName="btn-primary-soft" features={['Create unlimited podcasts','3 Items in RSS feed','Chat & email support']}/>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <PriceCard title="PERSONAL" periodLabel={`per ${isMonthlyPlan ? 'month': 'year'}`} price={isMonthlyPlan ? 5: 50} buttonLabel="Try for Free" buttonClassName="btn-primary" features={['Create unlimited podcasts', 'Unlimited episodes', 'Private podcasting', 'Chat & email support']}/>
            </div>
            <div className="col-12 col-lg-4">
              <PriceCard title="PROFESSIONAL" periodLabel={`per ${isMonthlyPlan ? 'month': 'year'}`} price={isMonthlyPlan ? 7: 70} buttonLabel="Try for Free" buttonClassName="btn-primary" features={['Create unlimited podcasts', 'Unlimited episodes', 'Embedded player', 'Podcast website', 'Standard analytics', 'Episode scheduler', 'Audiogram (beta)', 'Private podcasting', 'Chat & email support']}/>
            </div>
          </div>
          <div className="row text-white">
            <p>Basic dropbox accounts are limited to 10 GB/day of bandwidth. Paid dropbox accounts have up to 250 GB/day of bandwidth.</p>
            <p>Need more bandwidth and spaces?  <a href="mailto:justcastapp@gmail.com" className="badge badge-warning">Contact us <span className="fe fe-mail"></span></a>  for a quota</p>
          </div>
        </div>
      </section>
      <FAQs/>
    </>
  )
}

const SwitchPayment = ({handleSwitchChange}) => {
  return (
    <form className="d-flex align-items-center justify-content-center mb-7 mb-md-9">
      <span>
        Monthly
      </span>
      <div className="custom-control custom-switch mx-3">
        <input type="checkbox" className="custom-control-input info" id="billingSwitch" onChange={handleSwitchChange}/>
        <label className="custom-control-label" htmlFor="billingSwitch"></label>
      </div>   
      <span>
        Yearly
      </span>   
    </form>
  )
}

const PriceCard = ({title, periodLabel, price, features, buttonLabel, buttonClassName}) => {

  const mixpanelClickTrack = (name, props) => {
    Mixpanel.track(`${name} clicked`, props);
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
        href={`${process.env.REACT_APP_DASHBOARD_BASE_PATH}/signup?${title}`} 
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