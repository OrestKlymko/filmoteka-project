let watchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];
let queuedMovies = JSON.parse(localStorage.getItem('queuedMovies')) || [];

const addToWatchedBtn = document.querySelector('#add-to-watched-btn');
const addToQueueBtn = document.querySelector('#add-to-queue-btn');

addToWatchedBtn.addEventListener('click', e => {
  const movieId = e.target.getAttribute('data-id');
  const index = watchedMovies.indexOf(movieId);
  if (index !== -1) {
    watchedMovies.splice(index, 1);
    return localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
  }

  watchedMovies.push(movieId);
  return localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
});

addToQueueBtn.addEventListener('click', e => {
  const movieId = e.target.getAttribute('data-id');
  const index = watchedMovies.indexOf(movieId);

  if (index !== -1) {
    watchedMovies.splice(index, 1);
    return localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
  }

  queuedMovies.push(movieId);
  return localStorage.setItem('queuedMovies', JSON.stringify(queuedMovies));
});
