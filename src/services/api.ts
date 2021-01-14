import axios from 'axios';

const api = axios.create({
  baseURL: 'https://happy-samanta.herokuapp.com',
})

export default api;