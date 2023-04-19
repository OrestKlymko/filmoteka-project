import * as basicLightbox from 'basiclightbox';
import { getTrailer } from './get-trailer';

const modal = document.querySelector('.modal');
let instance;

export default async function onTrailerButtonClick(e) {
  modal.classList.remove('modal--visible');
  const trailerId = e.target.getAttribute('data-trailer-url');
  try {
    const videoSrc = await getTrailer(trailerId);
    instance = basicLightbox.create(`
      <iframe width="560" height="315" src="${videoSrc}" frameborder="0"></iframe>
    `, {
      onClose: onLightboxClose,
    });
    instance.show();
    document.addEventListener('keydown', onLightboxKeyPress);
  } catch (error) {
    trailerButton.classList.add('is-hidden');
  }
}

function onLightboxClose() {
  modal.classList.add('modal--visible');
  document.removeEventListener('keydown', onLightboxKeyPress);
}

function onLightboxKeyPress(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

const trailerButton = document.querySelector('[data-trailer-url]');
trailerButton.addEventListener('click', onTrailerButtonClick);
