import React from "react";

const HTMLBody = ({text}) => {
  if(text) {
    return <div dangerouslySetInnerHTML={{__html: text}} className="lead text-gray-300 mb-7 mb-md-9" />
  }

  return null;
}

const SimplePageHeader = ({title, bodyText}) => {
  return (
    <section className="py-8 py-md-11 border-bottom bg-gray-800">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h1 className="display-2 text-gray-100">
              {title}
            </h1>
            <HTMLBody text={bodyText}/>         
          </div>
        </div>
      </div>
    </section>    
  )
}

export default SimplePageHeader;
