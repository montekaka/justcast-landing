import React, {useState, useContext} from "react";
import PriceTableItem from './PriceTableItem';

const LandingPagePricingTable = ({sectionClassName, titleColor}) => {
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);

  const handleSwitchChange = () => {
    setIsMonthlyPlan(!isMonthlyPlan)
  }

  const features = [
    {title: "Private RSS Feeds", check: true},
    {title: "Unlimited Podcasts with Unlimited Episodes", check: true}, 
    {title: "RSS Feed Shows All Episodes", check: true}, 
    {title: "Detailed Stats and Analytics About Your Listeners", check: true}, 
    {title: "Tip Jar", check: true}, 
    {title: "Podcast website", check: true}, 
    {title: "Embedded player", check: true}, 
    {title: "Audiogram", check: true},
    {title: "Twitter integration", check: true},
    {title: "Mailchimp integration", check: true},
  ];

  const personalFeatures = [
    {title: "Limited downloads (via Dropbox)", check: true},
    {title: "Private RSS Feeds", check: true},
    {title: "Unlimited Podcasts with Unlimited Episodes", check: true},
    {title: "RSS Feed Shows All Episodes", check: true},
    {title: "Detailed Stats and Analytics About Your Listeners", check: false},
    {title: "Able to submit to Podcasts Network (e.g. Apple Podcasts)", check: false},
    {title: "Tip Jar", check: false}, 
    {title: "Podcast website", check: false}, 
    {title: "Embedded player", check: false}, 
    {title: "Audiogram", check: false}, 
    {title: "Twitter integration", check: false},
    {title: "Mailchimp integration", check: false},    
  ];

  return (
    <div>
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
            <div className="col-12 col-lg-4">
              <PriceTableItem 
                title="Starter" 
                periodLabel={`per ${isMonthlyPlan ? 'month': 'year'}`} 
                price={isMonthlyPlan ? 9: 90} 
                buttonLabel="Try for Free" 
                buttonClassName="btn-primary" 
                features={[ {title: "50,000 downloads/mo", check: true}, ...features]}/>
            </div>            
            <div className="col-12 col-lg-4">
              <PriceTableItem 
                title="Plus" 
                periodLabel={`per ${isMonthlyPlan ? 'month': 'year'}`} 
                price={isMonthlyPlan ? 19: 190} 
                buttonLabel="Try for Free" 
                buttonClassName="btn-primary" 
                features={[ {title: "200,000 downloads/mo", check: true}, ...features]}/>
            </div>   
            <div className="col-12 col-lg-4">
              <PriceTableItem 
                title="Plus" 
                periodLabel={`per ${isMonthlyPlan ? 'month': 'year'}`} 
                price={isMonthlyPlan ? 90: 900} 
                buttonLabel="Try for Free" 
                buttonClassName="btn-primary" 
                features={[ {title: "500,000 downloads/mo", check: true}, ...features]}/>             
            </div>                                         
          </div>
          <div className="row mb-5">
            <div className="col-12 col-lg-12">
              <PriceTableItem 
                title="Personal" 
                periodLabel={`per ${isMonthlyPlan ? 'month': 'year'}`} 
                price={isMonthlyPlan ? 5: 50} 
                buttonLabel="Try for Free" 
                buttonClassName="btn-primary" 
                features={personalFeatures}/>                            
            </div>
          </div>
        </div>  
      </section>
    </div>
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

export default LandingPagePricingTable;