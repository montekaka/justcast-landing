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
import PrivatePodcastWelcome from './../components/landingpages/PrivatePodcastWelcome'
import PrivatePodcastHowItWorks from './../components/landingpages/PrivatePodcastHowItWorks'
import TryPodcastingForFree from './../components/TryPodcastingForFree'

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
      </SectionLayout>
    </>
  )
}

export default PrivatePodcastPage