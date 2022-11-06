import React from 'react';

export default function VideoCard({ video }) {
  const { title, thumbnails } = video.snippet;
  return <li>{video.snippet.title}</li>;
}
