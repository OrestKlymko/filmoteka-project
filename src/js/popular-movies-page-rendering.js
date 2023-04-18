import createMarkUp from './make-markup-card'
import {getPopularMovies} from './get-popular-movies'

const movieWrapperEl = document.getElementById('uk') 

const getPopularMoviesIns = new getPopularMovies()


// movieWrapperEl.innerHTML = ''

const popularMoviesPageRendering = async() => {
    try {
        const { results } = await getPopularMoviesIns.fetchPopularMovies()

        createMarkUp(results)

    } catch (err) {
        console.log(err)
    }
}

popularMoviesPageRendering()