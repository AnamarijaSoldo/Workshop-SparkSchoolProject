import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
});

export default http;
