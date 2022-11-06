import React from 'react';
import { useLocation } from 'react-router-dom';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title } = video.snippet;
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
        <h2>{}</h2>
      </div>
    </section>
  );
}
