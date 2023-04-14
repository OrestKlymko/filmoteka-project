'use strict';

import { getPopularMovies } from './get-popular-movies';
import Pagination from 'tui-pagination';

const refs = {
  pageButton: document.querySelector('.tui-pagination'),
};

const getPopularMoviesAPI = new getPopularMovies();
let pageCount = 1;

refs.pageButton.addEventListener('click', onNextPage);

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

  console.log(options);
  console.log(pageCount);
  const pagination = new Pagination(container, options);
}

getPopularMoviesAPI
  .fetchPopularMovies()
  .then(data => {
    markuplist(data);
    // refs.listEl.innerHTML = filmList;
    pagination(data);
  })
  .catch(error => {
    console.log(error);
  });

function onNextPage(event) {
  pageCount = Number(event.target.textContent);
  console.log(pageCount);
  pageButtonNumber();
  // pageButtonNext();
}

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

function pageButtonNumber() {
  getPopularMoviesAPI.page = pageCount;

  if (Number.isInteger(getPopularMoviesAPI.page)) {
    getPopularMoviesAPI.fetchPopularMovies().then(el => {
      markuplist(el);

      // refs.listEl.innerHTML = filmList;
    });
  }
}
