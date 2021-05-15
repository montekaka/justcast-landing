import React from "react";
import Paragraphs from './Paragraphs'

const ParagraphsSection = (props) => {
  const {title, paragraphs, list} = props;
  return (
    <>
      <h2 className="font-weight-bold">{title}</h2>
      <Paragraphs items={paragraphs}/>
      {props.children}
    </>
  )
}

export default ParagraphsSection;