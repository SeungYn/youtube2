import axios from 'axios';

export const search = async (keyword) => {
  return axios
    .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
    .then((res) => {
      console.log(res);
      return res.data.items;
    });
};
