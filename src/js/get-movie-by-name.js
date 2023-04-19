import {spin, stopSpin} from './notiflix-spin'

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=f7d7a9b2e374f67b5381a74b61fb7dc2';

export default async function fetchMoviesByName(movieName) {
  spin()
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie${API_KEY}&query=${movieName}&language=en-US`
    );
    const data = await response.json();
    if (data.results.length === 0) {
      throw new Error(`No movies found with name "${movieName}"`);
    }
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    stopSpin()
  }
}
