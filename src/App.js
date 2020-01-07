import React from 'react';
import {Provider as PodcastProvider} from './context/PodcastContext'
import {Provider as PlayerProvider} from './context/PlayerContext'
import MainRoutes from './components/MainRoutes'



function App() {
  return (
    
      <PodcastProvider>
        <PlayerProvider>
          <MainRoutes/>
        </PlayerProvider>      
      </PodcastProvider>    
    
  );
}

export default App;
