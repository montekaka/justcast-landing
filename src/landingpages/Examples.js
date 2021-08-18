import React from "react";
import {Mixpanel} from '../api/mixpanel'
import TryPodcastingForFree from './../components/TryPodcastingForFree'

const Examples = () => {
  Mixpanel.track('Widget player example page loaded');
  return (
    <>
      <section className="pt-8 pt-md-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h1 className="display-4 text-center">What podcasts are hosted on JustCast?</h1>
              <p>Here are some of the people and organizations that use JustCast to host their podcast.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h2 className="font-weight-bold">Inside the Aluminum Tube - An Aviation History Podcast</h2>
                <div dangerouslySetInnerHTML={{__html: `<iframe src='https://justcast.com/widget/inside-the-aluminum-tube-with-shanon-baker/audioposts/1077405' width='100vw' height='100vh' frameborder='0' scrolling='yes' seamless='true' style="display: block; border:none; height:100vh; width:100vw;"></iframe>`}}>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TryPodcastingForFree/>
    </>
  )
}

export default Examples;