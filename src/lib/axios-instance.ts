import axios from 'axios';
import config from './config';

const api = axios.create({
  baseURL: config.APIBASEURL,
});

const setContentType = (data: unknown) => {
  if (data instanceof FormData) {
    delete api.defaults.headers['Content-Type'];
  } else {
    axios.defaults.headers['Content-Type'] = 'application/json';
  }
};

const setToken = (token: string | null) => {
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers['Authorization'];
  }
};

export { api, setContentType, setToken };
