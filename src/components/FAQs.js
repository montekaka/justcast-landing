import React from "react"
import FAQItem from '../components/landingpages/FAQItem'
import FAQShape from '../components/landingpages/FAQShape'

const FAQs = ({items}) => {
  return (
    <>
      <FAQShape/>
      <section className="pt-15 bg-dark">
        <div className="container pt-8 pt-md-11">
          <h1 className="display-4 text-white text-center">Frequently Asked Questions</h1>
          {
            items.map((faq, index) => {
              return (
                <FAQItem key={index.toString()} title={faq.title} paragraphs={faq.paragraphs} lists={faq.lists} classNameItem={faq.classNameItem}/>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default FAQs;