import React from "react"

const FaqList = ({listItems}) => {
  if(listItems && listItems.length > 0) {
    return (
      <ul>
        {
          listItems.map((item, index) => {
            return (
              <li key={`faq-${index.toString()}`} className="text-white-80">{item}</li>
            )
          })
        }
      </ul>
    )
  }
  return null;
}

const FAQItem = ({title, paragraphs, lists, classNameItem}) => { //mb-12
  return (
    <div className="row">
      <div className="col-12">
        <div className={`card card-border bg-secondary border-warning shadow-lg ${classNameItem} lift lift-lg`}>
          <div className="card-body">
            <div className="d-flex">        
              <div className="badge badge-lg badge-rounded-circle badge-warning">
                <span>?</span>
              </div>
              <div className="ml-5">            
                <h4 className="text-white">
                  {title}
                </h4>
                {
                  paragraphs.map((paragraph, index) => {
                    return (
                      <p key={`paragraph-${index}`} className="text-white-80">{paragraph}</p>
                    )
                  })
                }
                <FaqList listItems={lists}/>
              </div>
            </div>
          </div>
        </div>                        
      </div>
    </div>    
  )  
}

export default FAQItem;