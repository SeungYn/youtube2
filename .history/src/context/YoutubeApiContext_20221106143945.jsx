import { useContext } from 'react';
import { createContext } from 'react';
import FakeYoutube from '../ api/fakeYoutube';
import FakeYoutubeClient from '../ api/fakeYoutubeClient';
import Youtube from '../ api/youtube';
import YoutubeClient from '../ api/youtubeClient';

export const YoutubeApiContext = createContext();

//const client = new YoutubeClient();
const client = new FakeYoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}