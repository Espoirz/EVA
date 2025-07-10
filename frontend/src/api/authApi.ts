import axios from 'axios';

export const login = (u: string, p: string) =>
  axios.post('/api/auth/login', { username: u, password: p })
       .then(res => res.data.token);

export const register = (u: string, p: string, role: string) =>
  axios.post('/api/auth/register', { username: u, password: p, role });
