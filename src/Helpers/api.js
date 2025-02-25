import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.example.com',
  //   timeout: 30000,
});
