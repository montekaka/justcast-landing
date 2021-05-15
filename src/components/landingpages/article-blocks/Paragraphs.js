import React from "react";

const Paragraphs = ({items}) => {
  if(items) {
    return items.map((text, idx) => 
      <p key={(idx+1).toString()}>{text}</p>
    )
  }

  return null;
}

export default Paragraphs;