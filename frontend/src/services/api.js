import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const authAPI = {
  login: (userData) => 
    axios.post(`${API_BASE_URL}/user/login`, userData, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    }),

  register: (userData) =>
    axios.post(`${API_BASE_URL}/user/register`, userData, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    }),

  logout: () =>
    axios.get(`${API_BASE_URL}/user/logout`, {
      withCredentials: true
    })
};