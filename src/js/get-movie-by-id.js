import {spin, stopSpin} from './notiflix-spin'

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=f7d7a9b2e374f67b5381a74b61fb7dc2';

export default async function getMovieById(id) {
  spin()
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}${API_KEY}&language=en-US`);
    if (!response.ok) {
        throw new Error(`Failed to fetch movie details for movie with id "${id}"`);
      }
    return await response.json();

  } catch (error) {
    console.log(error);
  } finally {
    stopSpin()
  }
}
