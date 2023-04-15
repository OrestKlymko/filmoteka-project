// +// import { fetchMoviesByName } from './get-movie-by-name'
// import Notiflix from 'notiflix';
// import debounce from 'lodash.debounce';

// const DEBOUNCE_DELAY = 300;

// const searchMoviesFormEl = document.querySelector('.js-search-movies-form')
// const movieWrapperEl = document.querySelector('.js-movies-wrapper') 



// async function getGenresOfMovies() {
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/genre/movie/list?api_key=f7d7a9b2e374f67b5381a74b61fb7dc2&language=en-US`
//     );    
//     return await response.json();

//   } catch (error) {

//     console.log(error);
//   }
// }

// const receiveGenresOfMovies = async() => {
//     try {
//         const genres = await getGenresOfMovies()
//         console.log(genres)
// // genres.filter((genre) => genre.id === genre_ids)
//     } catch (err) {
//         console.log(err)
//     }
// }

// //  console.log(genres)

// receiveGenresOfMovies()

// const handleSearchMoviesForm = async event => {
//     event.preventDefault()

//     movieWrapperEl.innerHTML = '';

//     const movieName = event.target.value.trim()

//     if (movieName === '') {
//     return;
//     }

//     try {
//         const {results} = await fetchMoviesByName(movieName)
//         console.log(results)

//         createMarkUp(results)

//         if (!results.length) {
//             console.log('Movies not found!');
//             Notiflix.Notify.failure('Search result not successful. Enter the correct movie name.'
//             );
//       return;
//         }
//     } catch (err) {
//         console.log(err)
//     }

// }

// export function createMarkUp(results) {
//     const markUp = results.map(
//         (movie) => {
//             const date = new Date(`${movie.release_date}`);
//             const year = date.getFullYear()

// console.log(year);
//         return `
// <div>
//   <img src='${movie.backdrop_path}' alt='poster of the movie ${movie.original_title}' loading="lazy" />
//     <p > ${movie.original_title}
//     </p>
//     <p >${movie.genre_ids}
//     </p>
//     <p >${year}
//     </p>
// </div>`
//    })
//     .join('');

//   movieWrapperEl.insertAdjacentHTML('beforeend', markUp); 
// }



// searchMoviesFormEl.addEventListener('input', debounce(handleSearchMoviesForm, DEBOUNCE_DELAY))
