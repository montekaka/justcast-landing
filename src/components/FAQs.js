import React from "react"

const faqs = [
  {
    title: 'How many podcasts can I have?',
    classNameItem: 'mb-6',
    paragraphs: [
      `You can create as many podcasts as you'd like on JustCast, starting at $9 / month.`,
      `Each podcast is a separate show and can contain unlimited episodes. Your storage limits is based on your storage limits with Dropbox.`
    ]
  }, 
  {
    title: 'What happens when I go over my download limit?', 
    classNameItem: 'mb-6',
    paragraphs: [
      `Let's say you're on the 50,000 downloads per month plan. If we notice that you’re consistently going over your download limit we’ll reach out to you and get you to upgrade to the next level. There's no "automatic shut off;" we'll continue to serve audio for your listeners.`
    ]
  },
  {
    title: 'What does JustCast provide?', 
    classNameItem: 'mb-6',
    paragraphs: [
      `JustCast gives you everything you need to get your podcast on Spotify, Apple Podcasts, and Google:`
    ],
    lists: [
      `A podcast-ready RSS feed`,
      `Customizable podcast website`,
      `Standard analytics`,
      `Embeddable audio player`,
      `Audiogram to turn your podcast into engaging animated videos to share on social media`,
      `Tip jar`
    ]
  },
  {
    title: 'Do I own my content on JustCast?', 
    classNameItem: 'mb-12',
    paragraphs: [
      `Yes! We don't control or modify any of the podcast content you upload to JustCast. You can do whatever you'd like with your show: run your own ads, create Patreon membership, and distribute it as you please.`
    ]
  }    
]

const Shape = () => {
  return (
    <div className="position-relative mt-n15">
      <div className="shape shape-bottom shape-fluid-x svg-shim text-dark">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  )
}

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

const FAQs = () => {
  return (
    <>
      <Shape/>
      <section className="pt-15 bg-dark">
        <div className="container pt-8 pt-md-11">
          <h1 className="display-4 text-white text-center">Frequently Asked Questions</h1>
          {
            faqs.map((faq, index) => {
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