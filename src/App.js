import React from 'react';
import { Provider as JotaiProvider} from "jotai";
import {Provider as PodcastProvider} from './context/PodcastContext'
import {Provider as PlayerProvider} from './context/PlayerContext'
import {Provider as LocalStorageProvider} from './context/LocalStorageContext'
import {Provider as ThemeContext} from './context/ThemeContext'
import {Provider as PublicPodcastContext} from './context/PublicPodcastContext'
import MainRoutes from './components/MainRoutes'

function App() {
  return (
    <PublicPodcastContext>
      <JotaiProvider>
        <ThemeContext>
          <PodcastProvider>
            <PlayerProvider>
              <LocalStorageProvider>
                <MainRoutes/>
              </LocalStorageProvider>
            </PlayerProvider>      
          </PodcastProvider>    
        </ThemeContext>
      </JotaiProvider>
    </PublicPodcastContext>
  );
}

export default App;
