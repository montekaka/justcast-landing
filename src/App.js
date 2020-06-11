import React from 'react';
import {Provider as PodcastProvider} from './context/PodcastContext'
import {Provider as PlayerProvider} from './context/PlayerContext'
import {Provider as LocalStorageProvider} from './context/LocalStorageContext'
import MainRoutes from './components/MainRoutes'

function App() {
  return (
      <PodcastProvider>
        <PlayerProvider>
          <LocalStorageProvider>
            <MainRoutes/>
          </LocalStorageProvider>
        </PlayerProvider>      
      </PodcastProvider>    
  );
}

export default App;
