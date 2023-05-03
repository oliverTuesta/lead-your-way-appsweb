import axios from 'axios';

export class UsersApiService {
  url = 'http://localhost:3000/bicycles';

  getAll() {
    return axios.get('https://jsonplaceholder.typicode.com/bicycles');
  }

  getById(id) {
    return axios.get(`${this.url}/${id}`);
  }

  create(bicycle) {
    return axios.post(this.url, bicycle);
  }

  update(bicycle) {
    return axios.put(`${this.url}/${bicycle.id}`, bicycle);
  }

  delete(id) {
    return axios.delete(`${this.url}/${id}`);
  }
}
