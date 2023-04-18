import createMarkUp from './make-markup-card';
import { getPopularMovies } from './get-popular-movies';
import { CustomPagination } from './pagination';
import { Pagination } from 'tui-pagination';

const movieWrapperEl = document.getElementById('uk');

const getPopularMoviesIns = new getPopularMovies();
const paginationConstructor = new CustomPagination();

// movieWrapperEl.innerHTML = ''

const popularMoviesPageRendering = async () => {
  try {
    const { results } = await getPopularMoviesIns.fetchPopularMovies();

    createMarkUp(results);
    if (results.length === 0 || !results) {
      return;
    }

    paginationConstructor.paginationFunction(results);
  } catch (err) {
    console.log(err);
  }
};

popularMoviesPageRendering();
