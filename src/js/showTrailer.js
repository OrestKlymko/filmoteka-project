import * as basicLightbox from 'basiclightbox';
import getTrailer from './js/getTrailer';
// Тут замінити на id з дата-атрибуту кнопки
const ID = 1841;
// -----------------------------------------0-

export default async function fetchTrailer(id) {
  id.preventDefault();
  try {
    const response = await getTrailer(ID);
    const videoKey = response.data.results[0].key;
    const videoUrl = `https://www.youtube.com/watch?v=${videoKey}`;

    const button = document.querySelector('[data-trailer-url]');
    button.addEventListener('click', () => {
      const lightbox = basicLightbox.create(`
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/${videoKey}"
          frameborder="0"
          allowfullscreen>
        </iframe>
      `);
      lightbox.show();
    });
  } catch (error) {
    console.error(error);
  }
}