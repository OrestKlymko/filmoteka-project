import getMovieById from './get-movie-by-id';
import { createLibMarkUp } from './lib-render';
import Notiflix from 'notiflix';
import firebase from 'firebase/compat/app';
import 'firebase/auth';

const WATCHED_MOVIES = 'watchedMovies';
const QUEUE_MOVIES = 'queuedMovies';

export let watchedMovies =
  JSON.parse(localStorage.getItem(WATCHED_MOVIES)) || [];
export let queuedMovies = JSON.parse(localStorage.getItem(QUEUE_MOVIES)) || [];
// import { watchedMovies, queuedMovies } from './local-storage';

const addToWatchedBtn = document.querySelector('.watchedBtn');
const addToQueueBtn = document.querySelector('.queueBtn');
const movieWrapperEl = document.querySelector('.lib-container');

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
        watchedMovies = watchedMovies.filter(movie => movie.id !== movieObj.id);
        addToWatchedBtn.textContent = 'Add to watch';
        localStorage.setItem(WATCHED_MOVIES, JSON.stringify(watchedMovies));

        if (movieWrapperEl) {
          createLibMarkUp(watchedMovies);
        }
        return;
      }

      watchedMovies.push(movieObj);
      addToWatchedBtn.textContent = 'Remove from watched';
      return localStorage.setItem(
        WATCHED_MOVIES,
        JSON.stringify(watchedMovies)
      );
    } else {
      // Користувач не авторизований
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
        queuedMovies = queuedMovies.filter(movie => movie.id !== movieObj.id);
        addToQueueBtn.textContent = 'Add to queue';
        localStorage.setItem('queuedMovies', JSON.stringify(queuedMovies));

        if (movieWrapperEl) {
          createLibMarkUp(queuedMovies);
        }
        return;
      }

      queuedMovies.push(movieObj);
      addToQueueBtn.textContent = 'Remove from queue';
      return localStorage.setItem('queuedMovies', JSON.stringify(queuedMovies));
    } else {
      Notiflix.Notify.warning('You need to login to add a movie to your queue');
      addToQueueBtn.textContent = 'Add to queue';
      return;
    }
  });
}
