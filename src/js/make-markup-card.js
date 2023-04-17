
// function sliceCategories(categories) { 
//     if (categories.length < 4) {
        
//         return categories
//     } else {
//         return [...categories.slice(0, 2), "Other"];
        
//     }
// };


// export function makeMarkupCard(name, sliceCategories, year) {
//     const card = `
//     <div class="card">  
//       <div class="card__img-wrap">
//         <img src="#" alt="" class="card__img" />
//       </div>
//       <div class="card__text-wrap">
//         <h2 class="card__name">${name}</h2>
//         <div class="card__info">
//           <p class="card__genres">${sliceCategories.join(', ')}</p>
//           <p class="card__year">${year}</p>
//         </div>
//       </div>
//     </div>
//     `;
//     return card;
//   }








// import { fetchMoviesByName } from './get-movie-by-name'
import Notiflix from 'notiflix';
import { genres } from './genres-array'

const searchMoviesFormEl = document.querySelector('#search-form')
const movieWrapperEl = document.querySelector('.js-movies-wrapper') 
const searchInputEl = document.querySelector('.search-input');

//видалити після імпорту
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=f7d7a9b2e374f67b5381a74b61fb7dc2';

export default async function fetchMoviesByName(movieName) {
  try {
    const response = await fetch(
      ${BASE_URL}/search/movie${API_KEY}&query=${movieName}&language=en-US
    );
    const data = await response.json();
    if (data.results.length === 0) {
      throw new Error(No movies found with name "${movieName}");
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}

const handleSearchMoviesForm = async event => {
    event.preventDefault()

    movieWrapperEl.innerHTML = '';

    const movieName = searchInputEl.value.trim()

    if (movieName === '') {
    return;
    }

    try {
        const {results} = await fetchMoviesByName(movieName)
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
            const date = new Date(${movie.release_date});
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
            
        return `<div class="js-movies-wrapper">
    <ul class="carditem">
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



// js-movies-wrapper - класс контейнеру галереї