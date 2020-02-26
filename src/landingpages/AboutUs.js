import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="pt-8 pt-md-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h1 className="display-4 text-center">JustCast: makes podcasting easy like drag and drop</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <p>Podcasts are our passion, and we listen to podcasts every day. Once a podcast host, we feel the pain of publishing a podcast:</p>
              <ul>
                <li>RSS Feed</li>
                <li>Submit my podcast to iTunes or Spotify</li>
                <li>How to upload MP3 to hosting server</li>
                <li>How many subscribers for my podcast?</li>
              </ul>
              <p className="mb-0">Our goal is to make the podcast ecosystem thrive, by providing an easy and elegant solution of podcast hosting. Podcast hosting should be simple, you should spend all your time and efforts on making your content. At JustCast, we will take care of the heavy work and think outside the box to make your work as seamless as possible.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h2 className="font-weight-bold">What do you need to get started?</h2>
              <ul>
                <li>MP3 audio files, for starter, you can even use your smartphone for recording</li>
                <li>A web server like JustCast to host MP3 files</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h2 className="font-weight-bold">What makes us different?</h2>
              <p>Uploading can be time-consuming and tedious, you need to monitor the upload status if your files are big. In JustCast, all you need is to connect your DropBox account. Create a new folder (podcast show), then drag and drop your MP3 to the folder and you are done. Your MP3 will be live in seconds. Thanks to the wonderful technology behind DropBox. Try it and you will feel the differences. With this, you can publish MP3 on-the-go using your smartphone. We also provide comprehensive analytics for you to understand your audience better.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h2 className="font-weight-bold">JustCast story so far.</h2>
              <p>JustCast launched in 2015, starting as a hobby project. Start getting traction and featuring on numerous sites. Our customers include indie podcasters, small businesses, and large companies. We have a good team and will take care of problems quickly. </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-7 pt-md-10 bg-light">
        <div className="container py-6 py-md-8 border-top border-bottom border-gray-300">
          <div className="row align-items-center">
            <div className="col-12 col-md">
              <h3 className="mb-1 font-weight-bold">Try podcasting on JustCast for free</h3>
            </div>
            <div className="col-12 col-md-3">
              <div className="col-auto ml-n5">
                <a className="btn btn-primary" href={`${process.env.REACT_APP_DASHBOARD_BASE_PATH}/signup`}>Sign up now</a>
              </div>
            </div>
          </div>
        </div>
      </section>            
    </>
  )
}

export default AboutUs