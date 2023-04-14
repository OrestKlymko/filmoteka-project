import Pagination from 'tui-pagination';

const refs = {
  pageButton: document.querySelector('.tui-pagination'),
};
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

getPopularMovies()
  .then(data => {
    console.log(data);
    markuplist(data);
    refs.listEl.innerHTML = imagesList;
    pagination(data);
  })
  .catch(error => {
    console.log(error);
  });

function onNextPage(event) {
  pageCount = event.target.textContent;
  console.log(pageCount);
  // pagination.setData(pagination, page, pageCount);
  loadMore();
}
