import React from 'react';

export default function VideoCard({ video }) {
  const { title, thumbnails } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
      </div>
    </li>
  );
}
