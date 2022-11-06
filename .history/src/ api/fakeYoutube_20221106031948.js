import axios from 'axios';

export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return axios
      .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
      .then((res) => {
        console.log(res);
        return res.data.items;
      });
  }
}
