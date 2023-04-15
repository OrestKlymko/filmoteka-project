import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=f7d7a9b2e374f67b5381a74b61fb7dc2';

export default function getTrailer(id) {
  return axios.get(`${BASE_URL}/movie/${id}/videos${API_KEY}&language=en-US`);
}