import React from "react";
import FAQs from './../FAQs'
import LandingPagePricingTable from './LandingPagePricingTable'

const faqs = [
  {
    title: 'Can I cancel anytime? What happens?',
    classNameItem: 'mb-6',
    paragraphs: [
      `Yes! There are no long-term commitments or complicated contracts! If you decide that JustCast isn’t right for you, you can easily cancel your account from your dashboard at any time.`,
    ]
  },
  {
    title: 'Is there any money back guarantee?',
    classNameItem: 'mb-6',
    paragraphs: [
      `Definitely, you have the option to cancel your subscription at any time. If you desire a refund, simply reach out to our support team, and we will gladly process it for you.`
    ]
  },
  {
    title: 'Can I change my plan later on?',
    classNameItem: 'mb-6',
    paragraphs: [
      `Absolutely! You can upgrade or downgrade any plan at any time.`
    ],
  },
  {
    title: 'How do the feeds remain private?',
    classNameItem: 'mb-6',
    paragraphs: [
      `Your private feed is hidden from iTunes, Google, and only available to those with their own unique link.`
    ]
  },
  {
    title: `What if I don't have audio versions of my videos yet?`,
    classNameItem: 'mb-6',
    paragraphs: [
      `If your lessons lack audio versions, there's no need to worry! We've taken this into account and offer video-to-audio conversion with every plan`
    ]
  },
  {
    title: `What do I do if I need help?`,
    classNameItem: 'mb-6',
    paragraphs: [
      `We’re here to support you and your podcast. If you have questions or need help, we have a comprehensive help section and more importantly, we’re only a quick chat or email away.`
    ]
  }
]

const LandingPagePricing = ({sectionClassName, titleColor}) => {

  return (
    <>
      <LandingPagePricingTable/>
      <FAQs items={faqs}/>
    </>
  )
}

export default LandingPagePricing;