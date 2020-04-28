import React from "react";
import {Mixpanel} from '../api/mixpanel'
import {Link} from 'react-router-dom'
import fbicon from './../assets/img/icons/social/facebook.svg'
import twtricon from './../assets/img/icons/social/twitter.svg'
import joshchen from './../assets/img/avatars/joshchen.gif'

const backgrounImgStyle = {
  backgroundImage: `url("https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2106&q=80")`
}

const Published = () => {  
  return (
    <div className="row align-items-center py-5 border-top border-bottom">
      <div className="col-auto">
        <div className="avatar avatar-lg"><img src={joshchen} alt="josh chen" className="avatar-img rounded-circle" /></div>
      </div>
      <div className="col ml-n5">
        <h6 className="text-uppercase mb-0">Josh Chen</h6>
        <time className="font-size-sm text-muted" dateTime="2020-04-28">Published on Apr 28, 2020</time>
      </div>
      <div className="col-auto">
        <span className="h6 text-uppercase text-muted d-none d-md-inline mr-4">Share:</span>
        <ul className="d-inline list-unstyled list-inline list-social">
          <li className="list-inline-item list-social-item mr-3">
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.justcast.com/blogs/resources-for-church-impacted-by-coronavirus" className="text-decoration-none">
              <img src={fbicon} className="list-social-icon" alt="share to facebook"/>
            </a>
          </li>
          <li className="list-inline-item list-social-item mr-3">
            <a href="https://twitter.com/home?status=https://www.justcast.com/blogs/resources-for-church-impacted-by-coronavirus" className="text-decoration-none">
              <img src={twtricon} className="list-social-icon" alt="share to facebook"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

const BlogPost = () => {
  Mixpanel.track('COVID-19 page loaded');

  return (
    <>
      <section datajarallax="true" dataspeed=".8" className="py-12 py-md-15 bg-cover jarallax" style={backgrounImgStyle}></section>
      <section className="pt-8 pt-md-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h1 className="display-4 text-center">Helping your church through COVID-19</h1>
              <p className="lead mb-7 text-center text-muted">
                We know this is a difficult time for people everywhere, including small business owners. We are offering free Pro Plan services for churches who use our podcast hosting services.
              </p>  
              <Published/>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <p>On March 24, three weeks to Easter holidays, the U.S President Donald Trump had hoped to open back the economy and the church by Easter Sunday. The President had hoped for fully packed churches across the country and believed it would be great to have all churches full during the time it was most needed. Today, almost three weeks on, just a few miles away from the White House, the Episcopal Christ in Georgetown has postponed all church activities after it reported a positive case of COVID -19.</p>
              <p>The COVID-19 pandemic has infiltrated several aspects of human life, with religion being one of the most hit. Churches nationwide and around the globe are currently scrambling to effectively and adequately respond to the Coronavirus pandemic. The pandemic has altered the way people practice their faith as some who rarely pray are today seeking for divine intervention and staunch Christians reducing their usual tithe contributions. For most faithful believers, worshipping online has become the norm as the social isolation and the economic pressure caused by the pandemic continue to have a massive impact on religious practice.</p>
              <p>Nonetheless, it is during this period of the global crisis when the church is needed most. Various churches thus exploiting the online space to ensure congregants remain encouraged and motivated during this challenging moment. As a hosting company for podcasts and amid such a crisis when our services may be needed the most, we are deeply concerned about this missing link between the church and most believers. With the company's primary goal being impacting positively on the society, and this being a challenging and stressful period, we have decided to come up with drastic measures to assist the church in filling this void using our podcast hosting services.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h2 className="font-weight-bold">JustCast’s responsibility during the pandemic</h2>
              <p>It is the role of the company to ensure seamless interaction and effective communication during crises like these. It is, therefore, our responsibility to ensure our users and the greater population are safe during this pandemic. With the company enjoying a large customer base that is diverse and distributed throughout the country, we are focused on ensuring that they continuously remain safe and updated with the vital information key for prevention.</p>
              <p>As the COVID-19 continues to spread, a large number of our workforce has also been affected, and many of them forced to work remotely to ensure we are up to the task during this pandemic. This is, however, not only for our company but for almost all businesses across the country. As a result, most companies and churches are opting for web hosting services such as podcasts to ensure uninterrupted service delivery. With this trend, it is thus our responsibility to ensure such organizations like the church continue with uninterrupted service delivery.</p>
              <p>Consequently, to fill this missing link between congregants and the church during this pandemic, JustCast has decided to come up with specific measures to ensure the church still has a vital role to play through hosted podcasts. Through podcasts, the company targets to improve the bond between the church and congregants and to ensure the church’s positive impact is not lost.</p>
              <ol className="mb-0">
                <li>
                  <strong>Free Pro Plan policy</strong>
                  <p>Apart from religion, the C0VID-19 pandemic has also affected the economy. As a result, we are offering free <Link to="/features-pricing" >Pro Plan</Link> services for churches who use our podcast hosting services as a new customer (For existing customers, please email us for more information on pausing your subscription). <strong>The free services will be offered until the end of 2020 (Dec 31, 2020).</strong> This is to ensure easy and equal access to the church services by congregants despite the hard economic times. Currently, with the increasing rate of unemployment, most believers are unable to afford subscriptions to the podcasts, and this is part of the strategy to encourage them to seek spiritual divine during this challenging moment.</p>
                </li>
                <li>
                  <strong>Free 3-episode trial</strong>
                  <p>We are also offering a free 3-episode trial for churches that seek our podcast hosting services. The free 3-episode trial is to provide the churches with the first-hand experience of our services. The 3 episode demo also provides the churches with the opportunity to seek our services to spread the gospel freely as they plan to subscribe for payment plans. It also gives them a chance to identify the need to opt for our services during this pandemic.</p>
                </li>
                <li>
                  <strong>Slashed subscription services</strong>
                  <p>To help the churches cope with the adverse effect of the coronavirus pandemic, our subscription prices will be reduced by a half to encourage them to opt for our services to continue providing spiritual nourishment to their congregants. This is also in line with the difficult economic period making many churches unable to afford such alternatives.</p>
                </li>
                <li>
                  <strong>Free COVID-19 alerts on preventive measures</strong>
                  <p>As a company, one of our primary goals is to help our users during crises such as these. As a result, we are tasked to ensure they receive vital information that will help them stay safe and curb the spread of the virus. In addition, we will also provide them with an update on the critical developments regarding the virus.</p>
                </li>
                <li>
                  <strong>Instant feedback platform to track the most vulnerable</strong>
                  <p>The main priority for most churches currently is being vigilant in ensuring the most vulnerable in society remain protected during this pandemic. Through our podcast hosting service, we will help the church keep track of the most susceptible using our instant feedback platform on the podcast. With this, the church will be quickly notified of the overwhelmed and those in dire need of spiritual nourishment for help.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h2 className="font-weight-bold">Making a difference</h2>
              <p>The church plays a significant role during a crisis that should not be ignored during the COVID-19 pandemic. And with the widening gap between the church and congregants due to the virus, many people are increasingly becoming vulnerable. As a result, we are looking forward to partner with several churches to ensure the bond is maintained and continued support is given to the most vulnerable during the crisis. To ascertain this, part of the revenue the company will get from subscriptions by the churches will be channeled towards helping those vulnerable in the society due to the COVID-19 pandemic.</p>
              <p>As a company, we strive for innovative digital solutions that positively impact social change and improves lives. As the COVID-19 pandemic continues to wreak havoc, it is part of the company’s responsibilities to ensure our users stay safe through innovative digital solutions.</p>
            </div>
          </div>
        </div>
      </section> 
      <section className="pt-6 pt-md-8 pb-8 pb-md-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <Published/>
            </div>
          </div>
        </div>
      </section>           
    </>
  )
}

export default BlogPost;