import { createMarkUp } from './search-movie-page-rendering'
// import {getPopularMovies} from './get-popular-movies'

//запит на бекенд, видалити після імпорту
export class getPopularMovies {
  BASE_URL = 'https://api.themoviedb.org/3';
  API_KEY = '?api_key=f7d7a9b2e374f67b5381a74b61fb7dc2';
  page = 1;

  async fetchPopularMovies() {
    try {
      const response = await fetch(
        `${this.BASE_URL}/movie/popular${this.API_KEY}&page=${this.page}&language=en-US`
      );
      return await response.json();

    } catch (error) {

      throw new Error(error.message);
    }
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}

const movieWrapperEl = document.querySelector('.js-movies-wrapper') 

const getPopularMoviesIns = new getPopularMovies()

movieWrapperEl.innerHTML = ''

const popularMoviesPageRendering = async() => {
    try {
        const { results } = await getPopularMoviesIns.fetchPopularMovies()

        console.log(results)

        createMarkUp(results)

    } catch (err) {
        console.log(err)
    }
}
