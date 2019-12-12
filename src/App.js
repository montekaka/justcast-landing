import React from 'react';
import {Provider as PodcastProvider} from './context/PodcastContext'
import MainRoutes from './components/MainRoutes'

function App() {
  return (
    <PodcastProvider>
      <MainRoutes/>
    </PodcastProvider>    
  );
}

export default App;
