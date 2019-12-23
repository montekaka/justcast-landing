import React from "react";
import {Link} from "react-router-dom"

const WidgetPlayerMoreInfo = ({section, title, subtitle, description, shareInputs, shareIconWithLabels}) => {
  if(section) {
    return (
      <div className="info">
        <section className="header">
          <Subtitle subtitle={subtitle}/>
          <div className="title">{title}</div>          
        </section>
        <section className="body">
          <ShareInputs shareInputs={shareInputs}/>
          <ShareIconWithLabels items={shareIconWithLabels}/>
          <SectionDesc text={description}/>
        </section>
      </div>
    )
  }

  return null;
}

const Subtitle = ({subtitle}) => {
  if(subtitle) {
    return <div className="subtitle">{subtitle}</div>;
  }
  return null;
}

const ShareInputs = ({shareInputs}) => {
  if(shareInputs) {
    return (
      <div className="inputs">
        {
          shareInputs.map((shareInput) => 
            <ShareInput key={shareInput.url} url={shareInput.url} label={shareInput.label}/>
          )
        }
      </div>
    )
  }

  return null;
}

const ShareInput = ({url, label}) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input value={url} type="text" name={label} onChange={(e) => {
        console.log(e.target.name)
      }}/>      
    </div>
  )
}

const ShareIconWithLabels = ({items}) => {
  if(items) {
    return (
      <div className="icons-with-label">
        {
          items.map((item) => 
            <ShareIconWithLabel label={item.label} url={item.url}/>
          )
        }
      </div>
    )
  }
  return null;
}

const ShareIconWithLabel = ({iconName, label, url}) => {
  return (
    <div className="item" tag={Link} to={url}>
      {/* <span className="icon"></span> */}
      <span className="label">{label}</span>
    </div>
  )
}

const SectionDesc = ({text}) => {
  if(text) {
    return (
      <section dangerouslySetInnerHTML={{__html: text}}></section>
    )
  }
  return null;
}

export default WidgetPlayerMoreInfo;