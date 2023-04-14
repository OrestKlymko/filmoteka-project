const closeButton = document.querySelector('.modal__btn-close');
closeButton.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

const modal = document.querySelector('.modal');
modal.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.classList.remove('modal--visible');
}