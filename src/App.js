import React from 'react';
import {Provider as PodcastProvider} from './context/PodcastContext'
import {Provider as PlayerProvider} from './context/PlayerContext'
import {Provider as LocalStorageProvider} from './context/LocalStorageContext'
import {Provider as ThemeContext} from './context/ThemeContext'
import MainRoutes from './components/MainRoutes'

function App() {
  return (
    <ThemeContext>
      <PodcastProvider>
        <PlayerProvider>
          <LocalStorageProvider>
            <MainRoutes/>
          </LocalStorageProvider>
        </PlayerProvider>      
      </PodcastProvider>    
    </ThemeContext>
  );
}

export default App;
