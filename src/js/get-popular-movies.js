// import {spin, stopSpin} from './notiflix-spin'
import {showSpinner, hideSpinner} from './spinner'
export class getPopularMovies {
  BASE_URL = 'https://api.themoviedb.org/3';
  API_KEY = '?api_key=f7d7a9b2e374f67b5381a74b61fb7dc2';
  page = 1;

  async fetchPopularMovies() {
    showSpinner()
    try {
      const response = await fetch(
        `${this.BASE_URL}/movie/popular${this.API_KEY}&page=${this.page}&language=en-US`
      );
      return await response.json();

    } catch (error) {

      throw new Error(error.message);
    } finally {
      hideSpinner()
    }
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}