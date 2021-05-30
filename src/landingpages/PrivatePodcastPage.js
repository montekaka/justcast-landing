import React from "react";
import {Mixpanel} from '../api/mixpanel'
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

const PrivatePodcastPage = () => {

  Mixpanel.track('Private Podcast landing page loaded', {"First Time": "TRUE"}, () => {
    setTimeout(Mixpanel.register({"First Time": "FALSE"}), 500);
  });

  return (
    <>
      {/* <PrivatePodcastWelcome 
        title={"Private Podcast"} 
        imageUrl={"https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"}        
      />
      <PrivatePodcastHowItWorks/>
      <TryPodcastingForFree/> */}
      <HeaderImage backgroundImage={"https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"}/>
      <HeaderSection title="Create a Private Podcast for Free" summary="Do you want to create a private podcast for your students, an internal podcast for employees or a subscription based podcast for your fans? " 
        paragraphs={[
          "With JustCast you can create a private podcast for free. Simply sign up, upload your podcast audio and change your feed settings to private. That’s it. Now you have a private podcast.",
          "JustCast integrates with Dropbox to provide an easy and affordable way for small podcasters to get started. Just upload your audio files to Dropbox and episodes will appear in your RSS feed that can be subscribed to from a podcast app.",
          "Perfect for teams, managers, teachers or subscription-based podcasts.",
        ]}/>
      <SectionLayout>
        <ParagraphsSection title="What is a Private Podcast Feed?"
          paragraphs={[
            "A private podcast feed is a personal RSS feed that is not available to the public.",
            "Each subscriber gets their own personal feed which they can use to subscribe to the podcast in their podcast app. Once subscribed they will receive new episodes on their phone and can download episodes to listen offline.",
            "JustCast hosts can send email invites to a list of subscribers asking them to sign up for the private podcast. They will also receive instructions on how to subscribe using their podcast app."
          ]}
        />
      </SectionLayout>
      <SectionLayout>
        <ParagraphsSection title="Private Podcasting With JustCast"
          paragraphs={[
            "You can create a private podcast for free using JustCast. The free plan uses your Dropbox account to host your shows (2GB storage, also free).",
          ]}
        />
        <br/>
        <hr/>
        <TryForFreeSection/> 
        <hr/>
      </SectionLayout>   
      <SectionLayout>
        <ParagraphsSection title="How To Create Your Private RSS Feed">
          <h4 className="font-weight-bold">1. Sign up to Justcast for free.</h4>
          <UnorderList items={["Sign up and follow the steps to create your podcast"]}/>
          <h4 className="font-weight-bold">2. Set your podcast’s RSS feed to private.</h4>
          <UnorderList items={["From your podcast overview, go to Settings > Advanced > Members Private Feed and turn it on"]}/>
          <h4 className="font-weight-bold">3. Invite your subscribers.</h4>
          <UnorderList items={["Go to the Private Subscribers page from your podcast overview and add subscribers using their email addresses. You can then send them email invites or instructions on how to subscribe."]}/>
          <h4 className="font-weight-bold">4. Publish your podcast episodes!</h4>
          <UnorderList items={["Publish your episodes and subscribers can listen in their podcast app or via your podcast website."]}/>
        </ParagraphsSection>
      </SectionLayout>   
      <SectionLayout>
        <h2 className="font-weight-bold">More About Private Podcasting</h2>
        <h3 className="font-weight-bold">Why Make a Podcast Private?</h3>
        <p>There are a number of use cases for private podcasting. Three common reasons to use a private podcast are outlined below. </p>
        <h4 className="font-weight-bold">Internal Podcasts For Work Teams &#38; Managers</h4>
        <p>With more people working from home many CEOs and managers are turning to private podcasts to communicate with their employees and keep remote teams engaged.</p>
        <h4 className="font-weight-bold">For Teachers &#38; Educators</h4>
        <p>Podcasts also offer opportunities for teachers and educators, as well as students. Teachers and professors can share audio-versions of classes and lectures for students to use for revision purposes.</p>
        <h4 className="font-weight-bold">For Invite-Only Premium Content</h4>
        <p>Private podcast feeds are perfect for offering bonus content to paying subscribers. For example, JustCast’s private feed can be shared with your Patreon subscribers using their email addresses.</p>
      </SectionLayout>  
      <SectionLayout>
        <h2 className="font-weight-bold">How The Private Podcast Feed Works</h2>
        <h3 className="font-weight-bold">What Exactly is a Private Podcast Feed?</h3>
        {/* TODO: INCLUDE DIAGRAM */}
        <p>A private podcast feed is an RSS feed that is not made available to the public. Each user has a unique RSS feed that they use to access the podcast. The feed requests that public platforms like iTunes do not index it in their system if it is discovered.</p>
        <p>To add private listeners hosts can add them by their email addresses and JustCast will send them a personal link. They can use this link to subscribe to the private feed on their podcast app.</p>
        <p>Alternatively JustCast allows you to create a password-protected podcast or a single URL private feed that can be shared by multiple people or just one individual.</p>
        <h4 className="font-weight-bold">How Private is it?</h4>
        <p>It’s important to understand that private podcast rss feeds do not guarantee complete privacy.</p>
        <p>Personal feeds can still be shared by individuals - either deliberately or accidentally - which could lead to your content becoming public (as with most forms of online communication). With this in mind private podcasting should not be used to share truly private information such as personal data or commercially sensitive company data.</p>
      </SectionLayout>
      <SectionLayout>
        <h2 className="font-weight-bold">Why Choose JustCast for Private Podcasting</h2>
        <UnorderList items={[
          "You own and control your content - even on the free plan. JustCast does not monetise free content with advertising like other free podcast hosting solutions.",
          "The free version provides a lot more space (2GB using Dropbox) than other free hosting solutions.",
          // "Professional-looking and customisable podcast website.",
          // "Detailed metrics and stats.",
          "Beautiful audiograms (audio-visual clips) you can share on social media.",
          "Scales with your podcast."
        ]} iconClassName="fe fe-check"/>
        <hr/>
        <TryForFreeSection/>
        <hr/>
      </SectionLayout>
      
      <LandingPagePricingTable/>
      <FAQs items={faqs}/>
    </>
  )
}

export default PrivatePodcastPage