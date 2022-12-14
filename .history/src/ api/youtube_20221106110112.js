import axios from 'axios';

export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: { part: 'snippet', maxResults: 25, type: 'video', q: keyword },
      })
      .then((res) => {
        console.log(res);
        return res.data.items;
      })
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          chart: 'mostPopular',
        },
      })
      .then((res) => {
        return res.data.items;
      });
  }
}
