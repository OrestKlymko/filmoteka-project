
const movieWrapperEl = document.querySelector('.js-movies-wrapper') 
const myLibraryBtnEl = document.querySelector('.js-my-libtaty-btn')

// myLibraryBtnEl.addeventlistiner('click', handleMyLibraryBtnClick)

function handleMyLibraryBtnClick () {

    movieWrapperEl.innerHTML = '';

    getMovieFromLocalStorage()

}

function getMovieFromLocalStorage() {
    try {
        const watchedMovies = localStorage.getItem('watchedMovies');
        const queuedMovies = localStorage.getItem('queuedMovies');
    
        if (!watchedMovies && !queuedMovies) {
            clearPage()
            return
        }

        if (watchedMovies) {
            const parsedWatchedMovies = JSON.parse(watchedMovies);
            createMarkUp(parsedWatchedMovies)
        }
        
        if (queuedMovies) {
            const parsedQueuedMovies = JSON.parse(queuedMovies);
            createMarkUp(queuedMovies)
        }
    }
    catch(error) {
        console.error('Set state error: ', error.message);
    }
}

function clearPage() {
    const markUp = `<p>Sorry, there is no any movie in your library yet</p>
<svg class="icon icon-images"><use xlink:href="#icon-images"></use></svg> `
}



