import axios from 'axios';

export class UsersApiService {
  url = 'http://localhost:3000/users';

  getAll() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
  }

  getById(id) {
    return axios.get(`${this.url}/${id}`);
  }

  create(user) {
    return axios.post(this.url, bicycle);
  }

  update(user) {
    return axios.put(`${this.url}/${bicycle.id}`, bicycle);
  }

  delete(id) {
    return axios.delete(`${this.url}/${id}`);
  }
}
