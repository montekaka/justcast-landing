import React from "react";
import {Mixpanel} from '../api/mixpanel'
import { Alert } from 'reactstrap';
import {
  HeaderImage, 
  HeaderSection, 
  ParagraphsSection, 
  SectionLayout,
  TryForFreeSection,
  UnorderList
} from '../components/landingpages/article-blocks'
import LandingPagePricingTable from '../components/landingpages/LandingPagePricingTable'
import FAQs from '../components/FAQs'

const faqs = [
  {
    title: 'Do Private RSS Feeds Work With All Podcast Apps?',
    classNameItem: 'mb-6',
    paragraphs: [
      `Your private RSS feed should work with most podcast apps that allow you to add an RSS feed including Apple Podcasts, Google Podcasts, AntennaPod, Pocket Casts, CastBox, Podcast Addict and Overcast. However, they don’t work with platform-based apps like Spotify and Stitcher.`,
    ]
  }, 
  {
    title: 'How long does the free trial last?', 
    classNameItem: 'mb-6',
    paragraphs: [
      `The free trial is unlimited! The only limits are the storage space on your Dropbox account, and the number of episodes in your feed which is restricted to 3 episodes on a free plan.`
    ]
  },
  {
    title: 'What is the difference between the Personal Private Podcast and Members Private Podcast?', 
    classNameItem: 'mb-6',
    paragraphs: [
      `The members private podcast feed option allows creation of multiple feeds while the personal private feed is just one feed.`
    ],
  },
  {
    title: 'Can I set up a paid subscription podcast using JustCast?', 
    classNameItem: 'mb-6',
    paragraphs: [
      `Yes! JustCast can be used alongside Patreon. Just send your subscribers a link to your private feed, or create personalised feeds for each of them using their email address. JustCast is also beta testing tip jars and taking payments within the platform.`
    ]
  },
  {
    title: 'Can I have a public feed and a private feed for subscribers?', 
    classNameItem: 'mb-6',
    paragraphs: [
      `If you have tiered subscriptions with a free feed and a paid bonus feed then you will need to create two podcasts and make the subscription RSS feed private.`]
  },
  {
    title: 'Why can’t I see my full stats and analytics?', 
    classNameItem: 'mb-6',
    paragraphs: [
      `Detailed reporting is restricted for paying users only. The cheapest paid option starts from $5 per month. Sign up here.`]
  },
  {
    title: 'Why are only 3 episodes in my JustCast feed?', 
    classNameItem: 'mb-6',
    paragraphs: [
      `Free plans are restricted to 3 episodes per RSS feed.`
    ]
  },
  {
    title: 'How can I get more storage?', 
    classNameItem: 'mb-6',
    paragraphs: [
      `You can get more Dropbox storage by upgrading your plan or referring a friend (+500MB per referral). Alternatively you can get premium podcast hosting storage with JustCast.`
    ]
  },
  {
    title: 'Are there limits on Dropbox bandwidth if I have a lot of listeners?', 
    classNameItem: 'mb-12',
    paragraphs: [
      `Yes. Dropbox is not designed to support hosting podcasts with a large number of listeners. Upgrade to JustCast hosting from $9 per month if you have.`
    ]
  }                
]

const MailerLiteIntegrationPage = () => {

  Mixpanel.track('MailerLite integration landing page loaded', {"First Time": "TRUE"}, () => {
    setTimeout(Mixpanel.register({"First Time": "FALSE"}), 500);
  });

  return (
    <>
      <HeaderImage backgroundImage={"https://justcast-assets.sfo3.cdn.digitaloceanspaces.com/marketing-assets/image/stack%20rocks.jpg"}/>
      <HeaderSection title="A Podcast integration for MailerLite" summary="JustCast is happy to announce our new MailerLite integration, which allows our Private Podcast hosts to access automated email marketing services directly through JustCast." 
        paragraphs={[
          "MailerLite is a fantastic email marketing service that offers custom marketing options and email automation to help you run your private podcast effortlessly. Through JustCast’s MailerLite integration, you can easily add and remove listeners to your feeds by pulling your MailerLite subscribers into your JustCast private podcast feed.",
          "For example, someone purchases your course. MailerLite sends them an automated email with a custom link to your private podcast feed inside an email template you designed. They receive this email directly from you, and you don’t have to lift a finger.",
          "After setting up your MailerLite and JustCast integration, your listeners gain automated access to your podcast, which improves their workflow and yours. When adding a listener, you also have the choice to notify them automatically through either JustCast or MailerLite.",
          "Alternately, when someone leaves your membership, their unique link in JustCast can be disabled automatically with this integration.",
        ]}/>
      <SectionLayout>
        <ParagraphsSection title="How to Setup MailerLite Integration">
          <div>
            <h3 className="font-weight-bold">Step 1: Create and Download a New API Token in MailerLite</h3>
            <p>To integrate MailerLite into JustCast, you will need to begin in your MailerLite account. Here, you’ll create an API token which you’ll later insert into your JustCast account.</p>
            <ol>
              <li>To create a new API token, log in to your MailerLite account.</li>
              <li>Then, click the "Integrations" tab on the left side menu.</li>
              <li>Find "API" and select the "Use" button on the right side.</li>
              <li>Click the green "Generate new token" button.</li>
              <li>Enter the name of this token, for example, "JustCast + Example." Then, click the "Create token" button.</li>
              <li>Download your new JustCast API token from MailerLite..</li>
            </ol>
            <h3 className="font-weight-bold">Step 2: Connect MailerLite and JustCast by Uploading Your API Token</h3>
            <p>Now that you have your API token, it's time to paste the token into JustCast.</p>
            <ol>
              <li>In your JustCast account, navigate to the Connections page.</li>
              <li>On the <a href="https://dashboard.justcast.com/connections">Connections</a> page on JustCast, click the "Connect? button under the MailerLite logo.</li>
              <li>Paste the API token you obtained from MailerLite into the box. Then, click the “Submit” button.</li>
            </ol>
            <p>Congratulations! You have successfully connected JustCast and MailerLite.</p>
          </div>               
        </ParagraphsSection>
      </SectionLayout>
      <SectionLayout>
        <Alert color="secondary">
          Check out our 3-part step-by-step help articles and see how to add your connect JustCast to your MailerLite.
        </Alert>
        <ol>
          <li><a href="https://justcast.zendesk.com/hc/en-us/articles/9755583856276-How-to-Setup-MailerLite-Integration">How to Setup MailerLite Integration</a></li>
          <li><a href="https://justcast.zendesk.com/hc/en-us/articles/9755629678100-How-to-Sync-MailerLite-and-JustCast-Subscribers-Lists-to-Automate-Listener-Additions-and-Removals">How to Sync MailerLite and JustCast Subscribers Lists to Automate Listener Additions and Removals</a></li>
          <li><a href="https://justcast.zendesk.com/hc/en-us/articles/9755660008468-How-to-use-MailerLite-to-Automate-Emails-with-Custom-Fields-and-Unique-RSS-Links">How to Automate Emails with Custom Fields and Unique RSS Links</a></li>
        </ol>
      </SectionLayout>
      <SectionLayout>
        <hr/>        
        <div style={{marginTop: "20px", marginBottom: "20px"}}>
          <TryForFreeSection/>
        </div>      
      </SectionLayout>      
      <LandingPagePricingTable hidePersonal={true}/>
      <FAQs items={faqs}/>
    </>
  )
}

export default MailerLiteIntegrationPage