import basicLightbox from 'basiclightbox';
import getMovieById from './get-movie-by-id';
let keyTrailer = '';

// export async function showTrailer() {
//     const film = await getMovieById(id)
//     try {
//         if (movies && movies.length) {
//           const objTrailer = movies.find(movie => movie.type === 'Trailer');

//           if (objTrailer && objTrailer.type !== 'Trailer') {
//             return;
//           }
//           keyTrailer = objTrailer.key;
//         }

//         refresh(id, keyTrailer);
//         keyTrailer = '';
//       }
//     catch{(error => {
//         refresh(id);
//       });
//   };
// }
    
//   const trailerRef = document.querySelector('[data-btn=watchTrailer]');
//   if (!keyTrailer) {
//     trailerRef.classList.add('is-hidden');
//   }

//   trailerRef.onclick = () => {
//     basicLightbox
//       .create(
//         `<iframe width="640" height="360"
//         src="https://www.youtube.com/embed/${keyTrailer}"
//         title="" frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//       )
//       .show();
//   }