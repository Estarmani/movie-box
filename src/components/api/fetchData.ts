import axios from 'axios';

export const fetchMovies = async () => {
  const response = await axios.get('/feed/sample.json');
  return response.data;
};
