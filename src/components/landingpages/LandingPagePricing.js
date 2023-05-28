import React from "react";
import FAQs from './../FAQs'
import LandingPagePricingTable from './LandingPagePricingTable'

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

const LandingPagePricing = ({sectionClassName, titleColor}) => {

  return (
    <>
      <LandingPagePricingTable/>
      <FAQs items={faqs}/>
    </>
  )
}

export default LandingPagePricing;