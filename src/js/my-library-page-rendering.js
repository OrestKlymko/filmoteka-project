import { watchedMovies, queuedMovies } from './local-storage';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
  distance: '10px',
    opacity: 1,
  timeout: 3000,
  // ...
});

const movieWrapperEl = document.querySelector('.lib-container');
const myLibraryBtnEl = document.querySelector('.menu__link__library');
const watchedBtnEl = document.querySelector('.library__link__watched');
const queredBtnEl = document.querySelector('.library__link__queue');

myLibraryBtnEl.addEventListener('click', handleWatchedMoviesClick);
watchedBtnEl.addEventListener('click', handleWatchedMoviesClick);
queredBtnEl.addEventListener('click', handleQueuedMoviesClick);

myLibraryBtnEl.addEventListener('click', handleWatchedMoviesClick);

createLibMarkUp(watchedMovies);
function handleWatchedMoviesClick() {
  movieWrapperEl.innerHTML = '';
  try {
    if (watchedMovies.length === 0) {
      clearPage();
      return;
    }

    createLibMarkUp(watchedMovies);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function handleQueuedMoviesClick() {
  movieWrapperEl.innerHTML = '';
  try {
    if (queuedMovies.length === 0) {
      clearPage();
      return;
    }
    createLibMarkUp(queuedMovies);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function clearPage() {
  //   return  markUp = `<p>Sorry, there is no any movie in your library yet</p>
  // <svg class="icon icon-images"><use xlink:href="#icon-images"></use></svg> `

  return Notiflix.Notify.info(
    'Sorry, there is no any movie in your library yet.'
  );
}

function createLibMarkUp(results) {
  const markUp = results
    .map(movie => {
      const date = new Date(`${movie.release_date}`);
      const year = date.getFullYear();

      const genresArray = movie.genres.map(genre => genre.name);
      let genresNames = '';
      if (genresArray.length > 2) {
        genresNames = arrayLengthCheck(genresArray).join(', ') + ', other';
      } else {
        genresNames = genresArray.join(', ');
      }
      return `
      <div class="thumb">
    <ul class="carditem" data-id='${movie.id}'>
        <li class="cardimg-wrap">
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="poster of the movie ${movie.original_title}"
                class="cardimg"
            />
        </li>
        <li class="cardtext-wrap">
            <h2 class="cardname">${movie.original_title}</h2>
            <div class="cardinfo">
                <p class="cardgenres">${genresNames}</span></p>
                <p class="cardyear">${year}</p>
            </div>
        </li>
    </ul>
</div>`;
    })
    .join('');

  movieWrapperEl.insertAdjacentHTML('beforeend', markUp);
  return markUp;
}

function arrayLengthCheck(array) {
  return array.slice(0, 2);
}