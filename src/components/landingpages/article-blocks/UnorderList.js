import React from "react";

const UnorderList = ({items, iconClassName}) => {
  if(items) {
    return (
      <ul className="mb-0">
        {
          items.map((item, idx) => {
            return (
              <li className="mt-4 d-flex" key={(idx+1).toString()}>
                <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                  <i className={iconClassName ? iconClassName : "fe fe-chevron-right"}></i>
                </div>
                <p>{item}</p>
              </li>
            )
          })
        }
      </ul>    
    )
  }

  return null;
}

export default UnorderList;