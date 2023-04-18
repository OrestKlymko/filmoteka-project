export class Pagination {
  import  {getPopularMovies} from './get-popular-movies';
import Pagination from 'tui-pagination';
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes

const paginationEl = document.querySelector('.tui-pagination');

paginationEl.addEventListener('click', pageButtonNext);

const getPopularMoviesAPI = new getPopularMovies();
let currentPage = 1;

<<<<<<< Updated upstream
getPopularMoviesAPI
  .fetchPopularMovies()
  .then(data => {
    if (data.results.length === 0 || !data) {
      return;
    }
    paginationFunction(data);
  })
  .catch(error => {
    console.log(error);
  });

paginationFunction(el) {
  const container = refs.paginationEl;
  const options = {
    totalItems: 10000,
    itemsPerPage: `${el.results.length}`,
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

  const pagination = new Pagination(container, options);

  pagination.on('afterMove', function (eventData) {
    currentPage = eventData.page;
  });
=======
    getPopularMoviesAPI.fetchPopularMovies().then(el => {
      el.page = currentPage;

      const movieWrapperEl = document.querySelector('.js-movies-wrapper');
      movieWrapperEl.innerHTML = '';

      createMarkUp(el.results);
    });
  }
>>>>>>> Stashed changes
}

pageButtonNext() {
  getPopularMoviesAPI.page = currentPage;

  getPopularMoviesAPI.fetchPopularMovies().then(el => {
    el.page = currentPage;
  });
}
}


