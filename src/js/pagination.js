'use strict';

import { getPopularMovies } from './get-popular-movies';
import Pagination from 'tui-pagination';

const refs = {
  pageButton: document.querySelector('.tui-pagination'),
};

refs.paginationEl.addEventListener('click', pageButtonNext);

const getPopularMoviesAPI = new getPopularMovies();
let currentPage = 1;

function pagination(el) {
  const container = document.getElementById('tui-pagination-container');
  const options = {
    totalItems: `${el.total_results}`,
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
}

getPopularMoviesAPI
  .fetchPopularMovies()
  .then(data => {
    markuplist(data);
    // refs.listEl.innerHTML = filmList;
    paginationFunction(data);
  })
  .catch(error => {
    console.log(error);
  });

function pagination(el) {
  const container = document.getElementById('tui-pagination-container');
  const options = {
    totalItems: `${el.total_results}`,
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
    console.log(currentPage);
  });
}

function pageButtonNext() {
  getPopularMoviesAPI.page = currentPage;
  console.log(getPopularMoviesAPI.page);
  // pagination.getCurrentPage();

  getPopularMoviesAPI.fetchPopularMovies().then(el => {
    console.log(el);
    markuplist(el);

    refs.listEl.innerHTML = filmList;

    // return getPopularMoviesAPI.page;
  });
}
