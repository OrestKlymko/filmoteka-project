import { getPopularMovies } from './get-popular-movies';
import Pagination from 'tui-pagination';
import createMarkUp from './make-markup-card';

let currentPage = 1;
class CustomPagination {
  constructor() {
    const paginationEl = document.querySelector('.tui-pagination');

    paginationEl.addEventListener('click', this.pageButtonNext);
  }

  paginationFunction(el) {
    const container = document.querySelector('.tui-pagination');
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

    const pagination = new Pagination(container, options);

    pagination.on('beforeMove', function (eventData) {
      currentPage = eventData.page;
    });

    pagination.on('afterMove', function (eventData) {
      const getPopularMoviesAPI = new getPopularMovies();
      getPopularMoviesAPI.page = currentPage;

      getPopularMoviesAPI.fetchPopularMovies().then(el => {
        el.page = currentPage;

        const movieWrapperEl = document.querySelector('.js-movies-wrapper');
        movieWrapperEl.innerHTML = '';
        createMarkUp(el.results);
      });
    });
  }

  pageButtonNext(event) {
    event.preventDefault();
  
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    const container = document.querySelector('.tui-pagination');
    const pagination = new Pagination(container);
    // pagination.movePage(parseInt(event.target.innerText));
  }
}

export default CustomPagination;
