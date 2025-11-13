import axios from 'axios';
import Cookies from 'js-cookie'; 

const baseURL = (process.env.NEXT_PUBLIC_API_URL || '') + '/api';

const api = axios.create({
  baseURL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const accessToken = Cookies.get('accessToken');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;