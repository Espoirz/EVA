import axios from 'axios';
export const fetchAnimals = () =>
  axios.get('/api/animals', { headers: authHeader() }).then(r => r.data);
export const createAnimal = (data: any) =>
  axios.post('/api/animals', data, { headers: authHeader() }).then(r => r.data);

function authHeader() {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
}
