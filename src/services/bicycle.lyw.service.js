import axios from 'axios';

const API_URL = 'https://leadyourway.azurewebsites.net/api/bicycle';

export default class BicycleService {
  async getAll() {
    const response = await axios.get(API_URL);
    return response.data;
  }

  async getById(id) {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  }

  async getByUserId(id) {
    const response = await axios.get(`${API_URL}/filterByUserId/${id}`);
    return response.data;
  }

  async create(bicycle) {
    return axios.post(API_URL, bicycle);
  }

  async update(bicycle) {
    return axios.put(`${API_URL}/${bicycle.id}`, bicycle);
  }

  async delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export const bicycleService = new BicycleService();
