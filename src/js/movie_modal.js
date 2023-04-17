import getMovieById from './get-movie-by-id';

const modal = document.querySelector('.modal');
const title = document.querySelector('.js-movie-title');
const poster = document.querySelector('.js-movie-poster');
const vote = document.querySelector('.js-movie-vote');
const votes = document.querySelector('.js-movie-votes');
const popularity = document.querySelector('.js-movie-popularity');
const originalTitle = document.querySelector('.js-movie-original-title');
const genre = document.querySelector('.js-movie-genre');
const overview = document.querySelector('.js-movie-excerpt');

const closeButton = document.querySelector('.modal__btn--close');
closeButton.addEventListener('click', closeModal);

const movieList = document.querySelector('.js-movie-list');

movieList.addEventListener('click', event => {
  const movieCard = event.target.closest('.card__item');
  if (!movieCard) return;

  const movieId = movieCard.dataset.id;
  getMovieById(movieId)
    .then(data => {
      poster.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
      title.textContent = data.title;
      vote.textContent = `${data.vote_average}`;
      votes.textContent = `${data.vote_count}`;
      popularity.textContent = `${data.popularity}`;
      originalTitle.textContent = data.original_title;
      genre.textContent = data.genres.map(genre => genre.name).join(', ');
      overview.textContent = data.overview;
    })
    .catch(error => {
      console.error(error);
    });
  modal.classList.add('modal--visible');
});

document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    closeModal();
  }
});

document.addEventListener('click', e => {
  if (!modal.contains(e.target) && modal.classList.contains('modal--visible')) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove('modal--visible');
}
