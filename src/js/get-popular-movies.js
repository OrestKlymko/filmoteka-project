const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=f7d7a9b2e374f67b5381a74b61fb7dc2';


export default async function getPopularMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular${API_KEY}&language=uk&page=1`
    );    
    return await response.json();

  } catch (error) {

    console.log(error);
  }
}

