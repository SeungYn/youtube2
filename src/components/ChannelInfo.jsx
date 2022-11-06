import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ['channel', id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
  );
  return (
    <div className='flex my-4 mb-8 items-center'>
      {url && <img src={url} className='w-10 h-10 rounded-full' alt={name} />}
      <p className='text-lg font-medium ml-2'>{name}</p>
    </div>
  );
}
