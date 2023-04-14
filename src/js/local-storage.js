import getMovieById from './get-movie-by-id';

export let watchedMovies =
  JSON.parse(localStorage.getItem('watchedMovies')) || [];
export let queuedMovies =
  JSON.parse(localStorage.getItem('queuedMovies')) || [];
// import { watchedMovies, queuedMovies } from './local-storage'; Отримати масиви з об'єктами фільмів в іншому файлі

const addToWatchedBtn = document.querySelector('.watchedBtn');
const addToQueueBtn = document.querySelector('.queueBtn');

addToWatchedBtn.addEventListener('click', async e => {
  const movieId = 594767; // e.target.getAttribute('data-id');
  const movieObj = await getMovieById(movieId);

  //   Перевірка на наявність фільму в масиві
  const isMovieInWatched = watchedMovies.some(
    movie => movie.id === movieObj.id
  );

  if (isMovieInWatched) {
    watchedMovies = watchedMovies.filter(movie => movie.id !== movieObj.id); //Видалення, якщо фільм вже є в масиві
    return localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
  }

  watchedMovies.push(movieObj); // Якщо немає, додаємо фільм в масив
  return localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
});

addToQueueBtn.addEventListener('click', async e => {
  const movieId = 594767; // e.target.getAttribute('data-id');
  const movieObj = await getMovieById(movieId);

  //   Перевірка на наявність фільму в масиві
  const isMovieInQueue = queuedMovies.some(movie => movie.id === movieObj.id); //Видалення, якщо фільм вже є в масиві
  if (isMovieInQueue) {
    queuedMovies = queuedMovies.filter(movie => movie.id !== movieObj.id);
    return localStorage.setItem('queuedMovies', JSON.stringify(queuedMovies));
  }

  queuedMovies.push(movieObj); // Якщо немає, додаємо фільм в масив
  return localStorage.setItem('queuedMovies', JSON.stringify(queuedMovies));
});
