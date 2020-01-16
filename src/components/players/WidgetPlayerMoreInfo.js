import React, {useState} from "react";

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
            <ShareInput key={shareInput.label} url={shareInput.url} label={shareInput.label}/>
          )
        }
      </div>
    )
  }

  return null;
}

const ShareInput = ({url, label}) => {

  const [buttonLabel, setButtonLabel] = useState('Copy');

  const handleCopy = () => {
    const copyText = document.querySelector(`#${label}`);
    copyText.select();
    document.execCommand("Copy");
    setButtonLabel("Copied");
    // change back to Copy in 3 seconds
    setTimeout(() => {
      setButtonLabel("Copy");
    }, 3000)
  }


  return (
    <div className="input">
      <label>{label}</label>
      <input value={url} type="text" name={label} readOnly id={label} />
      <button className="copyButton" onClick={handleCopy}>{buttonLabel}</button>
    </div>
  )
}

const ShareIconWithLabels = ({items}) => {
  if(items) {
    return (
      <div className="icons-with-label">
        {
          items.map((item) => 
            <ShareIconWithLabel key={item.label} label={item.label} url={item.url} iconName={item.iconName} buttonImg={item.buttonImg}/>
          )
        }
      </div>
    )
  }
  return null;
}

const ShareIconWithLabel = ({iconName, label, url, buttonImg}) => {

  const onClickHander = () => {
    window.open(url, "_blank");
  }

  if(buttonImg) {
    return (      
      <button href={url} className="btn btn-light btn-sm lift button-with-icon-podcast-apps">
        <img src={iconName} />
        <span className="label">{label}</span>
      </button>
    )
  }
  return (
    <button className="badge badge-lg badge-rounded-circle badge-light icon-with-label" onClick={onClickHander}>
      <i className={iconName}></i>      
    </button>
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