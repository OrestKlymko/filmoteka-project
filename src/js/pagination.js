
  import  {getPopularMovies} from './get-popular-movies';
import Pagination from 'tui-pagination';
import createMarkUp from './make-markup-card';

let currentPage = 1;
export class CustomPagination {
  constructor() {
    const paginationEl = document.querySelector('.tui-pagination');
    paginationEl.addEventListener('click', this.pageButtonNext);
    const getPopularMoviesAPI = new getPopularMovies();
  }
  paginationFunction(el) {
    const container = document.querySelector('.tui-pagination'); //
    const options = {
      totalItems: 10000,
      itemsPerPage: `${el.length}`,
      visiblePages: 5,
      page: 1,
      centerAlign: false,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
      template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage:
          '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</a>',
      },
    };
    const paginationEl = document.querySelector('.tui-pagination');
    paginationEl.addEventListener('click', pageButtonNext);
    const getPopularMoviesAPI = new getPopularMovies();
    let currentPage = 1;
    getPopularMoviesAPI.fetchPopularMovies().then(el => {
      el.page = currentPage;
      const movieWrapperEl = document.querySelector('.js-movies-wrapper');
      movieWrapperEl.innerHTML = '';
      createMarkUp(el.results);
    });
  }

  pageButtonNext() {
    getPopularMoviesAPI.page = currentPage;
    getPopularMoviesAPI.fetchPopularMovies().then(el => {
      el.page = currentPage;
    });
  }
}
