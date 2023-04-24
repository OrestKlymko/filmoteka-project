import getMovieById from './get-movie-by-id';
import Notiflix from 'notiflix';
import firebase from 'firebase/compat/app';
import 'firebase/auth';

const WATCHED_MOVIES = 'watchedMovies';
const QUEUE_MOVIES = 'queuedMovies';

export let watchedMovies =
  JSON.parse(localStorage.getItem(WATCHED_MOVIES)) || [];
export let queuedMovies = 
  JSON.parse(localStorage.getItem(QUEUE_MOVIES)) || [];

const addToWatchedBtn = document.querySelector('.watchedBtn');
const addToQueueBtn = document.querySelector('.queueBtn');

addToWatchedBtn.addEventListener('click', handleWatchBtnClick);
addToQueueBtn.addEventListener('click', handleQueueBtnClick);

async function handleWatchBtnClick(e) {
  const movieId = e.target.getAttribute('data-movie-id');
  const movieObj = await getMovieById(movieId);

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      const isMovieInWatched = watchedMovies.some(
        movie => movie.id === movieObj.id
      );

      if (isMovieInWatched) {
        return deleteMovieFromWatch(movieObj);
      }

      return addMovieToWatch(movieObj);
    } else {
      Notiflix.Notify.warning(
        'You need to login to add a movie to your watched'
      );
      addToWatchedBtn.textContent = 'Add to watch';
      return;
    }
  });
}

async function handleQueueBtnClick(e) {
  const movieId = e.target.getAttribute('data-movie-id');
  const movieObj = await getMovieById(movieId);

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      const isMovieInQueue = queuedMovies.some(
        movie => movie.id === movieObj.id
      );
      if (isMovieInQueue) {
        return deleteMovieFromQueue(movieObj);
      }

      return addMovieToQueue(movieObj);
    } else {
      Notiflix.Notify.warning('You need to login to add a movie to your queue');
      addToQueueBtn.textContent = 'Add to queue';
      return;
    }
  });
}

function deleteMovieFromWatch(array) {
  watchedMovies = watchedMovies.filter(movie => movie.id !== array.id);
  addToWatchedBtn.textContent = 'Add to watch';
  localStorage.setItem(WATCHED_MOVIES, JSON.stringify(watchedMovies));

  return;
}

function addMovieToWatch(array) {
  watchedMovies.push(array);
  addToWatchedBtn.textContent = 'Remove from watched';
  localStorage.setItem(WATCHED_MOVIES, JSON.stringify(watchedMovies));

  return;
}

function deleteMovieFromQueue(array) {
  queuedMovies = queuedMovies.filter(movie => movie.id !== array.id);
  addToQueueBtn.textContent = 'Add to queue';
  localStorage.setItem('queuedMovies', JSON.stringify(queuedMovies));

  return;
}

function addMovieToQueue(array) {
  queuedMovies.push(array);
  addToQueueBtn.textContent = 'Remove from queue';
  localStorage.setItem('queuedMovies', JSON.stringify(queuedMovies));

  return;
}
