import React from "react";

const HTMLBody = ({text}) => {
  if(text) {
    return <div dangerouslySetInnerHTML={{__html: text}} className="mb-5 mb-md-0" />
  }

  return null;
}

const SimplePageBody = ({ bodyText}) => {
  return (
    <section className="pt-6 pt-md-8">
      <div className="container pb-6 pb-md-8 border-bottom">
        <div className="row align-items-center">
          <div className="col-12 col-md">
            <HTMLBody text={bodyText}/>            
          </div>          
        </div> 
      </div> 
    </section> 
  )
}

export default SimplePageBody;
