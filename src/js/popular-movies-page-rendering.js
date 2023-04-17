import { createMarkUp } from './search-movie-page-rendering'
import {getPopularMovies} from './get-popular-movies'

const movieWrapperEl = document.querySelector('.js-movies-wrapper') 

const getPopularMoviesIns = new getPopularMovies()

movieWrapperEl.innerHTML = ''

const popularMoviesPageRendering = async() => {
    try {
        const { results } = await getPopularMoviesIns.fetchPopularMovies()
        // console.log(results)

        createMarkUp(results)

    } catch (err) {
        console.log(err)
    }
}

popularMoviesPageRendering()