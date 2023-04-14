import fetchMoviesByName from "./get-movie-by-name.js";
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=f7d7a9b2e374f67b5381a74b61fb7dc2';


export default async function getMovieDetails(movieName) {
  try {
    const response = await fetchMoviesByName(movieName);
    const movieId = response.results[0].id;
    const movieDetailsResponse = await fetch(`${BASE_URL}/movie/${movieId}${API_KEY}&language=uk`);
    if (!movieDetailsResponse.ok) {
      throw new Error(`Failed to fetch movie details for "${movieName}"`);
    }
    return await movieDetailsResponse.json();
  } catch (error) {
    console.log(error);
  }
}
