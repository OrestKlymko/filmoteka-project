import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=f7d7a9b2e374f67b5381a74b61fb7dc2';

export async function getTrailer(id) {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/videos${API_KEY}&language=en-US`);
    const trailer = response.data.results.find(video => video.type === 'Trailer');
    if (trailer) {
      const videoSrc = `https://www.youtube.com/embed/${trailer.key}`;
      return videoSrc;
    }
  } catch (error) {
    console.error(`Error fetching trailer: ${error}`);
    throw error;
  }
}
