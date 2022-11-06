import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function RelatedVideos({ id }) {
  return <div>{id}</div>;
}
