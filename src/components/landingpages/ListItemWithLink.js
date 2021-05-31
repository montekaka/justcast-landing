import React from "react";

const ListItemWithLink = ({items}) => {
  return <ul>
    {items.map((item, idx) => <Item key={idx+1} text={item.text} link={item.link}/>)}
  </ul>
}

const Item = ({text, link}) => {
  if(link) {
    return <li className="text-white"><a href={link} className="text-white">{text}</a></li>
  } else {
    return <li className="text-white">{text}</li>
  }

}

export default ListItemWithLink;