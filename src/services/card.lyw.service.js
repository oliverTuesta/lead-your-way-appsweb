import axios from 'axios';

const API_URL = 'https://leadyourway.azurewebsites.net/api/card';
//const API_URL = 'http://localhost:5188/api/user';

export default class CardService {
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

  async create(card) {
    return axios.post(API_URL, card);
  }

  async update(card) {
    return axios.put(`${API_URL}/${card.id}`, card);
  }

  async delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export const cardService = new CardService();
