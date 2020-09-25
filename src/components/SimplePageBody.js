import React, {useContext} from "react";
import {Context as ThemeContext} from '../context/ThemeContext'

const HTMLBody = ({text}) => {
  const themeContext = useContext(ThemeContext);
  const {backgroundColorClass} = themeContext.state;
  
  if(text) {
    return <div dangerouslySetInnerHTML={{__html: text}} className="mb-5 mb-md-0" style={{color: backgroundColorClass === "bg-dark" ? "white" : null}}/>
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
