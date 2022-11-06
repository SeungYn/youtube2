import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  console.log(video);
  return (
    <section>
      <iframe
        id='player'
        width='100%'
        height='640'
        src={`http://www.youtube.com/embed/${video.id}`}
        frameBorder='0'
      />

      <div>
        <h2>{title}</h2>
        <ChannelInfo id={channelId} name={channelTitle} />
        <pre></pre>
      </div>
    </section>
  );
}
