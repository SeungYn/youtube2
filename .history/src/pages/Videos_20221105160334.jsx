import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();
  const { isLoading, error, data: videos } = useQuery();
  return <div>{`Videos ${keyword ? keyword : '핫'} `}</div>;
}
