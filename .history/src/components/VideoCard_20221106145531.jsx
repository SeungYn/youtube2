import React from 'react';
import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';
register('ko');
export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{format(publishedAt)}</p>
      </div>
    </li>
  );
}
