import React, {useState, useContext} from "react";
import PriceTableItem from './PriceTableItem';

const LandingPagePricingTable = ({sectionClassName, titleColor, hidePersonal}) => {
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);

  const handleSwitchChange = () => {
    setIsMonthlyPlan(!isMonthlyPlan)
  }

  const features = [
    'Unlimited episodes',
    'Unlimited listeners',
    'Automatic video to audio conversion',
    'Zapier Integration',
    'Custom embedded player',
    'One-Click listener access',
    'Listener management',
    'Sequential feeds',
    'Episode scheduling',
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
                features={[ '2 podcasts', ...features].map((title) => {return {title: title, check: true} })}/>
            </div>
            <div className="col-12 col-lg-4">
              <PriceTableItem
                title="Professional"
                periodLabel={`per ${isMonthlyPlan ? 'month': 'year'}`}
                price={isMonthlyPlan ? 19: 190}
                buttonLabel="Try for Free"
                buttonClassName="btn-primary"
                features={[ '6 podcasts', ...features].map((title) => {return {title: title, check: true} })}/>
            </div>
            <div className="col-12 col-lg-4">
              <PriceTableItem
                title="Business"
                periodLabel={`per ${isMonthlyPlan ? 'month': 'year'}`}
                price={isMonthlyPlan ? 70: 700}
                buttonLabel="Try for Free"
                buttonClassName="btn-primary"
                features={[ 'Unlimited podcasts', ...features].map((title) => {return {title: title, check: true} })}/>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <p className="text-white text-center">Let us know if the pricing doesn't work for you</p>
            <a href="mailto:justcastapp@gmail.com" className="btn btn-secondary btn-sm">Contact us</a>
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