import getMoviesById from './get-movie-by-id.js'
import Notiflix from 'notiflix';
import { genres } from './genres-array'

const searchMoviesFormEl = document.querySelector('#search-form')
const movieWrapperEl = document.querySelector('.js-movies-wrapper') 
const searchInputEl = document.querySelector('.search-input');


const handleSearchMoviesForm = async event => {
    event.preventDefault()

    movieWrapperEl.innerHTML = '';

    const movieName = searchInputEl.value.trim()

    if (movieName === '') {
    return;
    }

    try {
        const {results} = await getMoviesById(movieName)
        // console.log(results)

        createMarkUp(results)

        if (!results.length) {
            console.log('Movies not found!');
            Notiflix.Notify.failure('Search result not successful. Enter the correct movie name.'
            );
      return;
        }
    } catch (err) {
        console.log(err)
    }

}

export function createMarkUp(results) {
    const markUp = results.map(
        (movie) => {
            const date = new Date(`${movie.release_date}`);
            const year = date.getFullYear()

            const genresArray = movie.genre_ids.map((id) => { 
                const genre = genres.find(genre => genre.id === id)
                
                  return genre ? genre.name : '';  
            })
            // console.log(genresArray)
let genresNames = ''
            if (genresArray.length > 2 ) {
                 genresNames = arrayLengthCheck(genresArray).join(', ') + ", other"
            } else {
                genresNames = genresArray.join(', ')
            }
            
        return `<div>
    <ul class="card__item">
        <li class="card__img-wrap">
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="poster of the movie ${movie.original_title}"
                class="card__img"
            />
        </li>
        <li class="card__text-wrap">
            <h2 class="card__name">${movie.original_title}</h2>
            <div class="card__info">
                <p class="card__genres">${genresNames}</span></p>
                <p class="card__year">${year}</p>
            </div>
        </li>
    </ul>
</div>
`
   })
        .join('');
    
    movieWrapperEl.insertAdjacentHTML('beforeend', markUp);
  
    return markUp
}

export function arrayLengthCheck(array) {
    return array.slice(0,2) 
    };

searchMoviesFormEl.addEventListener('submit', handleSearchMoviesForm)
