import getMovieById from './get-movie-by-id';

const WATCHED_MOVIES = 'watchedMovies';
const QUEUE_MOVIES = 'queuedMovies';
const WATCH_BTN_TEXT = 'watchedBtnText';
const QUEUE_BTN_TEXT = 'queueBtnText';

export let watchedMovies =
  JSON.parse(localStorage.getItem(WATCHED_MOVIES)) || [];
export let queuedMovies = 
  JSON.parse(localStorage.getItem(QUEUE_MOVIES)) || [];
// import { watchedMovies, queuedMovies } from './local-storage';

const addToWatchedBtn = document.querySelector('.watchedBtn');
const addToQueueBtn = document.querySelector('.queueBtn');

addToWatchedBtn.textContent =
  localStorage.getItem(WATCH_BTN_TEXT) || 'Add to watch';
addToQueueBtn.textContent =
  localStorage.getItem(QUEUE_BTN_TEXT) || 'Add to queue';

addToWatchedBtn.addEventListener('click', handleWatchBtnClick);
addToQueueBtn.addEventListener('click', handleQueueBtnClick);

async function handleWatchBtnClick(e) {
  const movieId = e.target.getAttribute('data-movie-id');
  const movieObj = await getMovieById(movieId);

  const isMovieInWatched = watchedMovies.some(
    movie => movie.id === movieObj.id
  );

  if (isMovieInWatched) {
    watchedMovies = watchedMovies.filter(movie => movie.id !== movieObj.id);
    setWatchBtnToLs();
    return localStorage.setItem(WATCHED_MOVIES, JSON.stringify(watchedMovies));
  }

  watchedMovies.push(movieObj);
  changeWatchBtnText();
  return localStorage.setItem(WATCHED_MOVIES, JSON.stringify(watchedMovies));
}

async function handleQueueBtnClick(e) {
  const movieId = e.target.getAttribute('data-movie-id');
  const movieObj = await getMovieById(movieId);

  const isMovieInQueue = queuedMovies.some(movie => movie.id === movieObj.id);
  if (isMovieInQueue) {
    queuedMovies = queuedMovies.filter(movie => movie.id !== movieObj.id);
    setQueBtnToLs();
    return localStorage.setItem('queuedMovies', JSON.stringify(queuedMovies));
  }

  queuedMovies.push(movieObj);
  changeQueBtnText();
  return localStorage.setItem('queuedMovies', JSON.stringify(queuedMovies));
}

function setWatchBtnToLs() {
  localStorage.setItem(WATCH_BTN_TEXT, 'Add to watch');
  return (addToWatchedBtn.textContent = localStorage.getItem(WATCH_BTN_TEXT));
}

function changeWatchBtnText() {
  localStorage.setItem(WATCH_BTN_TEXT, 'Remove from watch');
  return (addToWatchedBtn.textContent = localStorage.getItem(WATCH_BTN_TEXT));
}

function setQueBtnToLs() {
  localStorage.setItem(QUEUE_BTN_TEXT, 'Add to queue');
  return (addToQueueBtn.textContent = localStorage.getItem(QUEUE_BTN_TEXT));
}

function changeQueBtnText() {
  localStorage.setItem(QUEUE_BTN_TEXT, 'Remove from queue');
  return (addToQueueBtn.textContent = localStorage.getItem(QUEUE_BTN_TEXT));
}
