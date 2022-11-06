import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import FakeYoutube from '../ api/fakeYoutube';
import Youtube, { search } from '../ api/youtube';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const aa = useYoutubeApi();
  console.log(aa.search(keyword));
  //키워드별로 캐시
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    const youtube = new Youtube();
    return youtube.search(keyword);
  });
  return (
    <>
      <div>{`Videos ${keyword ? keyword : '핫'} `}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
