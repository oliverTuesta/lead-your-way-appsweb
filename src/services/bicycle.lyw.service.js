import axios from 'axios';

export class BicycleApiService {
  url = 'https://leadyourway.azurewebsites.net/api/bicycle';

  async getAll() {
    const response = await axios.get(this.url);
    return response.data;
  }

  async getById(id) {
    const response = await axios.get(`${this.url}/${id}`);
    return response.data;
  }

  async getByUserId(id) {
    const response = await axios.get(`${this.url}/filterByUserId/${id}`);
    return response.data;
  }

  async create(bicycle) {
    return axios.post(this.url, bicycle);
  }

  async update(bicycle) {
    return axios.put(`${this.url}/${bicycle.id}`, bicycle);
  }

  async delete(id) {
    return axios.delete(`${this.url}/${id}`);
  }
}
