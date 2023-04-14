// Функція для запиту на бек, видалити в майбутньому і зробити імпорт
const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ca3ef83497283bd11ad4f2544336ab4a';

async function getInfoMovie(movie_id) {
  const url = `${MAIN_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
  return await fetch(url)
    .then(response => response.json())
    .catch(error => {});
}
////////////////////////////////////////////////////////////////////////////////////

let watchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];
let queuedMovies = JSON.parse(localStorage.getItem('queuedMovies')) || [];

const addToWatchedBtn = document.querySelector('.watchedBtn');
const addToQueueBtn = document.querySelector('.queueBtn');

addToWatchedBtn.addEventListener('click', async e => {
  const movieId = 594767; // e.target.getAttribute('data-id');
  const movieObj = await getInfoMovie(movieId);

  //   Перевірка на наявність фільму в масиві 
  const isMovieInWatched = watchedMovies.some(
    movie => movie.id === movieObj.id
  );

  if (isMovieInWatched) {
    watchedMovies = watchedMovies.filter(movie => movie.id !== movieObj.id); //Видалення, якщо фільм вже є в масиві
  } else {  
    watchedMovies.push(movieObj); // Якщо немає, додаємо фільм в масив
  }

  return localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
});

addToQueueBtn.addEventListener('click', async e => {
  const movieId = 594767; // e.target.getAttribute('data-id');
  const movieObj = await getInfoMovie(movieId);

  //   Перевірка на наявність фільму в масиві
  const isMovieInQueue = queuedMovies.some(movie => movie.id === movieObj.id); //Видалення, якщо фільм вже є в масиві
  if (isMovieInQueue) {
    queuedMovies = queuedMovies.filter(movie => movie.id !== movieObj.id);
  } else {
    queuedMovies.push(movieObj); // Якщо немає, додаємо фільм в масив
  }

  return localStorage.setItem('queuedMovies', JSON.stringify(queuedMovies));
});
