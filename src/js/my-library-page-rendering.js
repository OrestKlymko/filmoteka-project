import { watchedMovies, queuedMovies } from './local-storage'; 
import {createMarkUp} from './search-movie-page-rendering'

console.log( watchedMovies)
const movieWrapperEl = document.querySelector('.js-movies-wrapper') 
const myLibraryBtnEl = document.querySelector('.js-my-libtaty-btn')

myLibraryBtnEl.addEventListener('click', handleWatchedMoviesClick)
// додати eventListiner до кнопок watched i quered

function handleWatchedMoviesClick () {

    movieWrapperEl.innerHTML = '';

    try {
 if (watchedMovies.length === 0) {
        clearPage()
        return
    }
    
    console.log(watchedMovies)
    createMarkUp(watchedMovies)
    }
    catch(error) {
        console.error('Set state error: ', error.message);
    }    
}

function handleQueuedMoviesClick () {

    movieWrapperEl.innerHTML = '';

    try {
 if (queuedMovies.length === 0) {
        clearPage()
        return
    }
    
    console.log(queuedMovies)
    createMarkUp(queuedMovies)
    }
    catch(error) {
        console.error('Set state error: ', error.message);
    }    
}


function clearPage() {
    const markUp = `<p>Sorry, there is no any movie in your library yet</p>
<svg class="icon icon-images"><use xlink:href="#icon-images"></use></svg> `
}



