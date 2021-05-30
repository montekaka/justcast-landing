import React from "react";
import Paragraphs from './Paragraphs'

const HeaderSection = (props) => {
  const {title, summary, paragraphs} = props;
  return (
    <section className="pt-8 pt-md-11">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9 col-xl-8">
            {title ? <h1 className="display-4 text-center">{title}</h1> : null}
            {summary ? <p className="lead mb-7 text-center text-muted">{summary}</p> : null}
            <Paragraphs items={paragraphs}/>
            {props.children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderSection;