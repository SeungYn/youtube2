import axios from 'axios';

export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#modtPopular();
  }

  async #searchByKeyword(keyword) {
    return axios
      .get(`/videos/search.json`)
      .then((res) => {
        return res.data.items;
      })
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
}
