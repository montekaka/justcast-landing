import React from 'react';
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider, MixpanelConsumer } from 'react-mixpanel'
import {Provider as PodcastProvider} from './context/PodcastContext'
import {Provider as PlayerProvider} from './context/PlayerContext'
import MainRoutes from './components/MainRoutes'

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN);

function App() {
  return (
    <MixpanelProvider mixpanel={mixpanel}>
      <PodcastProvider>
        <PlayerProvider>
          <MainRoutes/>
        </PlayerProvider>      
      </PodcastProvider>    
    </MixpanelProvider>
  );
}

export default App;
