let watchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];
let queuedMovies = JSON.parse(localStorage.getItem('queuedMovies')) || [];

const addToWatchedBtn = document.querySelector('#add-to-watched-btn');
const addToQueueBtn = document.querySelector('#add-to-queue-btn');


addToWatchedBtn.addEventListener('click', () => {
  const movieId = // отримати id фільму з API
  watchedMovies.push(movieId);
  localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
});

addToQueueBtn.addEventListener('click', () => {
  const movieId = // отримати id фільму з API
  queuedMovies.push(movieId);
  localStorage.setItem('queuedMovies', JSON.stringify(queuedMovies));
});