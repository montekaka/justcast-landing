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
import ListItemWithLink from '../components/landingpages/ListItemWithLink'
import FAQShape from '../components/landingpages/FAQShape'

const ChurchPodcasting = () => {

  Mixpanel.track('Church Podcast landing page loaded', {"First Time": "TRUE"}, () => {
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
      <HeaderImage backgroundImage={"https://images.unsplash.com/photo-1501808503570-36559610f95e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1565&q=80"}/>
      <HeaderSection title="Podcast Hosting for Churches" summary="Creating a podcast for your church? Get unlimited episodes, analytics and a podcast website for free with JustCast." 
        paragraphs={[
          "Podcasting is a great idea for churches who want to connect with their congregations and communities remotely but creating a podcast can get complicated and expensive.",
          "JustCast offers an easy and affordable way to get started with podcasting today with a complete suite of podcasting features including a website, embeddable players for your website / social media, and private feeds for closed communities.",
        ]}/>
      <SectionLayout>
        <ParagraphsSection title="How JustCast Works"
          paragraphs={[
            "JustCast integrates with Dropbox to offer free hosting from your Dropbox account (also free). Just upload your audio files to Dropbox and your episodes will appear in JustCast and be added to your RSS feed. The RSS can then be distributed to iTunes, Spotify and other podcast platforms or you can share the RSS link to subscribe from any podcast app."
          ]}
        />
      </SectionLayout>
      <SectionLayout>
        <ParagraphsSection title="Podcasting for Churches"
          paragraphs={[
            "With 80 million people in the US now listening to podcasts on a weekly basis (Edison Research), podcasting is increasingly becoming a way to speak directly to engaged listeners.",
            "For Churches starting a podcast can be as simple as recording weekly sermons and publishing as an audio file. This is a great way to get started but there’s more you can do with a Church podcast."
          ]}
        />
        <p>For example these ideas:</p>
        <UnorderList items={[
          "Community updates and providing a platform for participation of churchgoers in the podcast.",
          "Connecting with other churches and creating a network of church podcasts.",
          "Promoting the church to a wider community and growing your congregation."
        ]} iconClassName="fe fe-check"/>        
      </SectionLayout>   
      <SectionLayout>
        <ParagraphsSection title="5 Tips for a Successful Church Podcast">
          <h4 className="font-weight-bold">1. Be Consistent</h4>
          <UnorderList items={["Listening to podcasts is a habitual activity for many people. Listeners expect episodes to come out at a consistent time each week. If not they will not be able to make listening part of a routine and often miss the episodes."]}/>
          <h4 className="font-weight-bold">2. Tell People About It</h4>
          <UnorderList items={["Tell and remind people that you are publishing the podcast. Use Facebook or email addresses as well as in-person. Mention within sermons that they are also available as podcasts and how to find them."]}/>
          <h4 className="font-weight-bold">3. Ease of access</h4>
          <UnorderList items={["Make it easy to access the podcast. For example distribute to platforms like Apple Podcasts, Google Podcasts and Spotify and make sure the title is easily searchable. For those who are not used to listening to podcasts give them a training session on how to listen. Alternatively you can direct listeners to the podcast website (included with JustCast)."]}/>
          <h4 className="font-weight-bold">4. Audio Quality</h4>
          <UnorderList items={["Creating high quality audio doesn’t mean you have to spend thousands on equipment. It’s possible to record a good quality podcast on a smartphone. Take steps to ensure the audio quality is as good as it can be by removing background noise and finding a good acoustic environment."]}/>
          <h4 className="font-weight-bold">5. Create Evergreen Content</h4>
          <UnorderList items={["It may be tempting to treat the podcast as a weekly update like a newsletter, but it’s also possible to create evergreen episodes that people can listen back to at any time. For example based around a theme or topic. If you plan to do this avoid overly long news updates at the start of the episode and instead provide an intro for the topic and theme as well as including this in the episode title and description."]}/>          
        </ParagraphsSection>
      </SectionLayout>   
      
      <SectionLayout>
        <h2 className="font-weight-bold">Why Use JustCast for Church Podcasting</h2>
        <UnorderList items={[
          "You own and control your content - even on the free plan. JustCast does not monetise free content with advertising like other free podcast hosting solutions.",
          "The free version provides a lot more space (2GB using Dropbox) than other free hosting solutions.",
          "Professional-looking and customisable podcast website.",
          "Embeddable players to add to your own website.",
          "Detailed metrics and stats about your listenership.",
          "Private podcast feeds to create an invite-only podcast.",
          "Beautiful audiograms (audio-visual clips) you can share on social media.",
          "JustCast plans will scale with your podcast as you grow."
        ]} iconClassName="fe fe-check"/>
        <hr/>
        <TryForFreeSection/>
        <hr/>
      </SectionLayout>
      
      <LandingPagePricingTable hidePersonal={true}/>
      <FAQShape/>
      <section className="pt-15 bg-dark">
        <div className="container pt-8 pt-md-11">          
          <h1 className="display-4 text-white text-center">More Church Podcast Resources</h1>
          <p className="lead mb-7 text-center text-muted">Below you can find more resources for creating a podcast for your church.</p>
          <h2 className="font-weight-bold text-white">Church &#38; Sermon Podcast Ideas &#38; Topics</h2>
          <ul>
            <li className="text-white"><a href="https://ministrypass.com/church-podcast-ideas/" className="text-white">Church Podcast Ideas - ministrypass.com</a></li>
            <li className="text-white"><a href="https://get.tithe.ly/blog/church-podcast" className="text-white">How to Start Your Church Podcast - Tithely</a></li>
          </ul>
          <h2 className="font-weight-bold text-white">General Podcast Ideas &#38; Tips</h2>
          <ul>
            <li className="text-white"><a href="https://www.thepodcasthost.com/recording-skills/how-to-record-a-podcast/" className="text-white">How To Record a Podcast - The Podcast Host</a></li>
            <li className="text-white"><a href="https://medium.com/@mkramer/200-ideas-for-your-next-podcast-5de9cd85e4e1" className="text-white">200 Ideas for Your Next Podcast</a></li>
          </ul>  
          <h2 className="font-weight-bold text-white">Audio Quality</h2>
          <ul>
            <li className="text-white"><a href="https://www.weeditpodcasts.com/5-simple-tips-for-improving-your-podcast-sound-quality/" className="text-white">5 Simple Tips to Improve Podcast Audio Quality</a></li>    
          </ul>
          <h2 className="font-weight-bold text-white">Software for Recording and Editing</h2>
          <ListItemWithLink items={[
            {text: "Audiomass - Free audio editing in your browser", link: "https://audiomass.co/"},
            {text: "Audacity - Free audio recording and editing software for Windows & Mac", link: "https://www.audacityteam.org/download/"},
            {text: "Garage Band - Easy audio editing software for Mac", link: "https://www.apple.com/mac/garageband/"},
            {text: "Voice Recorder - Simple free Android app", link: "https://play.google.com/store/apps/details?id=com.media.bestrecorder.audiorecorder"},
            {text: "iPhone - The simplest way is to use the built in voice memo app."}
          ]}/>
          <h2 className="font-weight-bold text-white">Audio Equipment</h2>
          <ListItemWithLink items={[
            {text: "The Podcasting Starter Kit", link: "https://www.podcastinsights.com/podcast-starter-kit/"},
            {text: "Best Podcast Equipment for Beginners and Pros", link: "https://www.podcastinsights.com/podcast-equipment/"}
          ]}/>
          <div className="row"></div>
        </div>                    
      </section>
    </>
  )
}

export default ChurchPodcasting