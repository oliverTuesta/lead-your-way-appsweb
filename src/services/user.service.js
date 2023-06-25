import axios from 'axios';

const API_URL = 'http://localhost:5188/api/user';
// const API_URL = 'https://leadyourway.azurewebsites.net/api/bicycle';

export default class UserService {
  async getAll() {
    const response = await axios.get(API_URL);
    return response.data;
  }

  async getById(id) {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  }

  async create(user) {
    return axios.post(API_URL, user);
  }

  async update(user) {
    return axios.put(`${API_URL}/${bicycle.id}`, user);
  }

  async delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }

  async login(user) {
    const response = await axios.post(`${API_URL}/login`, user);
    return response.data;
  }
}

export const userService = new UserService();
