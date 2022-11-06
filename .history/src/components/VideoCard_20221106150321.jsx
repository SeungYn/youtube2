import React from 'react';
import { formatAgo } from '../util/date';

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <img className='w-full' src={thumbnails.medium.url} alt={title} />
      <div>
        <p className='font-semibold my-2'>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
