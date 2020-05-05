import React from "react";
import {Mixpanel} from '../../api/mixpanel'

const features = [
  {
    key: 'embed-player', 
    title: 'Embeddable players', 
    bodyText: 'Embed your episodes anywhere you can use HTML.',
    urlLink: 'https://justcast.zendesk.com/hc/en-us/articles/360042428891-What-does-embed-widget-look-like-',
    urlTitle: 'See the players',
    iconName: "fe fe-headphones"
  },
  {
    key: 'podcast-website', 
    title: 'Podcast website', 
    bodyText: 'A website for your show: auto-updated, responsive, SEO-optimized, and customizable with our site builder tool.',
    urlLink: 'https://www.justcast.com/shows/something-good-for-ya/audioposts',
    urlTitle: 'See the website',
    iconName: "fe fe-layout"
  },
  {
    key: 'podcast-audiograms', 
    title: 'Social-optimized audiograms (beta)', 
    bodyText: 'Boost your social media posts with our audiogram builder.  Create beautiful, shareable trailer videos for your podcast.',
    urlLink: '',
    urlTitle: 'Learn more',
    iconName: "fe fe-video"
  }   
];

const FeatureLink = ({urlLink, urlTitle}) => {
  const mixpanelClickTrack = (name, props) => {
    Mixpanel.track(`${name} clicked`, props);
  }

  if(urlLink) {
    return <a href={urlLink} target="_blank" 
      onClick={() => {
        mixpanelClickTrack(`features ${urlTitle} clicked`, {
          page: "Landing page",
          section: "Features",
          name: urlTitle,
          url: urlLink
        })
      }}
      className="btn btn-link lift text-white"
    >{urlTitle}</a>
  }
  return null;
}

const FeatureItem = ({title, bodyText, urlLink, urlTitle, iconName}) => {  
  return (
    <div className="col-12 col-md-4 text-center">
      <div className="row mb-5">
        <div className="col"></div>
        <div className="col-auto">
          <div className="icon text-primary mb-3">
            <div className="icon-circle bg-primary text-white"><i className={iconName}></i></div>
          </div>
        </div>
        <div className="col"><hr className="d-none d-md-block"/></div>
      </div>
      <h3 className="font-weight-bold text-white">{title}</h3>
      <p className="text-muted mb-6 mb-md-0">{bodyText}</p>
      <p className="mb-6 mb-md-0"><FeatureLink urlLink={urlLink} urlTitle={urlTitle}/></p>
    </div>
  )
}

const LandingPageFeatures = () => {
  return (
    <>      
      <section className="py-8 pt-md-11 pb-md-12 bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h6 className="text-uppercase text-success font-weight-bold">All in one solution</h6>
              <h1 className="font-weight-bold text-white">A one stop shop for podcast.</h1>
              <p className="font-size-lg text-gray-500 mb-7 mb-md-9">We are a complete solution for all your podcast needs.</p>
              <p className="font-size-lg text-muted mb-7 mb-md-9">
                If we're no longer the right solution for you, we'll allow you to cancel and export your data at anytime for any reason.
              </p>              
            </div>
          </div>
          <div className="row no-gutters mb-7 mb-md-9">
            {
              features.map((feature) => 
                <FeatureItem 
                  key={feature.key} 
                  title={feature.title}
                  bodyText={feature.bodyText}
                  urlLink={feature.urlLink}
                  urlTitle={feature.urlTitle}
                  iconName={feature.iconName}
                />
              )
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPageFeatures