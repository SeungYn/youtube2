import { useContext } from 'react';
import { createContext } from 'react';
import FakeYoutube from '../ api/fakeYoutube';
import Youtube from '../ api/youtube';

export const YoutubeApiContext = createContext();

const youtube = new FakeYoutube();

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
