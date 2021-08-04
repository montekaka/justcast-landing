import {podcastAtom, episodesAtom, addPodcastAtom, addEpisodesAtom, updatePlayingEpisodeAtom} from './fetchAtom';
import {playerAtom, addPlayerAtom, 
  addPlayerRefAtom,
  updatePlayerStatus,
  toggleModal,
  changeEpisodeAtom,
} from './playerAtom'

import {notificationAtom, closeNotifcationAtom, addNotifcationAtom} from './NotificationAtom';

export {
  podcastAtom,
  addEpisodesAtom,
  episodesAtom,
  addPodcastAtom,
  playerAtom,
  addPlayerAtom,
  addPlayerRefAtom,
  updatePlayerStatus,
  toggleModal,
  changeEpisodeAtom,
  notificationAtom,
  addNotifcationAtom,
  closeNotifcationAtom,
  updatePlayingEpisodeAtom
}