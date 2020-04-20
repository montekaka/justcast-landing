import React from "react";

const Examples = () => {
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
              <h2 className="font-weight-bold">Something Good For Ya</h2>
              <div dangerouslySetInnerHTML={{__html: `<iframe src='https://justcast.com/widget/something-good-for-ya/audioposts/1000866' width='100%' height='180' frameborder='0' scrolling='no' seamless='true' style='width:100%; height:180px;'></iframe>`}}>
              </div>
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

export default Examples;