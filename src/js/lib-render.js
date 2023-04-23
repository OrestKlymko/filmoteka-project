const movieWrapperEl = document.querySelector('.lib-container');

export function createLibMarkUp(results) {  
    const markUp = results
    .map(movie => {
      const date = new Date(`${movie.release_date}`);
      const year = date.getFullYear();

      const genresArray = movie.genres.map(genre => genre.name);
      let genresNames = '';
      if (genresArray.length > 2) {
        genresNames = arrayLengthCheck(genresArray).join(', ') + ', other';
      } else {
        genresNames = genresArray.join(', ');
      }
      return `
        <div class="thumb">
      <ul class="carditem" data-id='${movie.id}'>
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
  </div>`;
    })
    .join('');
  

  movieWrapperEl.innerHTML = '';
  movieWrapperEl.insertAdjacentHTML('beforeend', markUp);
  return markUp;
}

function arrayLengthCheck(array) {
  return array.slice(0, 2);
}