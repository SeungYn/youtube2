import axios from 'axios';

export default class FakeYoutube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.httpClient
      .get(`/search`, {
        params: { part: 'snippet', maxResults: 25, type: 'video', q: keyword },
      })
      .then((res) => {
        return res.data.items;
      })
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular(keyword) {
    return axios.get(`/videos/popular.json`).then((res) => {
      return res.data.items;
    });
  }
}
