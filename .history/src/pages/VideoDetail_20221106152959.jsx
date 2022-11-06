import React from 'react';
import { useLocation } from 'react-router-dom';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();

  console.log(video);
  return (
    <section>
      <iframe id='player' src='' width='100%' height='640' src=`http://www.youtube.com/embed/` rameborder='0'></iframe>
    </section>
  );
}
